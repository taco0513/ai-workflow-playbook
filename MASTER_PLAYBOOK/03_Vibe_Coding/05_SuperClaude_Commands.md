# 🚀 SuperClaude 명령어

## 🌟 SuperClaude란?

**Claude AI의 능력을 극대화하는 고급 명령어 시스템**입니다. 슬래시 명령어와 플래그로 더 강력한 개발이 가능합니다.

## 📋 핵심 슬래시 명령어

### /build - 프로젝트 빌더
```
용도: 프로젝트 구축 및 프레임워크 감지
예시: /build 전자상거래 사이트
      /build React 대시보드
      /build @frontend 랜딩페이지
```

### /implement - 기능 구현
```
용도: 새로운 기능과 코드 구현
예시: /implement 로그인 시스템
      /implement 결제 기능 --type api
      /implement 검색 기능 --framework react
```

### /analyze - 분석 도구
```
용도: 코드 및 시스템 분석
예시: /analyze 현재 프로젝트
      /analyze @src/components
      /analyze performance --deep
```

### /improve - 개선 도구
```
용도: 코드 품질 및 성능 개선
예시: /improve 현재 코드
      /improve --performance
      /improve @api --security
```

### /troubleshoot - 문제 해결
```
용도: 버그 및 에러 해결
예시: /troubleshoot TypeError 에러
      /troubleshoot 느린 로딩 문제
      /troubleshoot --deep
```

### /test - 테스트 작성
```
용도: 자동 테스트 생성
예시: /test 유닛 테스트
      /test e2e --framework playwright
      /test 통합 테스트
```

### /document - 문서화
```
용도: 자동 문서 생성
예시: /document API 문서
      /document README 작성
      /document --lang ko
```

### /deploy - 배포 도우미
```
용도: 배포 프로세스 지원
예시: /deploy Vercel
      /deploy AWS --region ap-northeast-2
      /deploy Docker 설정
```

## 🎯 유용한 플래그

### 🧠 사고 깊이 플래그

#### --think (기본 분석)
```
용도: 4K 토큰 수준의 분석
예시: /analyze --think
효과:
- 상세한 문제 분석
- 단계별 해결책
- 여러 옵션 제시
```

#### --think-hard (심층 분석)
```
용도: 10K 토큰 수준의 분석
예시: /analyze --think-hard
효과:
- 시스템 전체 분석
- 아키텍처 레벨 검토
- 장기적 영향 고려
```

#### --ultrathink (최고 수준 분석)
```
용도: 32K 토큰 수준의 분석
예시: /analyze --ultrathink
효과:
- 완전한 시스템 재설계
- 모든 가능성 검토
- 최적의 솔루션 도출
```

### ⚡ 효율성 플래그

#### --uc / --ultracompressed
```
용도: 30-50% 토큰 절약
예시: /build --uc
효과:
- 압축된 응답
- 핵심만 전달
- 빠른 실행
```

#### --answer-only
```
용도: 직접적인 답변만
예시: /troubleshoot --answer-only
효과:
- 설명 없이 해결책만
- 즉각적인 코드
- 최소한의 응답
```

### 🔧 MCP 서버 플래그

#### --c7 / --context7
```
용도: Context7 문서 시스템 활성화
예시: /implement --c7
효과:
- 최신 라이브러리 문서
- 정확한 API 사용
- 베스트 프랙티스
```

#### --seq / --sequential
```
용도: 순차적 분석 엔진
예시: /analyze --seq
효과:
- 체계적인 분석
- 단계별 문제 해결
- 논리적 추론
```

#### --magic
```
용도: UI 컴포넌트 생성
예시: /build UI --magic
효과:
- 현대적 UI 생성
- 디자인 시스템 적용
- 반응형 컴포넌트
```

### 👥 페르소나 플래그

#### --persona-architect
```
용도: 시스템 설계 전문가
예시: /design --persona-architect
효과:
- 확장 가능한 설계
- 모범 사례 적용
- 장기적 관점
```

#### --persona-frontend
```
용도: 프론트엔드 전문가
예시: /implement --persona-frontend
효과:
- UX 최적화
- 접근성 고려
- 성능 최적화
```

