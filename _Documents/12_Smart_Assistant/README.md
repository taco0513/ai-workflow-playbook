# 🤖 스마트 워크플로우 어시스턴트

## 🎯 개요

**상황을 자동으로 감지하고 최적의 Claude Code 워크플로우를 추천**하는 지능형 시스템입니다.

### 핵심 기능
- 🔍 **상황 자동 감지**: 키워드와 컨텍스트 분석
- 🎯 **맞춤형 추천**: 개인화된 명령어와 워크플로우
- ⚡ **즉시 실행**: 원클릭 솔루션 제공
- 📚 **학습 기반**: 사용 패턴 학습으로 정확도 향상

---

## 🚨 상황별 자동 트리거 시스템

### 에러 상황 감지
```yaml
트리거 키워드:
- "에러", "error", "오류", "문제", "안 돼", "실패"
- "500", "404", "403", "TypeError", "ReferenceError"
- "빌드 실패", "배포 안 됨", "연결 오류"

자동 추천:
🔧 즉시 명령어: /troubleshoot @[관련파일] --analyze-error
🤖 전문가 호출: Analyzer + Backend Expert
📋 체크리스트: 로그 확인 → 의존성 검사 → 환경 변수 확인
📚 관련 가이드: 09_Testing_QA/06_Troubleshooting_Guide.md
```

### 성능 이슈 감지
```yaml
트리거 키워드:
- "느려", "slow", "성능", "performance", "최적화"
- "메모리", "CPU", "로딩 시간", "응답 시간"
- "번들 크기", "bundle size", "렌더링"

자동 추천:
⚡ 즉시 명령어: /analyze @. --focus performance --extended-thinking
🤖 전문가 호출: Performance Expert + Frontend Expert
📊 성능 측정: Lighthouse, Web Vitals, Bundle Analyzer
📚 관련 가이드: 07_Advanced_Patterns/06_Performance_Patterns.md
```

### 새 프로젝트 시작
```yaml
트리거 키워드:
- "새 프로젝트", "new project", "시작", "처음부터"
- "아이디어", "MVP", "프로토타입"

자동 추천:
🚀 즉시 명령어: /spawn new-project --bmad-method --17day-journey
🤖 전문가 호출: Architect + Business Analyst
📋 체크리스트: 04_BMAD_Method/01_Business_Definition.md
⚡ 빠른 시작: 11_Quick_Wins/01_30min_Prototype.md
```

### 코드 리뷰 요청
```yaml
트리거 키워드:
- "리뷰", "review", "확인", "체크", "검토"
- "코드 품질", "best practice", "개선"

자동 추천:
👁️ 즉시 명령어: /review @. --create-sub-agent code-reviewer
🤖 전문가 호출: QA Expert + Security Expert + Refactorer
📝 분석 항목: 보안, 성능, 가독성, 모범 사례
📚 관련 가이드: 07_Advanced_Patterns/ + 09_Testing_QA/
```

---

## 🎯 지능형 명령어 생성기

### 컨텍스트 기반 명령어 조합
```javascript
function generateSmartCommand(situation, context, userLevel) {
  const baseCommand = detectPrimaryAction(situation)
  const flags = selectOptimalFlags(context, userLevel)
  const experts = chooseExperts(situation)
  const resources = findRelevantGuides(situation)
  
  return {
    command: `${baseCommand} ${flags.join(' ')}`,
    experts: experts,
    guides: resources,
    explanation: generateExplanation(situation)
  }
}

// 예시 사용
const situation = "Next.js 앱이 너무 느려서 최적화하고 싶어"
const result = generateSmartCommand(situation, "frontend", "intermediate")

// 결과:
{
  command: "/analyze @. --focus performance --extended-thinking --create-sub-agent perf-optimizer",
  experts: ["Performance Expert", "Frontend Expert"],
  guides: ["07_Advanced_Patterns/06_Performance_Patterns.md"],
  explanation: "성능 병목 지점을 체계적으로 분석하고 최적화 방안을 제시합니다."
}
```

### 사용자 레벨별 맞춤화
```yaml
초급자 (Beginner):
  특징: 단순한 명령어, 상세한 설명, 단계별 가이드
  추천 패턴: /help → 기본 명령어 → 체크리스트 → 확인

중급자 (Intermediate):
  특징: 효율적인 명령어 조합, 적당한 설명, 선택적 고급 기능
  추천 패턴: 핵심 명령어 → 관련 패턴 → 최적화 제안

고급자 (Advanced):
  특징: 복잡한 워크플로우, 최소한의 설명, 고급 기능 활용
  추천 패턴: 고급 명령어 → 커스터마이징 → 자동화 스크립트
```

---

## 🔧 실시간 워크플로우 어시스턴트

### 대화형 문제 해결
```
사용자: "로그인이 안 돼요"

AI 어시스턴트:
🔍 상황 분석 중...
📋 체크리스트 생성 중...

┌─ 로그인 문제 진단 ─┐
│ 1. 에러 메시지 확인  │
│ 2. 네트워크 상태     │  
│ 3. 인증 토큰        │
│ 4. API 엔드포인트   │
└─────────────────────┘

🤖 추천 명령어: /troubleshoot @auth --focus authentication --create-sub-agent auth-debugger

📚 관련 가이드:
- 02_AI_Experts/02_Quality_Security.md#인증-전문가
- 09_Testing_QA/03_Integration_Testing.md#인증-테스트

⚡ 빠른 해결: 
1. JWT 토큰 만료 확인
2. CORS 설정 검토  
3. API 엔드포인트 상태 확인

다음에 어떤 단계를 시도해보시겠어요?
```

