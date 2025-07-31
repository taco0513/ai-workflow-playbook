# ⚡ 빠른 시작 가이드

**5분 만에 AI 개발 환경을 구축하고 첫 번째 프로젝트를 시작하세요!**

## 🚀 5분 완성 체크리스트

### 1단계: 환경 준비 (2분)
```bash
# Claude Code CLI 설치 (MacOS/Linux)
curl -sSf https://claude.ai/cli/install.sh | sh

# 또는 Windows의 경우
# https://claude.ai/code 다운로드 후 설치
```

### 2단계: 첫 프로젝트 생성 (2분)
```bash
# 새 프로젝트 폴더 생성
mkdir my-first-ai-project
cd my-first-ai-project

# Claude Code 시작
claude code
```

### 3단계: AI와 첫 대화 (1분)
Claude에게 다음과 같이 말해보세요:
```
안녕! 간단한 할일 관리 웹앱을 만들어줘.
할일 추가, 삭제, 완료 표시 기능이 있었으면 좋겠어.
```

**🎉 완성!** 5분 만에 작동하는 웹앱이 만들어집니다.

## 🎯 경험별 맞춤 시작 가이드

### 🔰 완전 초보자 (코딩 경험 0)
👉 **추천 경로**: [30분 프로토타입](MASTER_PLAYBOOK/11_Quick_Wins/01_30min_Prototype.md)
- 소요시간: 30분
- 결과물: 작동하는 웹앱 1개
- 필요 지식: 없음 (AI가 모든 것을 설명)

### 💻 개발 경험자 (AI 도구 처음)
👉 **추천 경로**: [SuperClaude 프레임워크](MASTER_PLAYBOOK/06_SuperClaude_Framework/README.md)
- 소요시간: 1시간
- 결과물: AI 기반 개발 워크플로우 마스터
- Wave 시스템, Persona 활용법 습득

### 🚀 창업가/빠른 MVP 필요
👉 **추천 경로**: [17일 여정](MASTER_PLAYBOOK/05_17Day_Journey/README.md)
- 소요시간: 17일
- 결과물: 실제 서비스 런칭
- 비즈니스 검증 및 고객 확보

### 🏢 팀/회사 도입
👉 **추천 경로**: [팀 도입 가이드](MASTER_PLAYBOOK/02_AI_Experts/05_Auto_Call_System.md)
- 소요시간: 팀 규모에 따라
- 결과물: 조직 전체 생산성 향상
- 표준화된 AI 협업 프로세스

## 🔧 필수 도구 설치 (선택사항)

대부분 자동으로 설치되지만, 수동 설치를 원하는 경우:

### Visual Studio Code + 확장 프로그램
```bash
# VSCode 설치 후 확장 프로그램 설치
code --install-extension claude-ai.claude-code
code --install-extension ms-vscode.vscode-typescript-next
```

### Node.js (웹 개발용)
```bash
# Node.js 설치 (https://nodejs.org)
# 또는 패키지 매니저 사용
brew install node  # MacOS
choco install nodejs  # Windows
```

### Git (버전 관리)
```bash
# Git 설치 확인
git --version

# 설치되지 않은 경우
# https://git-scm.com 에서 다운로드
```

## 🎮 첫 프로젝트 아이디어

### 🟢 초급 (30분 - 1시간)
- ✅ **개인 홈페이지**: 자기소개 + 포트폴리오
- ✅ **날씨 앱**: 현재 위치 날씨 정보
- ✅ **계산기**: 간단한 계산 기능
- ✅ **메모 앱**: 텍스트 저장/불러오기

### 🟡 중급 (1-3일)
- ✅ **할일 관리**: CRUD 기능 + 로컬 저장
- ✅ **블로그**: 글 작성/수정/삭제
- ✅ **사진 갤러리**: 이미지 업로드/표시
- ✅ **퀴즈 게임**: 점수 시스템

