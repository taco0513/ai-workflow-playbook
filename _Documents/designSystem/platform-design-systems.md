# 플랫폼별 디자인 시스템 가이드 - Web, iOS, Android

## 목차
1. [플랫폼별 디자인 시스템 개요](#1-플랫폼별-디자인-시스템-개요)
2. [웹 디자인 시스템](#2-웹-디자인-시스템)
3. [iOS 디자인 시스템 (Human Interface Guidelines)](#3-ios-디자인-시스템)
4. [Android 디자인 시스템 (Material Design)](#4-android-디자인-시스템)
5. [React Native 구현 가이드](#5-react-native-구현-가이드)
6. [Flutter 구현 가이드](#6-flutter-구현-가이드)
7. [플랫폼별 컴포넌트 매핑](#7-플랫폼별-컴포넌트-매핑)
8. [네비게이션 패턴](#8-네비게이션-패턴)
9. [제스처와 애니메이션](#9-제스처와-애니메이션)
10. [플랫폼별 특수 고려사항](#10-플랫폼별-특수-고려사항)

---

## 1. 플랫폼별 디자인 시스템 개요

### 웹 vs 모바일의 근본적 차이

| 구분 | 웹 (Desktop/Mobile Web) | iOS Native | Android Native |
|------|-------------------------|------------|----------------|
| **입력 방식** | 마우스 + 키보드 / 터치 | 터치 + 제스처 | 터치 + 제스처 |
| **화면 크기** | 320px ~ 4K | 375px ~ 834px | 360px ~ 800px |
| **네비게이션** | URL 기반 | Stack/Tab 기반 | Stack/Drawer 기반 |
| **컴포넌트** | HTML/CSS | UIKit/SwiftUI | Material Components |
| **애니메이션** | CSS/JS | Core Animation | Android Animation |
| **파일 크기** | 번들 최적화 중요 | 앱 스토어 제한 | APK 크기 제한 |

### 디자인 시스템 선택 기준

```javascript
// 플랫폼 선택 로직
const choosePlatform = (requirements) => {
  if (requirements.includes('웹 검색 노출')) return 'Web';
  if (requirements.includes('오프라인 사용')) return 'Native App';
  if (requirements.includes('빠른 개발')) return 'React Native/Flutter';
  if (requirements.includes('최고 성능')) return 'Native (iOS/Android)';
};
```

---

## 2. 웹 디자인 시스템

### 2.1 반응형 디자인 원칙

```css
/* 웹 전용 브레이크포인트 */
:root {
  /* Mobile First Breakpoints */
  --mobile: 320px;      /* 최소 지원 크기 */
  --tablet: 768px;      /* 태블릿 시작 */
  --desktop: 1024px;    /* 데스크톱 시작 */
  --wide: 1440px;       /* 와이드 스크린 */
  --ultrawide: 1920px;  /* 울트라 와이드 */
}

/* 컨테이너 시스템 */
.web-container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-4);
}

@media (min-width: 768px) {
  .web-container {
    padding: 0 var(--space-6);
  }
}

@media (min-width: 1024px) {
  .web-container {
    padding: 0 var(--space-8);
  }
}
```

### 2.2 웹 전용 컴포넌트

```jsx
// 웹 전용 Navigation Bar
const WebNavigation = () => {
  return (
    <nav className="web-nav">
      <div className="web-nav__brand">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <ul className="web-nav__menu">
        <li><a href="/features">Features</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/about">About</a></li>
      </ul>
      <div className="web-nav__actions">
        <Button variant="ghost">Sign In</Button>
        <Button variant="primary">Get Started</Button>
      </div>
    </nav>
  );
};

// 웹 전용 Hero Section
const WebHero = () => {
  return (
    <section className="web-hero">
      <div className="web-hero__content">
        <h1 className="web-hero__title">Build Better Products</h1>
        <p className="web-hero__subtitle">
          Create amazing experiences with our design system
        </p>
        <div className="web-hero__cta">
          <Button size="large" variant="primary">Start Free Trial</Button>
          <Button size="large" variant="ghost">Watch Demo</Button>
        </div>
      </div>
      <div className="web-hero__image">
        <img src="/hero-image.png" alt="Product Screenshot" />
      </div>
    </section>
  );
};
```

### 2.3 웹 타이포그라피 스케일

```css
/* 웹 전용 타이포그라피 */
.web-display {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 800;
}

.web-heading-1 {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  font-weight: 700;
}

.web-heading-2 {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: 1.3;
  font-weight: 600;
}

.web-body-large {
  font-size: 1.125rem;
  line-height: 1.75;
}

.web-body {
  font-size: 1rem;
  line-height: 1.6;
}
```

### 2.4 웹 인터랙션 패턴

```css
/* Hover 효과 (모바일에서는 적용 안됨) */
@media (hover: hover) {
  .web-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
  
  .web-link:hover {
    color: var(--color-primary-600);
    text-decoration: underline;
  }
}

/* 포커스 스타일 */
.web-interactive:focus-visible {
  outline: 3px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

---

## 3. iOS 디자인 시스템

### 3.1 iOS 디자인 원칙

```swift
// iOS Human Interface Guidelines 핵심 원칙
enum iOSDesignPrinciples {
    case clarity       // 명확성: 텍스트는 읽기 쉽고, 아이콘은 명확해야 함
    case deference     // 존중: 콘텐츠가 화면을 채우고, 인터페이스는 보조 역할
    case depth         // 깊이: 레이어와 모션으로 계층과 활력 표현
}
```

### 3.2 iOS 색상 시스템

```swift
// iOS 시스템 색상 (다크모드 자동 지원)
struct iOSColors {
    // Label Colors
    static let label = UIColor.label                    // 주요 텍스트
    static let secondaryLabel = UIColor.secondaryLabel  // 보조 텍스트
    static let tertiaryLabel = UIColor.tertiaryLabel   // 3차 텍스트
    static let quaternaryLabel = UIColor.quaternaryLabel // 4차 텍스트
    
    // System Colors
    static let systemBlue = UIColor.systemBlue
    static let systemGreen = UIColor.systemGreen
    static let systemRed = UIColor.systemRed
    static let systemOrange = UIColor.systemOrange
    static let systemYellow = UIColor.systemYellow
    static let systemPink = UIColor.systemPink
    static let systemPurple = UIColor.systemPurple
    static let systemTeal = UIColor.systemTeal
    
    // Background Colors
    static let systemBackground = UIColor.systemBackground
    static let secondarySystemBackground = UIColor.secondarySystemBackground
    static let tertiarySystemBackground = UIColor.tertiarySystemBackground
}
```

### 3.3 iOS 타이포그라피

```swift
// iOS 텍스트 스타일
enum iOSTextStyle {
    case largeTitle    // 34pt, Bold
    case title1        // 28pt, Regular
    case title2        // 22pt, Regular
    case title3        // 20pt, Regular
    case headline      // 17pt, Semibold
    case body          // 17pt, Regular
    case callout       // 16pt, Regular
    case subheadline   // 15pt, Regular
    case footnote      // 13pt, Regular
    case caption1      // 12pt, Regular
    case caption2      // 11pt, Regular
}

// 동적 타입 지원
let label = UILabel()
label.font = UIFont.preferredFont(forTextStyle: .body)
label.adjustsFontForContentSizeCategory = true
```

### 3.4 iOS 컴포넌트 스타일

```jsx
// React Native에서 iOS 스타일 구현
const iOSButton = {
  container: {
    height: 44, // iOS 최소 터치 영역
    paddingHorizontal: 16,
    borderRadius: 10, // iOS 표준 radius
    backgroundColor: '#007AFF', // iOS Blue
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
  },
  pressed: {
    opacity: 0.8, // iOS 터치 피드백
  }
};

// iOS 네비게이션 바
const iOSNavigationBar = {
  container: {
    height: 44,
    paddingTop: Platform.OS === 'ios' ? 44 : 0, // Safe Area
    backgroundColor: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(20px)', // iOS 블러 효과
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  }
};
```

### 3.5 iOS Safe Area 처리

```jsx
// React Native Safe Area
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IOSScreen = () => {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }}>
      {/* Content */}
    </View>
  );
};
```

---

## 4. Android 디자인 시스템

### 4.1 Material Design 3 원칙

```kotlin
// Material Design 핵심 원칙
enum class MaterialPrinciples {
    MATERIAL_IS_THE_METAPHOR,  // 물리적 속성을 가진 디지털 재료
    BOLD_GRAPHIC_INTENTIONAL,  // 대담하고 의도적인 그래픽
    MOTION_PROVIDES_MEANING     // 의미를 전달하는 모션
}
```

### 4.2 Material You 색상 시스템

```javascript
// Material You Dynamic Color
const materialColors = {
  // Primary
  primary: '#6750A4',
  onPrimary: '#FFFFFF',
  primaryContainer: '#EADDFF',
  onPrimaryContainer: '#21005D',
  
  // Secondary
  secondary: '#625B71',
  onSecondary: '#FFFFFF',
  secondaryContainer: '#E8DEF8',
  onSecondaryContainer: '#1D192B',
  
  // Tertiary
  tertiary: '#7D5260',
  onTertiary: '#FFFFFF',
  tertiaryContainer: '#FFD8E4',
  onTertiaryContainer: '#31111D',
  
  // Error
  error: '#B3261E',
  onError: '#FFFFFF',
  errorContainer: '#F9DEDC',
  onErrorContainer: '#410E0B',
  
  // Background
  background: '#FFFBFE',
  onBackground: '#1C1B1F',
  
  // Surface
  surface: '#FFFBFE',
  onSurface: '#1C1B1F',
  surfaceVariant: '#E7E0EC',
  onSurfaceVariant: '#49454F',
};
```

### 4.3 Material Typography

```css
/* Material Design 3 Type Scale */
.material-display-large {
  font-size: 57px;
  line-height: 64px;
  letter-spacing: -0.25px;
  font-weight: 400;
}

.material-display-medium {
  font-size: 45px;
  line-height: 52px;
  letter-spacing: 0;
  font-weight: 400;
}

.material-display-small {
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0;
  font-weight: 400;
}

.material-headline-large {
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0;
  font-weight: 400;
}

.material-headline-medium {
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0;
  font-weight: 400;
}

.material-headline-small {
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  font-weight: 400;
}

.material-body-large {
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  font-weight: 400;
}

.material-body-medium {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  font-weight: 400;
}

.material-body-small {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  font-weight: 400;
}
```

### 4.4 Material Components

```jsx
// Material Design Button (React Native)
const MaterialButton = ({ variant = 'filled', children, onPress }) => {
  const styles = {
    filled: {
      container: {
        backgroundColor: materialColors.primary,
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 20,
        elevation: 1,
      },
      text: {
        color: materialColors.onPrimary,
      }
    },
    outlined: {
      container: {
        borderWidth: 1,
        borderColor: materialColors.outline,
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 20,
      },
      text: {
        color: materialColors.primary,
      }
    },
    text: {
      container: {
        paddingVertical: 10,
        paddingHorizontal: 12,
      },
      text: {
        color: materialColors.primary,
      }
    }
  };

  return (
    <TouchableOpacity 
      style={styles[variant].container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[materialTextStyles.labelLarge, styles[variant].text]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

// Material Design Card
const MaterialCard = ({ children, elevated = false }) => {
  return (
    <View style={{
      backgroundColor: materialColors.surface,
      borderRadius: 12,
      padding: 16,
      ...(elevated && {
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      })
    }}>
      {children}
    </View>
  );
};
```

### 4.5 Material Motion

```javascript
// Material Design 애니메이션 원칙
const materialMotion = {
  // Duration
  short1: 50,
  short2: 100,
  short3: 150,
  short4: 200,
  medium1: 250,
  medium2: 300,
  medium3: 350,
  medium4: 400,
  long1: 450,
  long2: 500,
  long3: 550,
  long4: 600,
  
  // Easing
  emphasized: 'cubic-bezier(0.2, 0, 0, 1)',
  emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
  emphasizedAccelerate: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
  standardAccelerate: 'cubic-bezier(0.3, 0, 1, 1)',
};
```

---

## 5. React Native 구현 가이드

### 5.1 크로스 플랫폼 컴포넌트 구조

```jsx
// components/Button/index.js
import React from 'react';
import { Platform } from 'react-native';
import IOSButton from './Button.ios';
import AndroidButton from './Button.android';

// 플랫폼별 자동 선택
export default Platform.select({
  ios: IOSButton,
  android: AndroidButton,
});
```

### 5.2 플랫폼별 스타일 시스템

```javascript
// styles/theme.js
import { Platform } from 'react-native';

export const theme = {
  colors: Platform.select({
    ios: {
      primary: '#007AFF',
      secondary: '#5856D6',
      success: '#34C759',
      warning: '#FF9500',
      danger: '#FF3B30',
      background: '#F2F2F7',
      surface: '#FFFFFF',
      text: '#000000',
      textSecondary: '#3C3C43',
    },
    android: {
      primary: '#6750A4',
      secondary: '#625B71',
      success: '#4CAF50',
      warning: '#FF9800',
      danger: '#F44336',
      background: '#FFFBFE',
      surface: '#FFFBFE',
      text: '#1C1B1F',
      textSecondary: '#49454F',
    }
  }),
  
  typography: Platform.select({
    ios: {
      largeTitle: { fontSize: 34, fontWeight: '700' },
      title1: { fontSize: 28, fontWeight: '400' },
      title2: { fontSize: 22, fontWeight: '400' },
      title3: { fontSize: 20, fontWeight: '400' },
      headline: { fontSize: 17, fontWeight: '600' },
      body: { fontSize: 17, fontWeight: '400' },
      callout: { fontSize: 16, fontWeight: '400' },
      subheadline: { fontSize: 15, fontWeight: '400' },
      footnote: { fontSize: 13, fontWeight: '400' },
      caption1: { fontSize: 12, fontWeight: '400' },
      caption2: { fontSize: 11, fontWeight: '400' },
    },
    android: {
      displayLarge: { fontSize: 57, lineHeight: 64 },
      displayMedium: { fontSize: 45, lineHeight: 52 },
      displaySmall: { fontSize: 36, lineHeight: 44 },
      headlineLarge: { fontSize: 32, lineHeight: 40 },
      headlineMedium: { fontSize: 28, lineHeight: 36 },
      headlineSmall: { fontSize: 24, lineHeight: 32 },
      bodyLarge: { fontSize: 16, lineHeight: 24 },
      bodyMedium: { fontSize: 14, lineHeight: 20 },
      bodySmall: { fontSize: 12, lineHeight: 16 },
      labelLarge: { fontSize: 14, fontWeight: '500' },
      labelMedium: { fontSize: 12, fontWeight: '500' },
      labelSmall: { fontSize: 11, fontWeight: '500' },
    }
  }),
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  borderRadius: Platform.select({
    ios: {
      small: 6,
      medium: 10,
      large: 14,
      extraLarge: 20,
    },
    android: {
      small: 4,
      medium: 8,
      large: 12,
      extraLarge: 28,
    }
  }),
};
```

### 5.3 React Native 컴포넌트 예시

```jsx
// components/Card.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { theme } from '../styles/theme';

const Card = ({ title, subtitle, onPress, children }) => {
  const Touchable = Platform.OS === 'ios' 
    ? TouchableOpacity 
    : TouchableNativeFeedback;
    
  const content = (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {children}
    </View>
  );
  
  if (onPress) {
    return (
      <Touchable 
        onPress={onPress}
        activeOpacity={0.7}
      >
        {content}
      </Touchable>
    );
  }
  
  return content;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.md,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      }
    })
  },
  title: Platform.select({
    ios: {
      ...theme.typography.headline,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    },
    android: {
      ...theme.typography.headlineSmall,
      color: theme.colors.text,
      marginBottom: theme.spacing.xs,
    }
  }),
  subtitle: Platform.select({
    ios: {
      ...theme.typography.subheadline,
      color: theme.colors.textSecondary,
    },
    android: {
      ...theme.typography.bodyMedium,
      color: theme.colors.textSecondary,
    }
  }),
});

export default Card;
```

### 5.4 네이티브 모듈 연동

```jsx
// 플랫폼별 네이티브 기능 접근
import { 
  Platform, 
  PermissionsAndroid,
  Alert,
  Linking 
} from 'react-native';

const requestCameraPermission = async () => {
  if (Platform.OS === 'ios') {
    // iOS는 Info.plist에 권한 명시
    return true;
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "카메라 권한 요청",
          message: "앱에서 카메라를 사용하려면 권한이 필요합니다.",
          buttonNeutral: "나중에",
          buttonNegative: "거부",
          buttonPositive: "허용"
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }
};
```

---

## 6. Flutter 구현 가이드

### 6.1 Flutter 테마 시스템

```dart
// lib/theme/app_theme.dart
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';

class AppTheme {
  // Material Theme (Android)
  static ThemeData materialTheme = ThemeData(
    useMaterial3: true,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF6750A4),
      brightness: Brightness.light,
    ),
    typography: Typography.material2021(),
    appBarTheme: const AppBarTheme(
      centerTitle: false,
      elevation: 0,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        minimumSize: const Size(64, 40),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(20),
        ),
      ),
    ),
  );
  
  // Cupertino Theme (iOS)
  static CupertinoThemeData cupertinoTheme = const CupertinoThemeData(
    primaryColor: CupertinoColors.systemBlue,
    brightness: Brightness.light,
    textTheme: CupertinoTextThemeData(
      primaryColor: CupertinoColors.label,
    ),
  );
}
```

### 6.2 플랫폼 적응형 위젯

```dart
// lib/widgets/adaptive_button.dart
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'dart:io';

class AdaptiveButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;
  final bool isPrimary;
  
  const AdaptiveButton({
    Key? key,
    required this.text,
    required this.onPressed,
    this.isPrimary = true,
  }) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    if (Platform.isIOS) {
      return CupertinoButton(
        onPressed: onPressed,
        color: isPrimary ? CupertinoColors.systemBlue : null,
        child: Text(text),
      );
    } else {
      return ElevatedButton(
        onPressed: onPressed,
        style: isPrimary ? null : ElevatedButton.styleFrom(
          foregroundColor: Theme.of(context).colorScheme.primary,
          backgroundColor: Colors.transparent,
          elevation: 0,
        ),
        child: Text(text),
      );
    }
  }
}

