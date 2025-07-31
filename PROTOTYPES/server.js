#!/usr/bin/env node

/**
 * AI Workflow Playbook - Production Server
 * 
 * 프로덕션 환경용 HTTP 서버
 * - 정적 파일 서빙
 * - 헬스체크 엔드포인트
 * - 보안 헤더
 * - 로깅
 * 
 * Created: 2025-07-31
 */

const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { SecurityLogger } = require('./infrastructure/security/security');

// 환경 변수
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const ENABLE_HTTPS = process.env.ENABLE_HTTPS === 'true';
const SSL_KEY_PATH = process.env.SSL_KEY_PATH || './ssl/private.key';
const SSL_CERT_PATH = process.env.SSL_CERT_PATH || './ssl/certificate.crt';

// MIME 타입 정의
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.md': 'text/markdown; charset=utf-8'
};

// 서버 통계
const serverStats = {
  startTime: Date.now(),
  requests: 0,
  errors: 0,
  uptime: () => Date.now() - serverStats.startTime
};

// 보안 헤더
function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=()');
  
  if (NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    res.setHeader('Content-Security-Policy', 
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline'; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https:; " +
      "connect-src 'self';"
    );
  }
}

// CORS 헤더 (개발 환경에서만)
function setCORSHeaders(res) {
  if (NODE_ENV === 'development') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
}

// 파일 서빙
function serveFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      serverStats.errors++;
      SecurityLogger.error('File read error', { filePath, error: err.message });
      
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 - Not Found</title></head>
        <body>
          <h1>404 - Page Not Found</h1>
          <p>The requested file could not be found.</p>
          <a href="/">Go Home</a>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const mimeType = MIME_TYPES[ext] || 'application/octet-stream';
    
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(data);
  });
}

// 디렉토리 인덱스 생성
function generateDirectoryIndex(dirPath, urlPath, res) {
  fs.readdir(dirPath, { withFileTypes: true }, (err, entries) => {
    if (err) {
      serverStats.errors++;
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>500 - Internal Server Error</h1>');
      return;
    }

    const html = `
      <!DOCTYPE html>
      <html lang="ko">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>AI Workflow Playbook - ${urlPath}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 2rem; max-width: 800px; margin: 0 auto; }
          h1 { color: #667eea; border-bottom: 2px solid #667eea; padding-bottom: 0.5rem; }
          .file-list { list-style: none; padding: 0; }
          .file-item { margin: 0.5rem 0; }
          .file-link { text-decoration: none; color: #333; padding: 0.5rem; border-radius: 4px; display: block; transition: background 0.2s; }
          .file-link:hover { background: #f0f0f0; }
          .file-icon { margin-right: 0.5rem; }
          .directory { color: #667eea; }
          .file { color: #666; }
          .back-link { color: #667eea; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1>🚀 AI Workflow Playbook</h1>
        <p>경로: ${urlPath}</p>
        ${urlPath !== '/' ? '<a href="../" class="back-link">← 상위 디렉토리</a>' : ''}
        <ul class="file-list">
          ${entries.map(entry => {
            const isDir = entry.isDirectory();
            const icon = isDir ? '📁' : '📄';
            const className = isDir ? 'directory' : 'file';
            const href = path.join(urlPath, entry.name);
            
            return `
              <li class="file-item">
                <a href="${href}" class="file-link ${className}">
                  <span class="file-icon">${icon}</span>
                  ${entry.name}
                </a>
              </li>
            `;
          }).join('')}
        </ul>
        <hr>
        <p><small>AI Workflow Playbook Production Server | Uptime: ${Math.round(serverStats.uptime() / 1000)}s</small></p>
      </body>
      </html>
    `;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
  });
}

// 헬스체크 엔드포인트
function handleHealthCheck(res) {
  const health = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: serverStats.uptime(),
    requests: serverStats.requests,
    errors: serverStats.errors,
    memory: process.memoryUsage(),
    version: '3.1.1'
  };

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(health, null, 2));
}

// 메트릭스 엔드포인트
function handleMetrics(res) {
  const metrics = `
# AI Workflow Playbook Metrics
ai_workflow_requests_total ${serverStats.requests}
ai_workflow_errors_total ${serverStats.errors}
ai_workflow_uptime_seconds ${Math.round(serverStats.uptime() / 1000)}
ai_workflow_memory_usage_bytes ${process.memoryUsage().heapUsed}
  `.trim();

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(metrics);
}

