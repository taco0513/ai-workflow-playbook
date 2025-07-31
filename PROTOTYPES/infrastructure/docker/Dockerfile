# AI Workflow Playbook - Production Docker Image
FROM node:20-alpine

# 보안 사용자 생성
RUN addgroup -g 1001 -S playbook && \
    adduser -S playbook -u 1001

# 시스템 의존성 설치
RUN apk add --no-cache \
    dumb-init \
    curl \
    git \
    python3 \
    make \
    g++ \
    && rm -rf /var/cache/apk/*

# Bun 설치 (더 빠른 패키지 관리)
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사 및 의존성 설치
COPY package*.json bun.lockb* ./
RUN if [ -f bun.lockb ]; then bun install --frozen-lockfile; else npm ci --only=production; fi

# 애플리케이션 코드 복사
COPY --chown=playbook:playbook . .

# 프로토타입 디렉토리 권한 설정
RUN chmod -R 755 /app/prototypes && \
    chown -R playbook:playbook /app

# 캐시 및 로그 디렉토리 생성
RUN mkdir -p /app/.cache /app/logs /app/projects && \
    chown -R playbook:playbook /app/.cache /app/logs /app/projects

# 포트 노출
EXPOSE 3000 3001 3002

# 보안 설정
USER playbook

# 헬스체크
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# 엔트리포인트
ENTRYPOINT ["/usr/bin/dumb-init", "--"]

# 기본 명령어
CMD ["node", "server.js"]