// lib/widgets/adaptive_navigation.dart
class AdaptiveNavigation extends StatelessWidget {
  final int currentIndex;
  final Function(int) onTap;
  final List<BottomNavigationBarItem> items;
  
  const AdaptiveNavigation({
    Key? key,
    required this.currentIndex,
    required this.onTap,
    required this.items,
  }) : super(key: key);
  
  @override
  Widget build(BuildContext context) {
    if (Platform.isIOS) {
      return CupertinoTabBar(
        currentIndex: currentIndex,
        onTap: onTap,
        items: items,
      );
    } else {
      return NavigationBar(
        selectedIndex: currentIndex,
        onDestinationSelected: onTap,
        destinations: items.map((item) {
          return NavigationDestination(
            icon: item.icon,
            label: item.label ?? '',
          );
        }).toList(),
      );
    }
  }
}
```

---

## 7. 플랫폼별 컴포넌트 매핑

### 7.1 기본 컴포넌트 대응표

| 컴포넌트 | Web | iOS | Android |
|---------|-----|-----|---------|
| **버튼** | `<button>` | `UIButton` | `MaterialButton` |
| **텍스트 입력** | `<input>` | `UITextField` | `TextInputLayout` |
| **스위치** | `<input type="checkbox">` | `UISwitch` | `SwitchMaterial` |
| **선택** | `<select>` | `UIPickerView` | `Spinner` |
| **슬라이더** | `<input type="range">` | `UISlider` | `Slider` |
| **프로그레스** | `<progress>` | `UIProgressView` | `LinearProgressIndicator` |
| **탭** | Custom | `UITabBar` | `TabLayout` |
| **리스트** | `<ul>/<ol>` | `UITableView` | `RecyclerView` |

### 7.2 React Native 컴포넌트 매핑

```javascript
// 플랫폼별 컴포넌트 매핑
const ComponentMap = {
  Button: {
    web: 'button',
    ios: 'TouchableOpacity',
    android: 'TouchableNativeFeedback',
  },
  TextInput: {
    web: 'input',
    ios: 'TextInput',
    android: 'TextInput',
  },
  Switch: {
    web: 'input[type="checkbox"]',
    ios: 'Switch',
    android: 'Switch',
  },
  Picker: {
    web: 'select',
    ios: 'Picker',
    android: 'Picker',
  },
  List: {
    web: 'ul',
    ios: 'FlatList/SectionList',
    android: 'FlatList/SectionList',
  },
  Modal: {
    web: 'dialog',
    ios: 'Modal',
    android: 'Modal',
  }
};
```

---

## 8. 네비게이션 패턴

### 8.1 웹 네비게이션

```jsx
// 웹: URL 기반 라우팅
const WebNavigation = () => {
  return (
    <Router>
      <nav className="web-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
```

### 8.2 iOS 네비게이션 패턴

```jsx
// iOS: Stack + Tab 네비게이션
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tab Navigator (iOS 스타일)
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#F2F2F7',
        },
        tabBarActiveTintColor: '#007AFF',
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Stack Navigator (iOS 스타일)
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F2F2F7',
        },
        headerTintColor: '#007AFF',
        headerBackTitle: 'Back',
        headerLargeTitleStyle: {
          fontWeight: '700',
        },
      }}
    >
      <Stack.Screen 
        name="HomeMain" 
        component={HomeScreen}
        options={{
          headerLargeTitle: true,
          title: 'Home',
        }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{
          presentation: 'modal', // iOS 모달 스타일
        }}
      />
    </Stack.Navigator>
  );
};
```

### 8.3 Android 네비게이션 패턴

```jsx
// Android: Drawer + Stack 네비게이션
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Drawer = createDrawerNavigator();
const MaterialTab = createMaterialBottomTabNavigator();