// 메인 요청 핸들러
function handleRequest(req, res) {
  serverStats.requests++;
  
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  
  // 보안 헤더 설정
  setSecurityHeaders(res);
  setCORSHeaders(res);
  
  SecurityLogger.info('Request', { 
    method: req.method, 
    url: pathname, 
    userAgent: req.headers['user-agent']?.substring(0, 100) 
  });

  // 헬스체크
  if (pathname === '/health') {
    return handleHealthCheck(res);
  }

  // 메트릭스
  if (pathname === '/metrics') {
    return handleMetrics(res);
  }

  // OPTIONS 요청 처리 (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // GET 요청만 허용
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'text/html' });
    res.end('<h1>405 - Method Not Allowed</h1>');
    return;
  }

  // 경로 정규화 및 보안 검사
  let filePath = path.join(__dirname, pathname);
  
  // 경로 탐색 공격 방지
  if (!filePath.startsWith(__dirname)) {
    serverStats.errors++;
    SecurityLogger.warn('Path traversal attempt', { pathname, filePath });
    res.writeHead(403, { 'Content-Type': 'text/html' });
    res.end('<h1>403 - Forbidden</h1>');
    return;
  }

  // 루트 경로면 START_HERE.md를 보여주거나 디렉토리 인덱스
  if (pathname === '/') {
    const startHerePath = path.join(__dirname, 'START_HERE.md');
    fs.access(startHerePath, fs.constants.F_OK, (err) => {
      if (err) {
        generateDirectoryIndex(__dirname, pathname, res);
      } else {
        // START_HERE.md를 HTML로 변환해서 보여주기
        fs.readFile(startHerePath, 'utf8', (err, content) => {
          if (err) {
            generateDirectoryIndex(__dirname, pathname, res);
            return;
          }
          
          const html = `
            <!DOCTYPE html>
            <html lang="ko">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>🚀 AI Workflow Playbook - 즉시 시작!</title>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 900px; margin: 0 auto; padding: 2rem; line-height: 1.6; }
                h1 { color: #667eea; border-bottom: 3px solid #667eea; padding-bottom: 0.5rem; }
                h2 { color: #764ba2; margin-top: 2rem; }
                h3 { color: #333; }
                pre { background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; }
                code { background: #f0f0f0; padding: 2px 4px; border-radius: 4px; font-size: 0.9em; }
                .highlight { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1rem; border-radius: 8px; margin: 1rem 0; }
                .quick-start { background: #e8f5e8; padding: 1rem; border-left: 4px solid #4caf50; margin: 1rem 0; }
                .directory { background: #fff3cd; padding: 1rem; border-left: 4px solid #ffc107; margin: 1rem 0; }
                a { color: #667eea; text-decoration: none; }
                a:hover { text-decoration: underline; }
                .button { display: inline-block; background: #667eea; color: white; padding: 0.8rem 1.5rem; border-radius: 6px; margin: 0.5rem; text-decoration: none; }
                .button:hover { background: #5a6fd8; }
              </style>
            </head>
            <body>
              <div class="highlight">
                <h1>🚀 AI Workflow Playbook이 실행 중입니다!</h1>
                <p><strong>축하합니다!</strong> 모든 시스템이 정상 작동 중입니다. 바로 시작하세요!</p>
              </div>
              
              <div class="quick-start">
                <h2>⚡ 즉시 시작하기</h2>
                <a href="/apps/interview-bot/" class="button">🤖 AI Interview Bot 시작</a>
                <a href="/apps/visual-builder/" class="button">🎨 Visual Builder 열기</a>
                <a href="/MASTER_PLAYBOOK/" class="button">📚 완전한 가이드 보기</a>
                <a href="/health" class="button">📊 시스템 상태 확인</a>
              </div>
              
              <pre>${content.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
              
              <div style="text-align: center; margin-top: 2rem; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                <p><strong>🎯 문제가 있으신가요?</strong></p>
                <a href="/TROUBLESHOOTING.md" class="button">🔧 문제 해결 가이드</a>
                <a href="/USER_GUIDE.md" class="button">📖 사용자 가이드</a>
              </div>
            </body>
            </html>
          `;
          
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(html);
        });
      });
    });
    return;
  }

  // 파일 존재 여부 확인
  fs.stat(filePath, (err, stats) => {
    if (err) {
      serverStats.errors++;
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - Not Found</h1>');
      return;
    }

    if (stats.isDirectory()) {
      // 디렉토리면 인덱스.html 확인 후 디렉토리 리스팅
      const indexPath = path.join(filePath, 'index.html');
      fs.access(indexPath, fs.constants.F_OK, (err) => {
        if (err) {
          generateDirectoryIndex(filePath, pathname, res);
        } else {
          serveFile(indexPath, res);
        }
      });
    } else {
      // 파일 서빙
      serveFile(filePath, res);
    }
  });
}

// 서버 생성 및 시작
function startServer() {
  let server;

  if (ENABLE_HTTPS && fs.existsSync(SSL_KEY_PATH) && fs.existsSync(SSL_CERT_PATH)) {
    // HTTPS 서버
    const options = {
      key: fs.readFileSync(SSL_KEY_PATH),
      cert: fs.readFileSync(SSL_CERT_PATH)
    };
    server = https.createServer(options, handleRequest);
    SecurityLogger.info('Starting HTTPS server', { port: PORT });
  } else {
    // HTTP 서버
    server = http.createServer(handleRequest);
    SecurityLogger.info('Starting HTTP server', { port: PORT });
  }

  server.listen(PORT, () => {
    console.log(`
🚀 AI Workflow Playbook Production Server
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📡 Server: ${ENABLE_HTTPS ? 'https' : 'http'}://localhost:${PORT}
🏭 Environment: ${NODE_ENV}
📊 Health Check: /health
📈 Metrics: /metrics
⏰ Started: ${new Date().toLocaleString('ko-KR')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `);
  });

  // 우아한 종료
  process.on('SIGTERM', () => {
    SecurityLogger.info('SIGTERM received, shutting down gracefully');
    server.close(() => {
      SecurityLogger.info('Server closed');
      process.exit(0);
    });
  });

  process.on('SIGINT', () => {
    SecurityLogger.info('SIGINT received, shutting down gracefully');
    server.close(() => {
      SecurityLogger.info('Server closed');
      process.exit(0);
    });
  });

  // 에러 처리
  server.on('error', (error) => {
    SecurityLogger.error('Server error', { error: error.message });
    process.exit(1);
  });
}

// 서버 시작
startServer();