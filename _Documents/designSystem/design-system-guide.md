# Claude Code CLI를 위한 디자인 시스템 구현 가이드

## 시작하기 전 필수 이해사항

이 문서는 AI 에이전트(Claude Code CLI)가 일관된 디자인 시스템을 가진 애플리케이션을 개발할 수 있도록 작성되었습니다. 모든 규칙과 패턴을 엄격히 따라주세요.

---

## 1. 프로젝트 구조 설정

### 필수 디렉토리 구조
```
project-root/
├── src/
│   ├── styles/
│   │   ├── tokens/
│   │   │   ├── colors.css
│   │   │   ├── typography.css
│   │   │   ├── spacing.css
│   │   │   └── shadows.css
│   │   ├── components/
│   │   │   ├── button.css
│   │   │   ├── card.css
│   │   │   ├── form.css
│   │   │   └── modal.css
│   │   ├── layouts/
│   │   │   ├── grid.css
│   │   │   └── container.css
│   │   ├── utilities/
│   │   │   ├── flex.css
│   │   │   └── spacing.css
│   │   └── main.css
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   └── [기타 컴포넌트]/
│   └── pages/
```

### 초기 설정 명령어
```bash
# 프로젝트 생성 시 실행
mkdir -p src/styles/{tokens,components,layouts,utilities}
mkdir -p src/components/{Button,Card,Form,Modal}

# 기본 파일 생성
touch src/styles/main.css
touch src/styles/tokens/{colors,typography,spacing,shadows}.css
```

---

## 2. 디자인 토큰 시스템

### 2.1 색상 토큰 (colors.css)
```css
/* src/styles/tokens/colors.css */
/* 항상 이 구조를 사용하세요 */
:root {
  /* Primary Colors - 브랜드 메인 색상 */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-200: #bfdbfe;
  --color-primary-300: #93c5fd;
  --color-primary-400: #60a5fa;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-primary-800: #1e40af;
  --color-primary-900: #1e3a8a;

  /* Gray Scale - 텍스트와 배경에 사용 */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  /* System Colors - 상태 표시용 */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: #3b82f6;

  /* Semantic Colors - 의미별 색상 */
  --color-background: #ffffff;
  --color-surface: #ffffff;
  --color-text-primary: var(--color-gray-900);
  --color-text-secondary: var(--color-gray-600);
  --color-text-disabled: var(--color-gray-400);
  --color-border: var(--color-gray-200);
}

/* Dark Theme - data-theme="dark" 속성 사용 시 */
[data-theme="dark"] {
  --color-background: #0f172a;
  --color-surface: #1e293b;
  --color-text-primary: #f1f5f9;
  --color-text-secondary: #cbd5e1;
  --color-text-disabled: #64748b;
  --color-border: #334155;
}
```

### 2.2 타이포그라피 토큰 (typography.css)
```css
/* src/styles/tokens/typography.css */
:root {
  /* Font Families */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: "Fira Code", "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  /* Font Sizes - rem 단위 사용 */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  --leading-loose: 2;

  /* Font Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### 2.3 간격 토큰 (spacing.css)
```css
/* src/styles/tokens/spacing.css */
/* 8px 그리드 시스템 사용 */
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */

  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.125rem;  /* 2px */
  --radius-md: 0.375rem;  /* 6px */
  --radius-lg: 0.5rem;    /* 8px */
  --radius-xl: 0.75rem;   /* 12px */
  --radius-2xl: 1rem;     /* 16px */
  --radius-full: 9999px;
}
```

### 2.4 그림자 토큰 (shadows.css)
```css
/* src/styles/tokens/shadows.css */
:root {
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --shadow-none: 0 0 #0000;
}
```

---

## 3. 컴포넌트 생성 규칙

### 3.1 Button 컴포넌트 템플릿

**파일: src/components/Button/Button.jsx**
```jsx
import React from 'react';
import './Button.css';

// 항상 이 prop 구조를 사용하세요
const Button = ({ 
  variant = 'primary',    // primary | secondary | ghost | danger
  size = 'medium',        // small | medium | large
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  children,
  className = '',
  ...props 
}) => {
  // 클래스명 조합 로직
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full-width',
    disabled && 'btn--disabled',
    loading && 'btn--loading',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <span className="btn__loader">Loading...</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
```

**파일: src/components/Button/Button.css**
```css
/* Button Base Styles - 모든 버튼의 기본 */
.btn {
  /* 레이아웃 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  /* 스타일 */
  font-family: var(--font-sans);
  font-weight: var(--font-medium);
  border-radius: var(--radius-md);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  
  /* 리셋 */
  appearance: none;
  text-decoration: none;
  outline: none;
}

/* Sizes - 크기별 스타일 */
.btn--small {
  padding: var(--space-1) var(--space-3);
  font-size: var(--text-sm);
  height: 32px;
}

.btn--medium {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-base);
  height: 40px;
}