### 워크플로우 자동 제안
```
사용자: "새로운 기능을 추가하려고 해"

AI 어시스턴트:
🎯 워크플로우 제안:

방법 1: 빠른 프로토타입 (30분)
/quick-prototype "[기능명]" --template basic

방법 2: 체계적 개발 (3-5일)  
/plan-feature "[기능명]" --bmad-method --create-sub-agent feature-planner

방법 3: 병렬 개발 (고급)
git worktree add ../[기능명] -b feature/[기능명]
/spawn parallel-development --branch feature/[기능명]

어떤 방법이 현재 상황에 적합할까요?
- 빠른 검증이 필요하면 → 방법 1
- 완성도 높은 구현이면 → 방법 2  
- 기존 작업과 병렬 진행이면 → 방법 3
```

---

## 📊 학습 기반 개인화

### 사용 패턴 분석
```yaml
패턴 추적:
  자주_사용하는_명령어: ["/analyze", "/troubleshoot", "/review"]
  선호하는_전문가: ["Frontend Expert", "Performance Expert"]
  작업_유형: ["성능 최적화", "버그 수정", "코드 리뷰"]
  프로젝트_특성: ["React", "Next.js", "TypeScript"]

개인화_추천:
  기본_플래그: ["--extended-thinking", "--focus performance"]
  자동_전문가: ["Performance Expert"]
  선호_가이드: ["07_Advanced_Patterns/06_Performance_Patterns.md"]
  커스텀_명령어: ["/perf-check", "/my-review"]
```

### 적응형 복잡도 조절
```javascript
function adaptComplexity(userHistory, currentTask) {
  const userLevel = calculateUserLevel(userHistory)
  const taskComplexity = analyzeTaskComplexity(currentTask)
  
  if (userLevel >= taskComplexity) {
    return "advanced_mode"  // 간결한 추천
  } else if (userLevel + 1 >= taskComplexity) {
    return "learning_mode"  // 설명과 함께
  } else {
    return "guided_mode"    // 단계별 가이드
  }
}
```

---

## 🚀 고급 워크플로우 패턴

### 1. 병렬 개발 세션
```bash
# 시나리오: 긴급 버그 수정 + 새 기능 개발
워크플로우:
1. git worktree add ../hotfix -b hotfix/critical-bug
2. git worktree add ../feature -b feature/new-auth
3. 
   터미널 1: cd ../hotfix && claude
   터미널 2: cd ../feature && claude
   
각각 독립적 컨텍스트로 작업 가능!
```

### 2. Sub-Agent 전문화
```bash
# 코드 리뷰 전용 에이전트 생성
/create-sub-agent code-reviewer \
  --focus "security, performance, best-practices" \
  --output-format "checklist with priorities"

# 성능 최적화 전용 에이전트
/create-sub-agent perf-optimizer \
  --focus "bundle-size, rendering, api-performance" \
  --tools "lighthouse, webpack-analyzer"
```

### 3. 파이프라인 통합
```bash
# Git hook으로 자동 코드 리뷰
echo '#!/bin/sh
claude review @staged-files --output-format json > review-results.json
' > .git/hooks/pre-commit

# CI/CD 파이프라인에서 AI 분석
claude analyze @. --focus security \
  | grep "CRITICAL" \
  | wc -l > security-issues-count
```

---

## 🎯 실전 적용 가이드

### 즉시 활용 방법
```
1. 키워드 기반 추천 활용
   - 문제 상황을 자연어로 설명
   - 시스템이 자동으로 최적 명령어 추천
   - 원클릭으로 실행

2. 개인화 설정
   - 자주 사용하는 패턴 저장
   - 프로젝트별 커스텀 명령어 생성
   - 팀 공유 워크플로우 구축

3. 고급 기능 점진적 도입
   - Sub-Agent → Extended Thinking → Parallel Sessions
   - 복잡도에 따라 단계적 활용
```

### 팀 협업 활용
```yaml
공유 워크플로우:
  - 프로젝트별 커스텀 슬래시 명령어
  - 팀 코딩 스타일 반영한 리뷰 에이전트
  - 자동화된 품질 체크 파이프라인

개인별 특화:
  - 개인 선호도 기반 명령어 추천
  - 학습 수준에 맞는 복잡도 조절
  - 작업 히스토리 기반 패턴 추천
```

---

## 💡 향후 발전 방향

### 1. AI 기반 워크플로우 생성
- 프로젝트 특성 자동 분석
- 최적 워크플로우 자동 생성
- 지속적 개선 알고리즘

### 2. 팀 지능 활용
- 팀원별 전문성 매핑
- 협업 워크플로우 최적화
- 지식 공유 자동화

### 3. 예측적 문제 해결
- 잠재적 문제 사전 감지
- 예방적 솔루션 제안
- 리스크 기반 우선순위

---

> 🤖 **"AI는 명령을 실행하는 도구가 아니라 함께 생각하는 파트너다"**

**스마트 어시스턴트와 함께 개발 생산성을 혁신하세요!**