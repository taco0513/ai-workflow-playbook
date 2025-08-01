# 🔄 Migration Guide: v3.x → v4.0.0

## 📋 Overview

v4.0.0은 Document Compliance System 도입과 모듈 재구성을 포함한 메이저 업데이트입니다.

## 🚨 Breaking Changes

### 1. 모듈 재구성
15개의 분산된 모듈이 3개의 통합 시스템으로 재구성되었습니다.

#### 이전 구조 → 새로운 구조
```
11_Quick_Wins → 02_Development_Methodology
12_Smart_Assistant → 03_AI_Automation_Suite
19_Roadmap_Guard → 03_AI_Automation_Suite
20_Smart_Problem_Solving → 03_AI_Automation_Suite
23_Field_Proven_Workflow → 02_Development_Methodology
```

### 2. 아카이브된 모듈
이전 모듈들은 `_archived_modules/` 디렉토리로 이동되었습니다.

## 🎯 주요 신기능

### Document Compliance System (모듈 36)
AI가 프로젝트 문서를 정확히 따르도록 강제하는 시스템입니다.

```typescript
// 새로운 문서 검증 도구 사용법
import { DocumentComplianceChecker } from '@36_Document_Compliance_System/validator';

const checker = new DocumentComplianceChecker('./project');
const report = await checker.checkCompliance();
```

### 실전 검증 모듈
- **34_Data_Migration_Mastery**: LocalStorage → Cloud DB 마이그레이션
- **35_NextJS_Production_Reality**: Hydration 에러 해결 패턴

## 📝 마이그레이션 단계

### Step 1: 백업
```bash
# 현재 프로젝트 백업
cp -r AI_Workflow_Playbook AI_Workflow_Playbook_backup_v3
```

### Step 2: 최신 버전 가져오기
```bash
git pull origin main
# 또는
git fetch --all
git checkout v4.0.0
```

### Step 3: 의존성 업데이트
```bash
# 새로운 TypeScript 검증 도구 설치
npm install
# 또는
bun install
```

### Step 4: 프로젝트 참조 업데이트

#### 이전 코드
```typescript
// v3.x
import { quickWin } from '@11_Quick_Wins/toolkit';
import { smartAssist } from '@12_Smart_Assistant/ai';
```

#### 새로운 코드
```typescript
// v4.0.0
import { quickWin } from '@02_Development_Methodology/toolkit';
import { smartAssist } from '@03_AI_Automation_Suite/ai';
```

### Step 5: Document Compliance 적용

1. **문서 검증 설정**
```bash
# .git/hooks/pre-commit 생성
cp MASTER_PLAYBOOK/36_Document_Compliance_System/hooks/pre-commit .git/hooks/
chmod +x .git/hooks/pre-commit
```

2. **프로젝트 문서 준비**
```bash
mkdir -p docs
touch docs/PROJECT_SPEC.md
touch docs/TECH_STACK.md
touch docs/API_SPEC.md
```

3. **첫 검증 실행**
```bash
npm run check:compliance
```

## 🔍 변경사항 확인

### 새로운 명령어
```bash
# 문서 준수 검사
npm run check:compliance

# 실시간 문서 모니터링
npm run watch:compliance

# AI 프롬프트 생성
npm run generate:prompt -- --feature "your-feature"
```

### 새로운 파일 구조
```
MASTER_PLAYBOOK/
├── 01_AI_Communication_Mastery/    # 통합됨 (NEW)
├── 02_Development_Methodology/      # 통합됨 (NEW)
├── 03_AI_Automation_Suite/         # 통합됨 (NEW)
├── 34_Data_Migration_Mastery/      # NEW
├── 35_NextJS_Production_Reality/   # NEW
├── 36_Document_Compliance_System/  # NEW
└── _archived_modules/              # 이전 모듈들
```

## ⚡ Quick Migration

최소한의 변경으로 v4.0.0 사용하기:

```bash
# 1. 최신 버전 받기
git pull

# 2. SMART_INDEX 사용 (자동 경로 매핑)
cat MASTER_PLAYBOOK/SMART_INDEX.md

# 3. Document Compliance 비활성화 (선택사항)
echo "SKIP_COMPLIANCE_CHECK=true" >> .env
```

## 🆘 문제 해결

### Q: 이전 모듈을 찾을 수 없음
A: `_archived_modules/` 디렉토리에서 찾거나 새로운 통합 모듈 사용

### Q: Import 에러 발생
A: 경로를 새로운 통합 모듈로 업데이트
```bash
# 자동 경로 변경 스크립트
find . -name "*.ts" -o -name "*.js" | xargs sed -i '' 's/11_Quick_Wins/02_Development_Methodology/g'
```

### Q: Document Compliance 에러
A: 필수 문서 생성 후 재시도
```bash
# 기본 문서 템플릿 복사
cp -r MASTER_PLAYBOOK/36_Document_Compliance_System/templates/basic-docs/* docs/
```

## 📚 추가 리소스

- [Document Compliance System 가이드](../MASTER_PLAYBOOK/36_Document_Compliance_System/README.md)
- [3대 통합 모듈 소개](../MASTER_PLAYBOOK/CONSOLIDATION_COMPLETE.md)
- [SMART_INDEX 네비게이션](../MASTER_PLAYBOOK/SMART_INDEX.md)

## ✅ 마이그레이션 체크리스트

- [ ] 프로젝트 백업 완료
- [ ] v4.0.0 코드 받기
- [ ] 의존성 업데이트
- [ ] Import 경로 변경
- [ ] Document Compliance 설정
- [ ] 테스트 실행
- [ ] 문서 검증 통과

---

**Need Help?** [이슈 리포트](https://github.com/your-username/AI_Workflow_Playbook/issues)