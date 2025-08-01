# 🧠 스마트 문제 해결 시스템

## 🎯 개요

**Claude가 혼자 삽질하지 말고 스마트하게 외부 리소스를 활용**하는 자동화된 문제 해결 시스템입니다.

### 핵심 철학
- 🚫 **2분 룰**: 2분 이상 막히면 자동으로 웹 검색
- 🎯 **토큰 효율성**: 혼자 삽질(5000토큰) vs 웹검색(200토큰)
- 🔍 **최신 솔루션 우선**: 2024년 기준 검증된 해결책
- 🤖 **자동 에스컬레이션**: 단계별 문제 해결 파이프라인

---

## 🚨 5단계 Problem Solving 파이프라인

### 📊 효율성 비교
| 방법 | 시간 | 토큰 | 성공률 | 사용 시점 |
|------|------|-------|--------|-----------|
| **내부 지식** | 30초 | 100 | 90% | 기본 패턴 |
| **구조적 분석** | 1분 | 300 | 70% | 복잡한 에러 |
| **웹 검색** ⭐ | 2분 | 200 | 95% | 막힐 때 |
| **커뮤니티 솔루션** | 5분 | 500 | 98% | 심화 문제 |
| **전문가 패턴** | 10분 | 800 | 99% | 근본 해결 |

### Level 1: 내부 지식 활용 (30초)
```bash
# 기존 컨텍스트와 플레이북에서 답 찾기
- 15_Living_Documentation에서 유사 사례 검색
- 성공률 90% 이상인 기본 패턴 적용
- 이전 성공 사례 재활용
```

### Level 2: 구조적 분석 (1분)
```bash
# 체계적 디버깅
- 에러 메시지 패턴 분석
- 로그 파일 체계적 검토
- 의존성/환경/버전 체크
- 재현 가능한 최소 케이스 생성
```

### Level 3: 웹 검색 자동 트리거 ⭐ (2분)
```bash
# 자동 조건 (하나라도 해당하면 즉시 검색)
- ⏰ 2분 이상 해결 안 될 때
- 🔄 동일한 접근법 3번 시도했을 때
- ❌ "unknown error" 또는 "not found" 메시지
- 🆕 새로운 라이브러리/도구 관련 이슈
- 💰 토큰 사용량 1000개 초과

# 자동 실행 명령어
/search "${technology} ${error_message} solution 2024 latest"
```

### Level 4: 커뮤니티 솔루션 (5분)
```bash
# 심화 검색 전략
- Stack Overflow (검증된 솔루션)
- GitHub Issues (실제 사용자 문제)
- 공식 문서 (Official Documentation)
- Reddit/Discord (커뮤니티 논의)
```

### Level 5: 전문가 패턴 (10분)
```bash
# 마지막 단계
- 도메인 전문가 페르소나 활성화
- 여러 접근법 병렬 시도
- 근본 원인 분석 (Root Cause Analysis)
- 예방책 수립
```

---

## 🔍 자동 웹 검색 트리거 시스템

### 📋 상황별 자동 검색 패턴

#### 컴파일/빌드 에러
```yaml
트리거:
- "compilation failed", "build error", "syntax error"
- TypeScript, Webpack, Vite 등 빌드 도구 에러

자동 검색:
🔍 "/search '${technology} ${error_message} fix 2024'"
🎯 우선순위: 공식 문서 → GitHub Issues → Stack Overflow

예시:
"TypeScript error TS2307" → "/search 'TypeScript TS2307 module not found fix 2024'"
```

#### 의존성/패키지 문제
```yaml
트리거:
- "module not found", "package not installed"
- "dependency conflict", "version mismatch"

자동 검색:
🔍 "/search '${package_name} installation ${os} ${node_version} 2024'"
🎯 우선순위: NPM 공식 → GitHub README → 커뮤니티

예시:
"Module 'react-router' not found" → "/search 'react-router installation fix Node 20 2024'"
```

#### 성능 문제
```yaml
트리거:
- 2분 이상 같은 최적화 시도
- "slow", "performance", "memory leak"

자동 검색:
🔍 "/search '${framework} performance optimization best practices 2024'"
🎯 우선순위: 성능 가이드 → 벤치마크 → 실제 사례

예시:
"React app running slowly" → "/search 'React performance optimization 2024 best practices'"
```