// Material Bottom Tab (Android 스타일)
const MaterialTabNavigator = () => {
  return (
    <MaterialTab.Navigator
      activeColor="#6750A4"
      inactiveColor="#49454F"
      barStyle={{ backgroundColor: '#FFFBFE' }}
    >
      <MaterialTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <MaterialTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" size={24} color={color} />
          ),
        }}
      />
      <MaterialTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" size={24} color={color} />
          ),
        }}
      />
    </MaterialTab.Navigator>
  );
};

// Drawer Navigator (Android 스타일)
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#FFFBFE',
        },
        drawerActiveTintColor: '#6750A4',
        drawerInactiveTintColor: '#49454F',
        headerStyle: {
          backgroundColor: '#FFFBFE',
          elevation: 0,
        },
        headerTintColor: '#1C1B1F',
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={MaterialTabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" size={24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
```

---

## 9. 제스처와 애니메이션

### 9.1 플랫폼별 제스처 차이

| 제스처 | Web | iOS | Android |
|--------|-----|-----|---------|
| **탭** | Click | Tap | Tap |
| **길게 누르기** | Context Menu | 3D Touch/Haptic | Long Press |
| **스와이프** | 지원 안함 | Swipe to Delete | Swipe to Dismiss |
| **당겨서 새로고침** | 커스텀 구현 | Pull to Refresh | Swipe to Refresh |
| **핀치 줌** | 브라우저 기본 | Pinch Gesture | Pinch Gesture |

### 9.2 iOS 제스처 구현

```jsx
// iOS Swipe to Delete
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SwipeableRow = ({ item, onDelete }) => {
  const renderRightActions = () => (
    <TouchableOpacity
      style={{
        backgroundColor: '#FF3B30',
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
      }}
      onPress={() => onDelete(item.id)}
    >
      <Text style={{ color: 'white' }}>Delete</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.row}>
        <Text>{item.title}</Text>
      </View>
    </Swipeable>
  );
};

