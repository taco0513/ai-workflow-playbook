# 🌿 브랜치 전략

AI Workflow Playbook의 체계적인 개발을 위한 브랜치 전략입니다.

## 🎯 브랜치 구조

```
main (프로덕션)
├── develop (개발 메인)
│   ├── feature/new-section (새 섹션 추가)
│   ├── feature/improve-docs (문서 개선)
│   └── feature/automation (자동화 추가)
├── hotfix/urgent-fix (긴급 수정)
└── release/v2.2.0 (릴리즈 준비)
```

## 🚀 브랜치 유형

### 1. `main` - 프로덕션 브랜치
- **목적**: 안정적인 릴리즈 버전 유지
- **보호**: 직접 푸시 금지, PR만 허용
- **자동화**: 태그 생성 시 자동 배포

### 2. `develop` - 개발 메인 브랜치  
- **목적**: 다음 릴리즈 개발 진행
- **병합 대상**: feature 브랜치들
- **테스트**: 모든 변경사항 검증

### 3. `feature/*` - 기능 개발 브랜치
- **명명 규칙**: `feature/설명-키워드`
- **예시**: 
  - `feature/add-testing-guide`
  - `feature/improve-setup-docs`
  - `feature/automate-changelog`
- **생명주기**: develop에서 분기 → 개발 → PR → 삭제

### 4. `hotfix/*` - 긴급 수정 브랜치
- **명명 규칙**: `hotfix/버그-설명`
- **예시**: `hotfix/broken-links`, `hotfix/security-update`
- **특징**: main에서 직접 분기, main과 develop 양쪽에 병합

### 5. `release/*` - 릴리즈 준비 브랜치
- **명명 규칙**: `release/v버전번호`
- **예시**: `release/v2.2.0`
- **목적**: 버전 정보 업데이트, 최종 검토

## 🔄 워크플로우

### 새로운 기능 개발
```bash
# 1. develop에서 새 브랜치 생성
git checkout develop
git pull origin develop
git checkout -b feature/new-automation-system

# 2. 개발 작업 수행
# ... 개발 진행 ...

# 3. 커밋 및 푸시
git add .
git commit -m "✨ Add automation system for version management"
git push origin feature/new-automation-system

# 4. PR 생성 (GitHub에서)
# develop ← feature/new-automation-system

# 5. 리뷰 후 병합
# 6. 브랜치 삭제
git branch -d feature/new-automation-system
```

### 릴리즈 프로세스
```bash
# 1. develop에서 release 브랜치 생성
git checkout develop
git checkout -b release/v2.2.0

# 2. 버전 정보 업데이트
./scripts/version-manager.sh minor "새로운 자동화 시스템 추가"

# 3. 최종 검토 및 테스트
# ... 품질 검증 ...

# 4. main에 병합
git checkout main
git merge release/v2.2.0
git push origin main

# 5. develop에도 병합 (버전 정보 동기화)
git checkout develop  
git merge release/v2.2.0
git push origin develop

# 6. 브랜치 정리
git branch -d release/v2.2.0
```

### 긴급 수정
```bash
# 1. main에서 hotfix 브랜치 생성
git checkout main
git checkout -b hotfix/broken-installation-link

# 2. 수정 작업
# ... 긴급 수정 ...

# 3. main에 병합
git checkout main
git merge hotfix/broken-installation-link
./scripts/version-manager.sh patch "설치 가이드 링크 수정"

# 4. develop에도 병합
git checkout develop
git merge hotfix/broken-installation-link

# 5. 정리
git branch -d hotfix/broken-installation-link
```

## 📋 커밋 메시지 규칙

### 형식
```
<타입>(<범위>): <제목>

<본문>

<푸터>
```

### 타입
- `✨ feat`: 새로운 기능 추가
- `🐛 fix`: 버그 수정
- `📝 docs`: 문서 업데이트
- `💄 style`: 코드 스타일 변경
- `♻️ refactor`: 코드 리팩토링
- `🔖 release`: 버전 릴리즈
- `🚀 deploy`: 배포 관련

### 예시
```
✨ feat(resources): 빠른 참조 가이드 추가

사용자가 자주 찾는 명령어와 체크리스트를 
한 곳에서 확인할 수 있도록 개선

- SuperClaude 필수 명령어 정리
- 상황별 빠른 해결책 제공
- 일일/주간 체크리스트 추가

🤖 Generated with [Claude Code](https://claude.ai/code)
Co-Authored-By: Claude <noreply@anthropic.com>
```

## 🛡️ 브랜치 보호 규칙

### main 브랜치
- ✅ Pull Request 필수
- ✅ 리뷰 승인 1명 이상
- ✅ 최신 develop과 충돌 없음
- ✅ 모든 체크 통과

### develop 브랜치  
- ✅ Pull Request 필수
- ✅ 자동 테스트 통과
- ✅ 충돌 해결 완료

## 🤖 자동화

### GitHub Actions
```yaml
# .github/workflows/version-check.yml
name: Version Check
on:
  pull_request:
    branches: [main]
    
jobs:
  version-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Check version update
        run: |
          # VERSION.md와 CHANGELOG.md 업데이트 확인
          git diff --name-only origin/main | grep -E "(VERSION|CHANGELOG)" || exit 1
```

### 자동 배포
- `main` 브랜치에 태그 푸시 시 자동 릴리즈 노트 생성
- `develop` 브랜치 변경 시 자동 문서 업데이트

## 🎯 베스트 프랙티스

### 브랜치 관리
1. **짧은 생명주기**: feature 브랜치는 3-5일 내 병합
2. **자주 동기화**: develop과 정기적으로 sync
3. **의미있는 이름**: 브랜치명에서 목적이 명확해야 함

### 커밋 관리
1. **원자적 커밋**: 하나의 변경사항 = 하나의 커밋
2. **의미있는 메시지**: 변경 이유와 내용 명시
3. **정기적 커밋**: 작업 단위별로 자주 커밋

### 코드 리뷰
1. **건설적 피드백**: 개선점과 대안 제시
2. **빠른 응답**: 24시간 내 리뷰 완료
3. **학습 기회**: 서로의 지식 공유

이 전략을 통해 체계적이고 안정적인 플레이북 개발을 진행합니다! 🚀