/**
 * Security Utilities - 보안 유틸리티 모듈
 * 
 * HTML 새니타이제이션, 안전한 명령 실행 등 보안 관련 유틸리티
 * Created: 2025-07-31
 */

const { exec, spawn } = require('child_process');
const path = require('path');

/**
 * HTML 새니타이제이션 유틸리티
 */
class HTMLSanitizer {
  /**
   * 기본 HTML 새니타이제이션
   * @param {string} input - 새니타이즈할 HTML 문자열
   * @returns {string} 새니타이즈된 문자열
   */
  static sanitize(input) {
    if (typeof input !== 'string') {
      return '';
    }
    
    return input
      // 스크립트 태그 제거
      .replace(/<script[^>]*>.*?<\/script>/gis, '')
      // 이벤트 핸들러 속성 제거
      .replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '')
      // JavaScript URI 제거
      .replace(/javascript:/gi, '')
      // data URI 제한 (이미지 제외)
      .replace(/data:(?!image\/)[^;]+;base64[^"']*/gi, '')
      // 위험한 HTML 태그 제거
      .replace(/<(iframe|embed|object|applet|meta|link|style)[^>]*>.*?<\/\1>/gis, '')
      // 단독 태그 제거
      .replace(/<(iframe|embed|object|applet|meta|link|style)[^>]*\/?>/gi, '');
  }

  /**
   * 텍스트만 추출 (모든 HTML 태그 제거)
   * @param {string} input - HTML 문자열
   * @returns {string} 텍스트만 추출된 문자열
   */
  static textOnly(input) {
    if (typeof input !== 'string') {
      return '';
    }
    
    return input
      .replace(/<[^>]*>/g, '') // 모든 HTML 태그 제거
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#x27;/g, "'")
      .trim();
  }

  /**
   * 안전한 HTML 속성 생성
   * @param {Object} attributes - 속성 객체
   * @returns {string} 새니타이즈된 속성 문자열
   */
  static safeAttributes(attributes = {}) {
    const safeAttrs = [];
    const allowedAttrs = ['id', 'class', 'data-', 'aria-', 'role', 'title', 'alt', 'src', 'href'];
    
    for (const [key, value] of Object.entries(attributes)) {
      const isAllowed = allowedAttrs.some(allowed => 
        key === allowed || key.startsWith(allowed)
      );
      
      if (isAllowed && typeof value === 'string') {
        const safeValue = value
          .replace(/[<>'"]/g, '') // 위험한 문자 제거
          .replace(/javascript:/gi, '') // JavaScript URI 제거
          .trim();
        
        if (safeValue) {
          safeAttrs.push(`${key}="${safeValue}"`);
        }
      }
    }
    
    return safeAttrs.join(' ');
  }
}

/**
 * 안전한 명령 실행 유틸리티
 */
class SafeExecution {
  /**
   * 허용된 명령어 목록
   */
  static ALLOWED_COMMANDS = [
    'node',
    'npm',
    'bun',
    'yarn',
    'pnpm',
    'git',
    'cd',
    'ls',
    'mkdir',
    'cp',
    'mv'
  ];

  /**
   * 명령어 유효성 검사
   * @param {string} command - 실행할 명령어
   * @returns {boolean} 유효한 명령어인지 여부
   */
  static isValidCommand(command) {
    if (typeof command !== 'string') {
      return false;
    }

    const baseCommand = command.trim().split(' ')[0];
    return this.ALLOWED_COMMANDS.includes(baseCommand);
  }

  /**
   * 경로 유효성 검사
   * @param {string} targetPath - 검사할 경로
   * @param {string} basePath - 기준 경로
   * @returns {boolean} 안전한 경로인지 여부
   */
  static isValidPath(targetPath, basePath = process.cwd()) {
    try {
      const resolvedPath = path.resolve(basePath, targetPath);
      const resolvedBase = path.resolve(basePath);
      
      // 기준 경로 밖으로 나가는지 확인
      return resolvedPath.startsWith(resolvedBase);
    } catch (error) {
      return false;
    }
  }

  /**
   * 안전한 명령 실행
   * @param {string} command - 실행할 명령어
   * @param {Object} options - 실행 옵션
   * @returns {Promise<Object>} 실행 결과
   */
  static async safeExec(command, options = {}) {
    return new Promise((resolve, reject) => {
      // 명령어 유효성 검사
      if (!this.isValidCommand(command)) {
        reject(new Error(`Invalid command: ${command}`));
        return;
      }

      // 경로 유효성 검사
      if (options.cwd && !this.isValidPath(options.cwd)) {
        reject(new Error(`Invalid path: ${options.cwd}`));
        return;
      }

      // 안전한 옵션 설정
      const safeOptions = {
        timeout: options.timeout || 30000, // 30초 타임아웃
        maxBuffer: options.maxBuffer || 1024 * 1024, // 1MB 버퍼
        shell: false, // 셸 인젝션 방지
        ...options
      };

      exec(command, safeOptions, (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve({ stdout, stderr });
        }
      });
    });
  }

  /**
   * 안전한 스폰 실행
   * @param {string} command - 실행할 명령어
   * @param {Array} args - 명령어 인수
   * @param {Object} options - 실행 옵션
   * @returns {Promise<Object>} 실행 결과
   */
  static async safeSpawn(command, args = [], options = {}) {
    return new Promise((resolve, reject) => {
      // 명령어 유효성 검사
      if (!this.ALLOWED_COMMANDS.includes(command)) {
        reject(new Error(`Invalid command: ${command}`));
        return;
      }

      // 인수 유효성 검사
      const safeArgs = args.filter(arg => 
        typeof arg === 'string' && 
        !arg.includes(';') && 
        !arg.includes('|') && 
        !arg.includes('&')
      );

      const child = spawn(command, safeArgs, {
        stdio: 'pipe',
        timeout: options.timeout || 30000,
        ...options
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        resolve({ code, stdout, stderr });
      });

      child.on('error', reject);
    });
  }
}

/**
 * 입력 유효성 검사 유틸리티
 */
class InputValidator {
  /**
   * 프로젝트 이름 유효성 검사
   * @param {string} name - 프로젝트 이름
   * @returns {Object} 검사 결과
   */
  static validateProjectName(name) {
    const errors = [];
    
    if (!name || typeof name !== 'string') {
      errors.push('프로젝트 이름이 필요합니다');
    } else {
      if (name.length < 1 || name.length > 100) {
        errors.push('프로젝트 이름은 1-100자 사이여야 합니다');
      }
      
      if (!/^[a-zA-Z0-9_-]+$/.test(name)) {
        errors.push('프로젝트 이름은 영문, 숫자, 하이픈, 언더스코어만 사용 가능합니다');
      }
      
      if (name.startsWith('.') || name.startsWith('-')) {
        errors.push('프로젝트 이름은 점이나 하이픈으로 시작할 수 없습니다');
      }
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitized: name ? name.replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase() : ''
    };
  }

  /**
   * 이메일 유효성 검사
   * @param {string} email - 이메일 주소
   * @returns {Object} 검사 결과
   */
  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return {
      isValid: emailRegex.test(email),
      errors: emailRegex.test(email) ? [] : ['올바른 이메일 형식이 아닙니다']
    };
  }

  /**
   * URL 유효성 검사
   * @param {string} url - URL
   * @returns {Object} 검사 결과
   */
  static validateURL(url) {
    try {
      const parsed = new URL(url);
      const isValid = ['http:', 'https:'].includes(parsed.protocol);
      
      return {
        isValid,
        errors: isValid ? [] : ['HTTP 또는 HTTPS URL만 허용됩니다'],
        sanitized: isValid ? parsed.toString() : ''
      };
    } catch (error) {
      return {
        isValid: false,
        errors: ['올바른 URL 형식이 아닙니다'],
        sanitized: ''
      };
    }
  }
}

/**
 * 보안 로거
 */
class SecurityLogger {
  static log(level, message, metadata = {}) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      metadata: {
        ...metadata,
        pid: process.pid,
        platform: process.platform
      }
    };

    // 민감한 정보 제거
    const sanitizedEntry = this.sanitizeLogEntry(logEntry);
    
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`, 
      Object.keys(metadata).length > 0 ? sanitizedEntry.metadata : '');
  }

  static sanitizeLogEntry(entry) {
    const sensitiveKeys = ['password', 'token', 'key', 'secret', 'credential'];
    const sanitized = { ...entry };
    
    // 메타데이터에서 민감한 정보 제거
    for (const key in sanitized.metadata) {
      if (sensitiveKeys.some(sensitive => key.toLowerCase().includes(sensitive))) {
        sanitized.metadata[key] = '***REDACTED***';
      }
    }
    
    return sanitized;
  }

  static error(message, metadata = {}) {
    this.log('error', message, metadata);
  }

  static warn(message, metadata = {}) {
    this.log('warn', message, metadata);
  }

  static info(message, metadata = {}) {
    this.log('info', message, metadata);
  }

  static debug(message, metadata = {}) {
    if (process.env.DEBUG === 'true') {
      this.log('debug', message, metadata);
    }
  }
}

module.exports = {
  HTMLSanitizer,
  SafeExecution,
  InputValidator,
  SecurityLogger
};