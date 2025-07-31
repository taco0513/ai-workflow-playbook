# 🚀 배포 가이드 - AI Workflow Playbook v3.1.1

**대상**: DevOps 엔지니어, 시스템 관리자, 개발팀 리더  
**업데이트**: 2025-07-31  
**난이도**: 중급 ~ 고급

---

## 📋 목차

1. [배포 개요](#-배포-개요)
2. [사전 요구사항](#-사전-요구사항)
3. [로컬 개발 환경](#-로컬-개발-환경)
4. [Docker 배포](#-docker-배포)
5. [클라우드 배포](#-클라우드-배포)
6. [모니터링 설정](#-모니터링-설정)
7. [보안 설정](#-보안-설정)
8. [성능 최적화](#-성능-최적화)
9. [문제 해결](#-문제-해결)

---

## 🎯 배포 개요

### 아키텍처
```
┌─────────────────┐    ┌──────────────┐    ┌────────────────┐
│   사용자        │ ─→ │    Nginx     │ ─→ │ Node.js App    │
│   (브라우저)    │    │  (리버스     │    │ (AI Workflow   │
│                 │    │   프록시)    │    │  Playbook)     │
└─────────────────┘    └──────────────┘    └────────────────┘
                               │                      │
                               ▼                      ▼
                        ┌──────────────┐    ┌────────────────┐
                        │    SSL/TLS   │    │     Redis      │
                        │   (Let's     │    │   (캐시)       │
                        │  Encrypt)    │    │                │
                        └──────────────┘    └────────────────┘
```

### 지원 환경
- **운영체제**: Linux (Ubuntu 20.04+, CentOS 8+), macOS, Windows
- **컨테이너**: Docker, Docker Compose, Kubernetes
- **클라우드**: AWS, GCP, Azure, DigitalOcean, Vercel, Netlify
- **CPU**: x64, ARM64 (Apple Silicon 지원)

---

## 📋 사전 요구사항

### 최소 시스템 요구사항
- **CPU**: 2 cores (4 cores 권장)
- **메모리**: 2GB RAM (4GB 권장)
- **디스크**: 10GB 여유 공간 (SSD 권장)
- **네트워크**: 인터넷 연결 필수

### 소프트웨어 요구사항
```bash
# Node.js 18+ 설치
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Bun 설치 (권장 - 30배 빠른 패키지 관리)
curl -fsSL https://bun.sh/install | bash

# Docker 설치
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER

# Docker Compose 설치
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

---

## 💻 로컬 개발 환경

### 1. 저장소 클론
```bash
git clone https://github.com/your-org/ai-workflow-playbook.git
cd ai-workflow-playbook/PROTOTYPES
```

### 2. 환경 설정
```bash
# 환경변수 파일 생성
cp .env.example .env

# 환경변수 수정
nano .env
```

### 3. 의존성 설치 및 실행
```bash
# Bun 사용 (권장)
bun install
bun run dev

# 또는 npm 사용
npm install
npm run dev
```

### 4. 확인
- **메인**: http://localhost:3000
- **헬스체크**: http://localhost:3000/health
- **메트릭스**: http://localhost:3000/metrics

---

## 🐳 Docker 배포

### 1. 기본 Docker 실행
```bash
# 이미지 빌드
docker build -t ai-workflow-playbook .

# 컨테이너 실행
docker run -d \
  --name ai-workflow-playbook \
  -p 3000:3000 \
  -e NODE_ENV=production \
  ai-workflow-playbook

# 로그 확인
docker logs -f ai-workflow-playbook
```

### 2. Docker Compose 실행 (권장)
```bash
# 기본 실행
docker-compose -f infrastructure/docker/docker-compose.yml up -d

# 모니터링 포함 실행
docker-compose -f infrastructure/docker/docker-compose.yml --profile monitoring up -d

# 로그 확인
docker-compose -f infrastructure/docker/docker-compose.yml logs -f

# 종료
docker-compose -f infrastructure/docker/docker-compose.yml down
```

### 3. 서비스 구성
- **ai-workflow-playbook**: 메인 애플리케이션 (포트 3000)
- **nginx**: 리버스 프록시 (포트 80, 443)
- **redis**: 캐시 서버 (포트 6379)
- **prometheus**: 메트릭 수집 (포트 9090) [선택]
- **grafana**: 대시보드 (포트 3001) [선택]

---

## ☁️ 클라우드 배포

### AWS 배포 (ECS/Fargate)

#### 1. ECR에 이미지 푸시
```bash
# AWS CLI 설정
aws configure

# ECR 로그인
aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 123456789012.dkr.ecr.ap-northeast-2.amazonaws.com

# 이미지 태그 및 푸시
docker tag ai-workflow-playbook:latest 123456789012.dkr.ecr.ap-northeast-2.amazonaws.com/ai-workflow-playbook:latest
docker push 123456789012.dkr.ecr.ap-northeast-2.amazonaws.com/ai-workflow-playbook:latest
```

#### 2. ECS 태스크 정의
```json
{
  "family": "ai-workflow-playbook",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "executionRoleArn": "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
  "containerDefinitions": [
    {
      "name": "ai-workflow-playbook",
      "image": "123456789012.dkr.ecr.ap-northeast-2.amazonaws.com/ai-workflow-playbook:latest",
      "portMappings": [
        {
          "containerPort": 3000,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "NODE_ENV",
          "value": "production"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/ai-workflow-playbook",
          "awslogs-region": "ap-northeast-2",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}
```

### Google Cloud Platform (Cloud Run)
```bash
# gcloud 설정
gcloud auth login
gcloud config set project your-project-id

# 이미지 빌드 및 푸시
gcloud builds submit --tag gcr.io/your-project-id/ai-workflow-playbook

# Cloud Run 배포
gcloud run deploy ai-workflow-playbook \
  --image gcr.io/your-project-id/ai-workflow-playbook \
  --platform managed \
  --region asia-northeast1 \
  --allow-unauthenticated \
  --port 3000 \
  --memory 1Gi \
  --cpu 1
```

### Vercel 배포 (정적 사이트)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

### DigitalOcean App Platform
```yaml
# .do/app.yaml
name: ai-workflow-playbook
services:
- name: web
  source_dir: /
  github:
    repo: your-username/ai-workflow-playbook
    branch: main
  run_command: npm start
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  http_port: 3000
  routes:
  - path: /
  envs:
  - key: NODE_ENV
    value: production
```

---

## 📊 모니터링 설정

### 1. Prometheus + Grafana 실행
```bash
# 모니터링 스택 시작
docker-compose -f infrastructure/docker/docker-compose.yml --profile monitoring up -d

# 접속
# Prometheus: http://localhost:9090
# Grafana: http://localhost:3001 (admin/admin123!)
```

### 2. 커스텀 메트릭 확인
```bash
# 애플리케이션 메트릭
curl http://localhost:3000/metrics
```

### 3. 알림 설정
```yaml
# monitoring/prometheus.yml
rule_files:
  - "alert.rules.yml"

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093
```

### 4. 로그 관리
```bash
# 로그 디렉토리 확인
ls -la logs/

# 실시간 로그 모니터링
tail -f logs/app.log

# 로그 로테이션 (logrotate)
sudo nano /etc/logrotate.d/ai-workflow-playbook
```

---

## 🔒 보안 설정

### 1. SSL/TLS 인증서

#### Let's Encrypt 사용
```bash
# Certbot 설치
sudo apt install certbot python3-certbot-nginx

# 인증서 발급
sudo certbot --nginx -d yourdomain.com

# 자동 갱신 설정
sudo crontab -e
# 추가: 0 12 * * * /usr/bin/certbot renew --quiet
```

#### 자체 서명 인증서 (개발용)
```bash
# SSL 디렉토리 생성
mkdir -p ssl

# 인증서 생성
npm run ssl:generate
```

### 2. 방화벽 설정
```bash
# UFW 방화벽 설정
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw --force enable
```

### 3. 보안 헤더 확인
```bash
# 보안 헤더 테스트
curl -I https://yourdomain.com

# 예상 헤더들:
# X-Frame-Options: DENY
# X-Content-Type-Options: nosniff
# X-XSS-Protection: 1; mode=block
# Strict-Transport-Security: max-age=31536000
```

### 4. 정기 보안 업데이트
```bash
# 시스템 업데이트 스크립트
#!/bin/bash
sudo apt update && sudo apt upgrade -y
docker-compose -f infrastructure/docker/docker-compose.yml pull
docker-compose -f infrastructure/docker/docker-compose.yml up -d
```

---

## ⚡ 성능 최적화

### 1. Nginx 최적화
```nginx
# nginx.conf에 추가
worker_processes auto;
worker_connections 2048;

# 캐싱 설정
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=app_cache:10m max_size=1g inactive=60m;

location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    proxy_cache app_cache;
}
```

### 2. Node.js 최적화
```bash
# 프로덕션 환경변수
export NODE_ENV=production
export NODE_OPTIONS="--max-old-space-size=2048"

# PM2 사용 (클러스터 모드)
npm install -g pm2
pm2 start server.js -i max --name "ai-workflow-playbook"
```

### 3. Docker 최적화
```dockerfile
# Dockerfile에 추가
# 멀티스테이지 빌드
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
USER node
CMD ["node", "server.js"]
```

### 4. 캐싱 전략
```javascript
// Redis 캐싱 예시
const redis = require('redis');
const client = redis.createClient(process.env.REDIS_URL);

// 24시간 캐시
await client.setEx(`mvp:${projectId}`, 86400, JSON.stringify(data));
```

---

## 🔧 문제 해결

### 일반적인 문제들

#### 1. 포트 충돌
```bash
# 포트 사용 프로세스 확인
sudo lsof -i :3000

# 프로세스 종료
sudo kill -9 <PID>

# 다른 포트 사용
PORT=3001 npm start
```

#### 2. 메모리 부족
```bash
# 메모리 사용량 확인
docker stats

# 메모리 제한 설정
docker run -m 512m ai-workflow-playbook
```

#### 3. SSL 인증서 문제
```bash
# 인증서 유효성 확인
openssl x509 -in ssl/certificate.crt -text -noout

# 인증서 갱신
sudo certbot renew --dry-run
```

#### 4. 데이터베이스 연결 실패
```bash
# Redis 연결 테스트
redis-cli ping

# 컨테이너 재시작
docker-compose -f infrastructure/docker/docker-compose.yml restart redis
```

### 로그 분석
```bash
# 애플리케이션 로그
docker-compose -f infrastructure/docker/docker-compose.yml logs -f ai-workflow-playbook

# Nginx 로그
docker-compose -f infrastructure/docker/docker-compose.yml logs -f nginx

# 에러 로그만 필터링
docker-compose logs --tail=100 | grep ERROR
```

### 성능 진단
```bash
# CPU 사용률 모니터링
htop

# 메모리 사용률 확인
free -h

# 디스크 I/O 확인
iotop

# 네트워크 상태 확인
netstat -tuln
```

---

## 📱 모바일 최적화

### PWA 설정
```javascript
// service-worker.js
const CACHE_NAME = 'ai-workflow-playbook-v1';
const urlsToCache = [
  '/',
  '/ui-improvements/enhanced-interview-bot.html',
  '/ui-improvements/enhanced-visual-builder.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});
```

### 반응형 설정 확인
```css
/* 모바일 우선 설계 */
@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
```

---

## 🚨 응급 상황 대응

### 1. 긴급 롤백
```bash
# Docker 이미지 롤백
docker tag ai-workflow-playbook:previous ai-workflow-playbook:latest
docker-compose -f infrastructure/docker/docker-compose.yml up -d

# Git 롤백
git revert HEAD
git push origin main
```

### 2. 서비스 재시작
```bash
# 전체 서비스 재시작
docker-compose -f infrastructure/docker/docker-compose.yml restart

# 특정 서비스만 재시작
docker-compose -f infrastructure/docker/docker-compose.yml restart ai-workflow-playbook
```

### 3. 데이터 백업
```bash
# 자동 백업 스크립트
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
tar -czf "backup_${DATE}.tar.gz" projects/ logs/ .env
aws s3 cp "backup_${DATE}.tar.gz" s3://your-backup-bucket/
```

---

## 📞 지원 및 연락처

### 기술 지원
- **문서**: https://docs.aiworkflowplaybook.com
- **GitHub Issues**: https://github.com/your-org/ai-workflow-playbook/issues
- **Discord**: https://discord.gg/aiworkflowplaybook

### 응급 연락처
- **DevOps 팀**: devops@aiworkflowplaybook.com
- **보안 문제**: security@aiworkflowplaybook.com
- **일반 문의**: support@aiworkflowplaybook.com

---

## 📚 추가 자료

### 참고 문서
- [Docker 공식 문서](https://docs.docker.com/)
- [Nginx 설정 가이드](https://nginx.org/en/docs/)
- [Node.js 프로덕션 가이드](https://nodejs.org/en/docs/guides/)
- [Let's Encrypt 가이드](https://letsencrypt.org/docs/)

### 모니터링 도구
- [Prometheus](https://prometheus.io/docs/)
- [Grafana](https://grafana.com/docs/)
- [ELK Stack](https://www.elastic.co/elastic-stack/)

---

*이 가이드를 통해 AI Workflow Playbook을 안전하고 확장 가능하게 배포하세요! 🚀*