#### --persona-security
```
용도: 보안 전문가
예시: /analyze --persona-security
효과:
- 취약점 검사
- 보안 강화
- 위협 모델링
```

## 💡 명령어 조합 패턴

### 패턴 1: 프로젝트 시작
```
/build 온라인 쇼핑몰 --think --c7
→ 체계적 분석 + 최신 문서 참조로 완벽한 시작
```

### 패턴 2: 버그 수정
```
/troubleshoot 로그인 에러 --seq --uc
→ 순차적 분석 + 압축된 응답으로 빠른 해결
```

### 패턴 3: 성능 최적화
```
/improve @src --performance --think-hard
→ 전체 소스 + 성능 초점 + 심층 분석
```

### 패턴 4: 보안 강화
```
/analyze --persona-security --ultrathink
→ 보안 전문가 + 최고 수준 분석
```

## 📊 실전 활용 예시

### 예시 1: React 프로젝트 시작
```
You: /build React 전자상거래 --c7 --persona-frontend

AI가 수행하는 작업:
1. React 18 최신 구조 생성
2. 전자상거래 필수 컴포넌트
3. Context7로 최신 패턴 적용
4. UX 최적화된 인터페이스
```

### 예시 2: API 보안 검사
```
You: /analyze @api --persona-security --think-hard

AI가 수행하는 작업:
1. 모든 엔드포인트 검사
2. 인증/인가 체계 분석
3. 취약점 리포트 생성
4. 개선 방안 제시
```

### 예시 3: 전체 시스템 리팩토링
```
You: /improve --ultrathink --seq

AI가 수행하는 작업:
1. 현재 아키텍처 완전 분석
2. 개선 가능 영역 도출
3. 단계별 리팩토링 계획
4. 위험 요소 및 대응 방안
```

## 🎯 고급 활용 기법

### 1. Wave 시스템 활용
```
/analyze --wave-mode auto
→ 복잡한 작업을 여러 단계로 자동 분할
```

### 2. 멀티 에이전트 협업
```
/implement 채팅 시스템 --delegate auto
→ 여러 전문가가 동시에 작업
```

### 3. 반복 개선
```
/improve --loop --iterations 5
→ 5번의 자동 개선 사이클
```

## 📈 명령어별 사용 시나리오

### 새 프로젝트
```
1. /build [프로젝트명] --think
2. /implement 핵심기능 --c7
3. /test 기본테스트
4. /deploy 준비
```

### 기존 프로젝트 개선
```
1. /analyze 전체구조 --think-hard
2. /improve --performance
3. /test 회귀테스트
4. /document 변경사항
```

### 문제 해결
```
1. /troubleshoot [에러메시지]
2. /analyze 관련코드 --seq
3. /implement 수정사항
4. /test 버그수정확인
```

## 💡 프로 팁

### 1. 플래그 조합
```
최대 효율: --uc --seq --c7
심층 분석: --ultrathink --all-mcp
빠른 수정: --answer-only --no-mcp
```

### 2. 컨텍스트 제공
```
/build @requirements.md 기반 시스템
/improve @current-code --target @desired-state
```

### 3. 단계적 접근
```
/analyze --think → 문제 파악
/implement --c7 → 해결책 구현
/test --seq → 검증
/document → 문서화
```

## 🚀 SuperClaude 워크플로우

### 전체 개발 사이클
```
1. 기획
   /analyze 요구사항 --think

2. 설계
   /design 시스템 --persona-architect

3. 구현
   /implement 기능 --c7

4. 테스트
   /test 전체 --seq

5. 최적화
   /improve --performance

6. 배포
   /deploy 프로덕션

7. 문서화
   /document 전체 시스템
```

## ❓ FAQ

**Q: 명령어를 잘못 입력하면?**
A: AI가 자동으로 인식하고 올바른 사용법을 안내합니다.

**Q: 여러 명령어를 동시에 사용할 수 있나요?**
A: 순차적으로 사용하거나, 적절한 플래그 조합으로 가능합니다.

**Q: 일반 대화와 명령어를 섞어 쓸 수 있나요?**
A: 네! 자유롭게 전환하며 사용할 수 있습니다.

---

> 🚀 **SuperClaude: AI 개발의 새로운 차원!**

다음: [고급 기법](06_Advanced_Techniques.md) →