// iOS Pull to Refresh
const IOSListScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // 데이터 새로고침
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem item={item} />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#007AFF" // iOS 색상
          title="당겨서 새로고침"
        />
      }
    />
  );
};
```

### 9.3 Android 제스처 구현

```jsx
// Android Swipe to Dismiss
import { SwipeListView } from 'react-native-swipe-list-view';

const AndroidSwipeList = () => {
  return (
    <SwipeListView
      data={data}
      renderItem={({ item }) => (
        <View style={styles.rowFront}>
          <Text>{item.title}</Text>
        </View>
      )}
      renderHiddenItem={({ item }) => (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.backBtn, styles.backBtnRight]}
            onPress={() => deleteRow(item.id)}
          >
            <MaterialIcons name="delete" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
      rightOpenValue={-75}
      disableRightSwipe
    />
  );
};

// Android FAB (Floating Action Button)
const AndroidFAB = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#6750A4',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
      }}
      onPress={onPress}
    >
      <MaterialIcons name="add" size={24} color="white" />
    </TouchableOpacity>
  );
};
```

### 9.4 애니메이션 구현

```jsx
// 플랫폼별 애니메이션 값
const animations = {
  ios: {
    spring: {
      tension: 100,
      friction: 10,
    },
    timing: {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    }
  },
  android: {
    spring: {
      tension: 40,
      friction: 7,
    },
    timing: {
      duration: 350,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1), // Material easing
    }
  }
};

