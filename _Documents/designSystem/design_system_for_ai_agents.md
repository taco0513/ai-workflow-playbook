# AI 에이전트 개발자를 위한 디자인 시스템 이해

이 문서는 **Claude Code CLI** 같은 AI 에이전트가 디지털 프로덕트를 개발할 때 알아야 할 디자인 시스템, 스타일 가이드, 디자인 토큰, 타이포그래피 컴포넌트의 핵심 개념을 정리합니다. 목표는 AI가 일관된 사용자 경험(UX)을 빠르고 안정적으로 생성하도록 돕는 "Single Source of Truth"를 구축하는 것입니다.

---

## 1. 디자인 시스템 (Design System)

### 정의
디자인 시스템은 **UI 컴포넌트·패턴·가이드라인·원칙·코드 스니펫**을 포함한 종합 규칙 집합입니다.

### 왜 중요한가?
- **예측 가능한 UI** 생성으로 사용자 경험 일관성 확보
- **컴포넌트 재사용** → 코드/디자인 중복 제거, 개발 속도 ↑
- **브랜드 일관성** → 신뢰 구축
- **중앙 관리** → 한 번 수정하면 전역 반영, 유지보수 용이

> **예시** : Google **Material Design**, Apple **Human Interface Guidelines**

---

## 2. 스타일 가이드 (Style Guide)
브랜드 아이덴티티를 시각적으로 정의하는 문서. 로고·색상·폰트·아이콘·이미지 사용 규칙을 포함합니다.

### 왜 중요한가?
- 시각적 통일성 학습
- 브랜드 이미지 각인
- 디자인 의도 → 코드 반영 명확화

---

## 3. 디자인 토큰 (Design Tokens)
디자인 속성을 변수로 추상화한 **원자 단위**. 예: 색상, 간격, 폰트 크기, 그림자.

```scss
$color-brand-primary: #FF5722;
$spacing-medium: 16px;
$font-size-heading-large: 32px;
```

CSS 변수 예시:

```css
:root {
  --color-brand-primary: #FF5722;
  --spacing-medium: 16px;
  --font-size-heading-large: 32px;
}

.button {
  background-color: var(--color-brand-primary);
  padding: var(--spacing-medium);
  font-size: var(--font-size-body);
}
```

### 왜 중요한가?
- 디자인 ↔ 코드 싱크
- 시스템 확장성·유연성
- 멀티 플랫폼 일관성(Web / iOS / Android)

---

## 4. 타이포그래피 컴포넌트 (Typography Component)
제목, 본문, 링크 등 모든 텍스트의 규칙을 컴포넌트화합니다.

HTML & CSS 예시:

```html
<h1 class="headline-1">가장 큰 제목</h1>
<p class="body-text">본문 텍스트 예시</p>
<a href="#" class="link-primary">자세히 보기</a>
```

```css
.headline-1 {
  font-family: var(--font-family-display);
  font-size: var(--font-size-heading-large);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: var(--line-height-heading);
}

.body-text {
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
  color: var(--color-text-secondary);
  line-height: var(--line-height-body);
}

.link-primary {
  font-family: var(--font-family-body);
  font-size: var(--font-size-body);
  color: var(--color-brand-primary);
  text-decoration: underline;
}
```

### 왜 중요한가?
- 가독성·접근성 향상
- 시각적 계층 구조 제공
- 브랜드 톤 & 매너 반영

---

## 5. 와이어프레임·프로토타입용 **기본 스타일 가이드**
빠른 아이디어 검증 단계에서는 전체 시스템 대신 **경량 가이드**만으로도 충분합니다.

### 5‑1. 색상 팔레트 (Color Palette)
| 역할 | HEX 코드 |
| --- | --- |
| Primary | `#4CAF50` |
| Secondary | `#FFC107` |
| Success | `#4CAF50` |
| Warning | `#FF9800` |
| Error | `#F44336` |
| Text Dark | `#333333` |
| Text Light | `#666666` |
| Border | `#CCCCCC` |
| BG Light | `#F8F8F8` |

### 5‑2. 타이포그래피 (Typography)
| 스타일 | 크기(px) | 굵기 | 줄간격 |
| --- | --- | --- | --- |
| H1 | 36 | 700 | 1.2 |
| H2 | 28 | 700 | 1.2 |
| H3 | 22 | 600 | 1.3 |
| Body | 16 | 400 | 1.5 |
| Caption | 14 | 400 | 1.5 |

기본 폰트 패밀리: `Arial, sans-serif` / 제목용 추가 폰트: `Roboto, sans-serif`.

### 5‑3. 간격 & 여백 (Spacing)
`4px` 그리드 시스템:
```
xs = 4px
sm = 8px
md = 16px
lg = 24px
xl = 32px
```

### 5‑4. 그림자 (Shadows)
```
Default  : 0 2px 4px rgba(0,0,0,0.10)
Elevated : 0 4px 8px rgba(0,0,0,0.15)
```

### 5‑5. Border‑Radius
```
Small   : 4px
Medium  : 8px
Circular: 50%
```

### 5‑6. 아이콘 (Icons)
- 라이브러리: **Material Icons** 또는 **Font Awesome**
- 스타일: Line 또는 Filled 중 택 1로 통일

### 5‑7. 컴포넌트 예시
- **Primary Button**  
  배경 `primary`, 글자 흰색, `padding: 10px 20px`, `radius: 4px`
- **Secondary Button**  
  배경 흰색, 글자 `primary`, 테두리 1px `primary`
- **Input Field**  
  배경 흰색, 테두리 `#CCCCCC`, `padding: 12px`, `radius: 4px` (포커스 시 테두리 `primary`)
- **Card**  
  배경 흰색, `padding: 16px`, `radius: 8px`, 그림자 Default

---

## 6. 추가 학습 자료
- [Material Design (구글)](https://m2.material.io/)
- [Human Interface Guidelines (애플)](https://developer.apple.com/design/human-interface-guidelines/)
- [Design Tokens Community](https://www.designtokens.org/)
- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)

---

> **Tip** : Claude Code CLI 에이전트에게 이 문서를 학습시키면, `#4CAF50` 사이즈 `md` 버튼 같은 자연어 요청만으로도 정확한 코드 스니펫을 생성할 수 있습니다.