#### 배포/DevOps 에러
```yaml
트리거:
- "deploy failed", "CI/CD error", "docker error"
- Vercel, Netlify, AWS 등 플랫폼 에러

자동 검색:
🔍 "/search '${platform} deployment error ${error_code} solution 2024'"
🎯 우선순위: 플랫폼 공식 문서 → 커뮤니티 → GitHub Issues

예시:
"Vercel build failed with exit code 1" → "/search 'Vercel build failed exit code 1 solution 2024'"
```

### 🎯 검색 쿼리 최적화 전략

#### 효과적인 검색 패턴
```bash
# ✅ 좋은 검색 쿼리
"Next.js 14 TypeError useRouter undefined fix 2024"
"React Native iOS build error Xcode 15 solution"
"Docker compose PostgreSQL connection refused Ubuntu 2024"

# ❌ 비효율적인 검색 쿼리
"Next.js error help"
"React not working"
"Database problem"
```

#### 검색 키워드 우선순위
```yaml
필수 키워드:
- 정확한 기술명 + 버전 ("React 18", "Node 20")
- 구체적인 에러 메시지 ("TypeError", "ECONNREFUSED")
- 연도 ("2024", "latest")

추가 키워드:
- 플랫폼/OS ("macOS", "Windows", "Linux")
- 환경 ("development", "production", "Docker")
- 해결책 타입 ("fix", "solution", "workaround")
```

---

## 🤖 Smart Assistant 통합

### 자동 트리거 시스템
```javascript
// 12_Smart_Assistant 업그레이드
const AutoSearchTrigger = {
  // 검색 필요성 자동 감지
  detectSearchNeed: (context) => {
    const indicators = [
      context.timeSpent > 120, // 2분 이상
      context.sameApproachCount >= 3, // 같은 방법 3번
      context.errorPatterns.includes('unknown'),
      context.tokenUsage > 1000,
      context.isNewTechnology
    ];

    return indicators.filter(Boolean).length >= 1;
  },

  // 최적화된 검색 쿼리 생성
  generateQuery: (error, tech, context) => {
    const parts = [
      tech.name + (tech.version ? ` ${tech.version}` : ''),
      error.message || error.type,
      context.os && `${context.os}`,
      'solution fix 2024'
    ].filter(Boolean);

    return parts.join(' ');
  }
};
```

### 상황별 자동 추천 업데이트
```yaml
# 12_Smart_Assistant/README.md에 추가

### 🌐 문제 해결 자동 웹 검색
트리거 키워드:
- "에러", "오류", "실패", "안 돼", "막혔어", "모르겠어"
- "unknown", "not found", "failed", "error"
- 2분 이상 같은 문제 반복 감지
- 토큰 사용량 1000개 초과 감지

자동 추천:
🔍 즉시 명령어: /search "${technology} ${error} solution 2024"
🤖 전문가 호출: Web Research Expert + Domain Expert
📋 검색 체크리스트: 공식 문서 → GitHub Issues → Stack Overflow → 커뮤니티
📚 관련 가이드: 20_Smart_Problem_Solving/README.md

컨텍스트별 세부 추천:
- "Next.js 빌드 에러" → /search "Next.js build error ${error_message} fix 2024"
- "React 컴포넌트 에러" → /search "React ${component_type} ${error_type} solution 2024"
- "TypeScript 타입 에러" → /search "TypeScript ${error_code} fix latest"
- "Docker 컨테이너 문제" → /search "Docker ${container_name} ${error} ${os} 2024"
```

---

## 🚀 실전 적용 가이드

### 📋 즉시 사용 가능한 명령어 템플릿

#### 에러 해결 템플릿
```bash
# 패턴 1: 구체적인 에러 메시지
/search "[기술명] [정확한 에러 메시지] fix 2024"

# 패턴 2: 기능 구현 막힘
/search "[기술명] [하려는 기능] implementation 2024 example"

# 패턴 3: 성능 문제
/search "[기술명] performance optimization best practices 2024"

# 패턴 4: 배포 문제
/search "[플랫폼명] deployment [에러타입] solution 2024"
```