// 애니메이션 컴포넌트
const AnimatedComponent = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    const config = Platform.OS === 'ios' 
      ? animations.ios.timing 
      : animations.android.timing;
      
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        ...config,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        ...(Platform.OS === 'ios' 
          ? animations.ios.spring 
          : animations.android.spring),
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ scale: scaleAnim }],
      }}
    >
      {/* Content */}
    </Animated.View>
  );
};
```

---

## 10. 플랫폼별 특수 고려사항

### 10.1 iOS 특수 기능

```jsx
// iOS Safe Area 처리
import { SafeAreaView, StatusBar } from 'react-native';

const IOSScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F2F2F7' }}>
      <StatusBar barStyle="dark-content" />
      {/* Content */}
    </SafeAreaView>
  );
};

// iOS Haptic Feedback
import * as Haptics from 'expo-haptics';

const handleIOSPress = async () => {
  // iOS 햅틱 피드백
  await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  // 액션 수행
};

// iOS 키보드 처리
const IOSKeyboardAvoidingView = () => {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 88 : 0}
      style={{ flex: 1 }}
    >
      <ScrollView>
        {/* Form content */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
```

### 10.2 Android 특수 기능

```jsx
// Android Back Button 처리
import { BackHandler } from 'react-native';

const AndroidScreen = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // true = 기본 동작 방지
        // false = 기본 동작 수행
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);
};