### 🔴 고급 (1-2주)
- ✅ **쇼핑몰**: 상품 관리 + 결제 연동
- ✅ **채팅 앱**: 실시간 메시징
- ✅ **예약 시스템**: 일정 관리 + 알림
- ✅ **소셜 피드**: 게시물 + 좋아요/댓글

## 🚨 문제 해결

### 자주 발생하는 문제

**Q: Claude Code CLI가 설치되지 않아요**
```bash
# 권한 문제일 경우
sudo curl -sSf https://claude.ai/code/install.sh | sh

# 또는 수동 다운로드
# https://github.com/anthropics/claude-code/releases
```

**Q: AI가 응답하지 않아요**
- 인터넷 연결 확인
- API 키 설정 확인: `claude auth login`
- 재시작: `claude restart`

**Q: 생성된 코드가 작동하지 않아요**
Claude에게 다음과 같이 말해보세요:
```
에러가 발생했어요: [에러 메시지 복사]
어떻게 해결하면 될까요?
```

**Q: 프로젝트를 온라인에 배포하고 싶어요**
```
이 프로젝트를 온라인으로 배포하고 싶어요.
Vercel이나 Netlify 같은 곳에 올릴 수 있을까요?
```

## 📖 다음 단계

### 30분 후
- [첫 번째 기능 추가하기](MASTER_PLAYBOOK/11_Quick_Wins/01_30min_Prototype.md)
- [디자인 개선하기](MASTER_PLAYBOOK/17_Design_System/README.md)

### 1시간 후
- [바이브 코딩 마스터하기](MASTER_PLAYBOOK/03_Vibe_Coding/README.md)
- [AI 전문가 활용법](MASTER_PLAYBOOK/02_AI_Experts/README.md)

### 1일 후
- [실전 예제 따라하기](MASTER_PLAYBOOK/08_Real_Examples/README.md)
- [테스트 및 품질 관리](MASTER_PLAYBOOK/09_Testing_QA/README.md)

### 1주일 후
- [프로젝트 배포하기](MASTER_PLAYBOOK/10_Deployment/README.md)
- [17일 여정 시작하기](MASTER_PLAYBOOK/05_17Day_Journey/README.md)

## 🌟 성공 팁

### ✅ 해야 할 것
- **구체적으로 요청하기**: "버튼을 예쁘게" → "파란색 배경에 흰색 글씨로 버튼 만들어줘"
- **에러 메시지 그대로 전달**: AI가 정확한 해결책을 제시할 수 있음
- **단계별로 진행**: 한 번에 모든 기능보다는 하나씩 완성
- **자주 테스트**: 작은 변경사항도 바로 확인

### ❌ 피해야 할 것
- 너무 완벽하려고 하지 말기
- 에러를 두려워하지 말기 (AI가 해결해줌)
- 복잡한 기술 용어 사용하지 말기
- 한 번에 너무 많은 기능 요청하지 말기

## 💡 영감이 필요하다면

### 성공 사례 둘러보기
- [실제 사용자 프로젝트](MASTER_PLAYBOOK/08_Real_Examples/README.md)
- [17일 성공 스토리](MASTER_PLAYBOOK/05_17Day_Journey/README.md)

### 아이디어 찾기
일상의 불편함에서 시작하세요:
- "매번 ___하는 게 귀찮다"
- "___를 더 쉽게 관리하고 싶다"
- "___정보를 한 곳에서 보고 싶다"

## 🎉 시작할 준비 완료!

이제 AI와 함께하는 개발 여정을 시작하세요!

**첫 번째 명령어:**
```bash
claude code
```

**첫 번째 대화:**
```
안녕! 나만의 웹사이트를 만들어보고 싶어.
```

🚀 **행운을 빕니다! 17일 후엔 당신도 개발자입니다!**

---

> 💬 **도움이 필요하신가요?**
> - [FAQ](FAQ.md) - 자주 묻는 질문
> - [문제 해결](TROUBLESHOOTING.md) - 상세한 해결 방법
> - [GitHub Issues](https://github.com/your-username/AI_Workflow_Playbook/issues) - 커뮤니티 지원