#### 단계별 실행 가이드
```bash
# 1단계: 즉시 검색 (2분 경과 시)
You: "Next.js에서 이상한 에러가 계속 나는데..."
Claude: 🔍 자동 검색 실행 중...
/search "Next.js ${error_message} fix 2024"

# 2단계: 검색 결과 분석
Claude: 검색 결과 분석 완료! 3가지 해결책을 찾았습니다:
1. 공식 문서 해결책 (권장)
2. GitHub Issue 해결책
3. Stack Overflow 해결책

# 3단계: 솔루션 적용
Claude: 가장 적합한 해결책을 적용하겠습니다...
```

### 🎯 효율성 측정

#### Before vs After
```yaml
기존 방식 (Claude 혼자 삽질):
- 시간: 30분
- 토큰: 5000개
- 성공률: 60%
- 사용자 스트레스: 높음

새로운 방식 (스마트 검색):
- 시간: 3분
- 토큰: 300개
- 성공률: 95%
- 사용자 스트레스: 낮음

효율성 개선:
- ⚡ 시간 90% 단축
- 💰 토큰 94% 절약
- 🎯 성공률 35% 향상
```

---

## 🔗 다른 섹션과의 연계

### 📚 15_Living_Documentation 통합
```bash
# 해결된 문제들 자동 축적
해결책 발견 → 15_Living_Documentation에 자동 추가
→ 다음에 비슷한 문제 발생 시 즉시 해결

# 패턴 예시
"Next.js 빌드 에러 해결" → knowledge-base.md에 자동 저장
→ 다른 사용자가 같은 문제 시 즉시 참조 가능
```

### 🤖 12_Smart_Assistant 강화
```bash
# 문제 해결 패턴 학습
성공적인 검색 쿼리 → 자동 추천 시스템에 반영
자주 발생하는 문제 → 프로액티브 가이드 생성
```

### 🎯 02_AI_Experts 활용
```bash
# 전문가별 검색 전략
Frontend Expert → React/Vue 특화 검색
Backend Expert → Node.js/Python 특화 검색
DevOps Expert → 배포/인프라 특화 검색
```

---

## 💡 고급 기능

### 🔮 예측적 문제 방지
```bash
# "이런 문제가 생길 수 있습니다" 사전 경고
프로젝트 패턴 분석 → 잠재적 문제 예측
커뮤니티 데이터 → 빈발 문제 사전 알림
```

### 🌐 커뮤니티 솔루션 통합
```bash
# 실시간 솔루션 업데이트
GitHub Issues → 최신 해결책 자동 수집
Stack Overflow → 검증된 답변 우선 검색
Discord/Reddit → 커뮤니티 논의 반영
```

### 📊 성능 추적
```bash
# 문제 해결 효율성 측정
검색 성공률 → 쿼리 패턴 최적화
해결 시간 → 자동 트리거 임계값 조정
사용자 만족도 → 시스템 개선 우선순위
```

---

## 🚀 시작하기

### 즉시 적용 방법
1. **2분 룰 활성화**: 2분 이상 막히면 자동 웹 검색
2. **검색 쿼리 패턴 학습**: 효과적인 키워드 조합 습득
3. **성공 사례 축적**: 해결된 문제들 문서화
4. **자동화 시스템 구축**: Smart Assistant 트리거 설정

### 성공 지표
- 🎯 문제 해결 시간 90% 단축
- 💰 토큰 사용량 80% 절약
- 📈 해결 성공률 95% 달성
- 😊 개발 스트레스 대폭 감소

---

> 🧠 **"Claude가 혼자 고민하지 말고, 전 세계 개발자의 지혜를 활용하자"**

**이제 막히는 순간 2분이면 해결됩니다!** 🚀

> 📖 **연관 학습**: [12_Smart_Assistant](../12_Smart_Assistant/README.md) → [15_Living_Documentation](../15_Living_Documentation/README.md) → [02_AI_Experts](../02_AI_Experts/README.md)