// Android Status Bar
const AndroidStatusBar = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#6750A4"
        barStyle="light-content"
        translucent={false}
      />
      {/* Content */}
    </>
  );
};

// Android 권한 요청
import { PermissionsAndroid } from 'react-native';

const requestAndroidPermissions = async () => {
  try {
    const grants = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ]);
    
    return grants;
  } catch (err) {
    console.warn(err);
  }
};
```

### 10.3 웹 특수 고려사항

```css
/* 웹 전용 최적화 */
/* 텍스트 선택 방지 (앱처럼 동작) */
.web-app {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* 터치 하이라이트 제거 */
.web-app * {
  -webkit-tap-highlight-color: transparent;
}

/* 스크롤바 커스터마이징 */
.web-app::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.web-app::-webkit-scrollbar-track {
  background: var(--color-gray-100);
}

.web-app::-webkit-scrollbar-thumb {
  background: var(--color-gray-400);
  border-radius: 4px;
}

/* PWA 설정 */
.web-app {
  /* iOS PWA 상태바 */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

/* 인쇄 스타일 */
@media print {
  .web-no-print {
    display: none !important;
  }
}
```

### 10.4 성능 최적화 전략

```javascript
// 플랫폼별 이미지 최적화
const ImageOptimization = {
  web: {
    formats: ['webp', 'jpg'],
    sizes: {
      mobile: 640,
      tablet: 1024,
      desktop: 1920,
    },
    lazy: true,
  },
  ios: {
    formats: ['png', 'jpg'],
    scales: ['@1x', '@2x', '@3x'],
    caching: 'memory',
  },
  android: {
    formats: ['webp', 'png'],
    densities: ['mdpi', 'hdpi', 'xhdpi', 'xxhdpi', 'xxxhdpi'],
    caching: 'disk',
  }
};

// 리스트 최적화
const OptimizedList = ({ data, platform }) => {
  const getItemLayout = (data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  });

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      getItemLayout={getItemLayout}
      removeClippedSubviews={Platform.OS === 'android'}
      maxToRenderPerBatch={10}
      windowSize={10}
      initialNumToRender={10}
    />
  );
};
```

---

## 결론

### 플랫폼 선택 가이드

```javascript
// 프로젝트 요구사항에 따른 플랫폼 선택
const platformDecisionTree = {
  "SEO 필요": "Web",
  "앱스토어 배포": {
    "네이티브 성능 필요": {
      "iOS만": "Swift/SwiftUI",
      "Android만": "Kotlin/Compose",
      "둘 다": "각각 네이티브"
    },
    "크로스플랫폼 OK": {
      "React 경험": "React Native",
      "Dart 선호": "Flutter"
    }
  },
  "빠른 프로토타입": "Web → PWA",
  "하이브리드": "Web + React Native"
};
```

### 핵심 원칙
1. **플랫폼 가이드라인 준수**: 각 플랫폼의 디자인 언어 존중
2. **일관성과 차별화의 균형**: 브랜드 일관성 유지하면서 플랫폼 특성 활용
3. **성능 우선**: 각 플랫폼에 최적화된 구현
4. **접근성**: 모든 플랫폼에서 접근 가능한 앱 구축
5. **유지보수**: 코드 재사용과 플랫폼별 최적화의 균형

이 가이드를 통해 Claude Code CLI가 각 플랫폼에 최적화된 애플리케이션을 만들 수 있길 바랍니다!