.btn--large {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-lg);
  height: 48px;
}

/* Variants - 스타일 변형 */
.btn--primary {
  background-color: var(--color-primary-600);
  color: white;
}

.btn--primary:hover:not(:disabled) {
  background-color: var(--color-primary-700);
}

.btn--primary:active:not(:disabled) {
  background-color: var(--color-primary-800);
}

.btn--secondary {
  background-color: transparent;
  color: var(--color-primary-600);
  border-color: var(--color-primary-600);
}

.btn--secondary:hover:not(:disabled) {
  background-color: var(--color-primary-50);
}

.btn--ghost {
  background-color: transparent;
  color: var(--color-text-primary);
}

.btn--ghost:hover:not(:disabled) {
  background-color: var(--color-gray-100);
}

.btn--danger {
  background-color: var(--color-error);
  color: white;
}

/* States - 상태별 스타일 */
.btn--disabled,
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn--loading {
  color: transparent;
  position: relative;
}

.btn--full-width {
  width: 100%;
}

/* Focus 스타일 - 접근성 필수 */
.btn:focus-visible {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}
```

### 3.2 Card 컴포넌트 템플릿

**파일: src/components/Card/Card.jsx**
```jsx
import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  padding = 'medium',  // none | small | medium | large
  shadow = 'md',       // none | sm | md | lg
  hover = false,
  onClick,
  className = '',
  ...props 
}) => {
  const classNames = [
    'card',
    `card--padding-${padding}`,
    `card--shadow-${shadow}`,
    hover && 'card--hover',
    onClick && 'card--clickable',
    className
  ].filter(Boolean).join(' ');

  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      className={classNames}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
```

### 3.3 Form 컴포넌트들

**파일: src/components/Form/Input.jsx**
```jsx
import React from 'react';
import './Form.css';

const Input = ({ 
  type = 'text',
  label,
  error,
  helpText,
  required = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="form-field">
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label}
          {required && <span className="form-required">*</span>}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={`form-input ${error ? 'form-input--error' : ''} ${className}`}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined}
        {...props}
      />
      {helpText && !error && (
        <p id={`${inputId}-help`} className="form-help">
          {helpText}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="form-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
```

---

## 4. 레이아웃 시스템

### 4.1 Container 컴포넌트
```jsx
// src/components/Layout/Container.jsx
const Container = ({ children, size = 'default', className = '' }) => {
  const sizes = {
    small: 'container--small',    // max-width: 768px
    default: 'container--default', // max-width: 1200px
    large: 'container--large',     // max-width: 1440px
    full: 'container--full'        // width: 100%
  };

  return (
    <div className={`container ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
};
```

### 4.2 Grid 시스템
```css
/* src/styles/layouts/grid.css */
.grid {
  display: grid;
  gap: var(--space-4);
}

/* 반응형 그리드 */
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }

/* 반응형 브레이크포인트 */
@media (min-width: 768px) {
  .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .md\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
  .lg\:grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
  .lg\:grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
}
```

---

## 5. 유틸리티 클래스

### 5.1 Spacing 유틸리티
```css
/* src/styles/utilities/spacing.css */
/* Padding - p{방향}-{크기} */
.p-0 { padding: 0; }
.p-1 { padding: var(--space-1); }
.p-2 { padding: var(--space-2); }
.p-3 { padding: var(--space-3); }
.p-4 { padding: var(--space-4); }
.p-5 { padding: var(--space-5); }
.p-6 { padding: var(--space-6); }
.p-8 { padding: var(--space-8); }

/* 방향별 패딩 */
.pt-4 { padding-top: var(--space-4); }
.pr-4 { padding-right: var(--space-4); }
.pb-4 { padding-bottom: var(--space-4); }
.pl-4 { padding-left: var(--space-4); }

/* X축, Y축 패딩 */
.px-4 { 
  padding-left: var(--space-4); 
  padding-right: var(--space-4); 
}
.py-4 { 
  padding-top: var(--space-4); 
  padding-bottom: var(--space-4); 
}

/* Margin - 패딩과 동일한 패턴 */
.m-0 { margin: 0; }
.m-auto { margin: auto; }
/* ... 나머지 마진 클래스들 */

/* 음수 마진 */
.-mt-4 { margin-top: calc(var(--space-4) * -1); }
```

### 5.2 Flexbox 유틸리티
```css
/* src/styles/utilities/flex.css */
/* Display */
.flex { display: flex; }
.inline-flex { display: inline-flex; }

/* Direction */
.flex-row { flex-direction: row; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-col { flex-direction: column; }
.flex-col-reverse { flex-direction: column-reverse; }

/* Wrap */
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }

/* Align Items */
.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }

/* Justify Content */
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }
.justify-evenly { justify-content: space-evenly; }

/* Gap */
.gap-1 { gap: var(--space-1); }
.gap-2 { gap: var(--space-2); }
.gap-3 { gap: var(--space-3); }
.gap-4 { gap: var(--space-4); }
```

---

## 6. 반응형 디자인 규칙

### 6.1 브레이크포인트
```css
/* 항상 이 브레이크포인트를 사용하세요 */
/* Mobile First 접근법 */
/* Default: 0px - 767px (Mobile) */
/* sm: 640px+ */
/* md: 768px+ */
/* lg: 1024px+ */
/* xl: 1280px+ */
/* 2xl: 1536px+ */
```

### 6.2 반응형 컴포넌트 예시
```jsx
// 반응형을 고려한 컴포넌트
const ResponsiveGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
};
```

---

## 7. 파일 생성 시 체크리스트

### 새 컴포넌트 생성 시
1. ✅ 컴포넌트 폴더 생성: `src/components/ComponentName/`
2. ✅ JSX 파일 생성: `ComponentName.jsx`
3. ✅ CSS 파일 생성: `ComponentName.css`
4. ✅ index.js 생성 (export 용)
5. ✅ PropTypes 또는 TypeScript 타입 정의
6. ✅ 스토리북 파일 생성: `ComponentName.stories.jsx`

### CSS 작성 시
1. ✅ CSS 변수 사용 (하드코딩 금지)
2. ✅ BEM 네이밍 컨벤션 사용
3. ✅ 모바일 우선 미디어 쿼리
4. ✅ :focus-visible 스타일 추가
5. ✅ 다크모드 스타일 고려

### 접근성 체크리스트
1. ✅ 시맨틱 HTML 사용
2. ✅ ARIA 레이블 추가
3. ✅ 키보드 네비게이션 지원
4. ✅ 색상 대비 4.5:1 이상
5. ✅ 포커스 인디케이터 표시

---

## 8. 코드 생성 템플릿

### 새 페이지 생성 템플릿
```jsx
// src/pages/PageName.jsx
import React from 'react';
import { Container, Button, Card } from '../components';
import './PageName.css';

const PageName = () => {
  return (
    <Container>
      <h1 className="text-4xl font-bold mb-8">Page Title</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 콘텐츠 */}
      </div>
    </Container>
  );
};

export default PageName;
```

### API 연동 컴포넌트 템플릿
```jsx
import React, { useState, useEffect } from 'react';
import { Card, Button } from '../components';

const DataComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/endpoint');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* 데이터 렌더링 */}
    </div>
  );
};
```

---

## 9. 자주 사용하는 패턴

### 9.1 모달 패턴
```jsx
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};
```

### 9.2 드롭다운 패턴
```jsx
const Dropdown = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {children}
        </div>
      )}
    </div>
  );
};
```

---

## 10. 디버깅과 테스트

### Console 로그 규칙
```javascript
// 개발 중에만 로그 출력
const log = (...args) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('[App]', ...args);
  }
};

// 컴포넌트별 로그
log('Button clicked', { variant, size });
```

### 에러 바운더리
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

---

## 11. 성능 최적화 규칙

### 컴포넌트 최적화
```jsx
// React.memo 사용
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* 복잡한 렌더링 */}</div>;
});

// useMemo 사용
const processedData = useMemo(() => {
  return heavyProcessing(data);
}, [data]);

// useCallback 사용
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

### CSS 최적화
```css
/* Critical CSS는 인라인으로 */
/* 나머지는 lazy load */
<link rel="preload" href="/styles/main.css" as="style">
<link rel="stylesheet" href="/styles/main.css">
```

---

## 12. 배포 준비 체크리스트

### 빌드 전 확인사항
1. ✅ 모든 console.log 제거
2. ✅ 에러 처리 확인
3. ✅ 환경변수 설정
4. ✅ 불필요한 주석 제거
5. ✅ 이미지 최적화
6. ✅ CSS/JS 번들 최적화
7. ✅ 접근성 테스트
8. ✅ 반응형 테스트

### 빌드 명령어
```bash
# 프로덕션 빌드
npm run build

# 빌드 크기 분석
npm run analyze

# 빌드 후 로컬 테스트
npm run preview
```

---

## 중요: AI 에이전트를 위한 핵심 규칙

1. **항상 디자인 토큰을 사용하세요** - 색상, 간격, 폰트 크기 등을 하드코딩하지 마세요
2. **컴포넌트는 재사용 가능하게** - props로 변형 가능하도록 만드세요
3. **모바일 우선 설계** - 작은 화면부터 시작해서 확장하세요
4. **접근성은 필수** - ARIA 속성, 키보드 지원, 충분한 색상 대비
5. **일관된 네이밍** - BEM for CSS, PascalCase for 컴포넌트, camelCase for 함수
6. **에러 처리** - 모든 비동기 작업에 try-catch 사용
7. **성능 고려** - 큰 리스트는 가상화, 이미지는 lazy loading

이 가이드를 엄격히 따라 일관되고 유지보수가 쉬운 코드를 생성하세요.