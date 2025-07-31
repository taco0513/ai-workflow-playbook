/**
 * 확장된 컴포넌트 라이브러리 - 30개 고급 UI 컴포넌트
 * 
 * Visual Builder용 확장 컴포넌트 정의
 * Created: 2025-07-31
 */

// 확장된 컴포넌트 템플릿 정의
const extendedComponentTemplates = {
  // === 기존 컴포넌트 (10개) ===
  // heading, text, button, input, card, container, image, video, divider, spacer

  // === 새로운 컴포넌트 (20개) ===

  // 1. 고급 내비게이션 (5개)
  navbar: {
    category: 'navigation',
    name: '내비게이션 바',
    icon: '🧭',
    html: `
      <nav style="background: #ffffff; border-bottom: 1px solid #e5e7eb; padding: 16px 0;">
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px; display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 24px; font-weight: bold; color: #1f2937;">브랜드</div>
          <div style="display: flex; gap: 32px;">
            <a href="#" style="text-decoration: none; color: #374151; font-weight: 500;">홈</a>
            <a href="#" style="text-decoration: none; color: #374151; font-weight: 500;">서비스</a>
            <a href="#" style="text-decoration: none; color: #374151; font-weight: 500;">소개</a>
            <a href="#" style="text-decoration: none; color: #374151; font-weight: 500;">연락처</a>
          </div>
          <button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">
            시작하기
          </button>
        </div>
      </nav>
    `,
    properties: {
      brandName: '브랜드',
      backgroundColor: '#ffffff',
      textColor: '#374151',
      buttonColor: '#3b82f6',
      menuItems: ['홈', '서비스', '소개', '연락처']
    }
  },

  breadcrumb: {
    category: 'navigation',
    name: '브레드크럼',
    icon: '🍞',
    html: `
      <nav style="padding: 16px 0;">
        <ol style="display: flex; align-items: center; gap: 8px; margin: 0; padding: 0; list-style: none;">
          <li><a href="#" style="color: #6b7280; text-decoration: none;">홈</a></li>
          <li style="color: #d1d5db;">›</li>
          <li><a href="#" style="color: #6b7280; text-decoration: none;">카테고리</a></li>
          <li style="color: #d1d5db;">›</li>
          <li style="color: #1f2937; font-weight: 500;">현재 페이지</li>
        </ol>
      </nav>
    `,
    properties: {
      items: ['홈', '카테고리', '현재 페이지'],
      separator: '›',
      textColor: '#6b7280',
      activeColor: '#1f2937'
    }
  },

  sidebar: {
    category: 'navigation',
    name: '사이드바',
    icon: '📋',
    html: `
      <aside style="width: 280px; background: #f9fafb; border-right: 1px solid #e5e7eb; height: 400px; padding: 24px;">
        <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #1f2937;">메뉴</h3>
        <nav>
          <ul style="margin: 0; padding: 0; list-style: none;">
            <li style="margin-bottom: 8px;">
              <a href="#" style="display: block; padding: 12px; border-radius: 6px; text-decoration: none; color: #374151; background: #3b82f6; color: white;">
                📊 대시보드
              </a>
            </li>
            <li style="margin-bottom: 8px;">
              <a href="#" style="display: block; padding: 12px; border-radius: 6px; text-decoration: none; color: #374151; hover:background: #f3f4f6;">
                👥 사용자
              </a>
            </li>
            <li style="margin-bottom: 8px;">
              <a href="#" style="display: block; padding: 12px; border-radius: 6px; text-decoration: none; color: #374151;">
                ⚙️ 설정
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    `,
    properties: {
      width: '280px',
      backgroundColor: '#f9fafb',
      activeColor: '#3b82f6',
      textColor: '#374151',
      menuItems: ['📊 대시보드', '👥 사용자', '⚙️ 설정']
    }
  },

  tabs: {
    category: 'navigation',
    name: '탭 메뉴',
    icon: '📑',
    html: `
      <div style="border-bottom: 1px solid #e5e7eb;">
        <nav style="display: flex; gap: 0; margin-bottom: -1px;">
          <button style="padding: 12px 24px; border: none; background: white; color: #3b82f6; border-bottom: 2px solid #3b82f6; cursor: pointer; font-weight: 500;">
            첫 번째 탭
          </button>
          <button style="padding: 12px 24px; border: none; background: white; color: #6b7280; border-bottom: 2px solid transparent; cursor: pointer;">
            두 번째 탭
          </button>
          <button style="padding: 12px 24px; border: none; background: white; color: #6b7280; border-bottom: 2px solid transparent; cursor: pointer;">
            세 번째 탭
          </button>
        </nav>
      </div>
      <div style="padding: 24px; background: white;">
        <p style="margin: 0; color: #374151;">첫 번째 탭의 내용이 여기에 표시됩니다.</p>
      </div>
    `,
    properties: {
      tabs: ['첫 번째 탭', '두 번째 탭', '세 번째 탭'],
      activeTab: 0,
      activeColor: '#3b82f6',
      inactiveColor: '#6b7280'
    }
  },

  pagination: {
    category: 'navigation',
    name: '페이지네이션',
    icon: '📄',
    html: `
      <nav style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 24px;">
        <button style="padding: 8px 12px; border: 1px solid #d1d5db; background: white; border-radius: 6px; cursor: pointer; color: #6b7280;">
          이전
        </button>
        <button style="padding: 8px 12px; border: 1px solid #3b82f6; background: #3b82f6; color: white; border-radius: 6px; cursor: pointer; font-weight: 500;">
          1
        </button>
        <button style="padding: 8px 12px; border: 1px solid #d1d5db; background: white; border-radius: 6px; cursor: pointer; color: #374151;">
          2
        </button>
        <button style="padding: 8px 12px; border: 1px solid #d1d5db; background: white; border-radius: 6px; cursor: pointer; color: #374151;">
          3
        </button>
        <span style="color: #6b7280;">...</span>
        <button style="padding: 8px 12px; border: 1px solid #d1d5db; background: white; border-radius: 6px; cursor: pointer; color: #374151;">
          10
        </button>
        <button style="padding: 8px 12px; border: 1px solid #d1d5db; background: white; border-radius: 6px; cursor: pointer; color: #374151;">
          다음
        </button>
      </nav>
    `,
    properties: {
      currentPage: 1,
      totalPages: 10,
      activeColor: '#3b82f6',
      borderColor: '#d1d5db'
    }
  },

  // 2. 데이터 표시 (5개)
  datatable: {
    category: 'data-display',
    name: '데이터 테이블',
    icon: '📊',
    html: `
      <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="padding: 20px; border-bottom: 1px solid #e5e7eb;">
          <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #1f2937;">사용자 목록</h3>
        </div>
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead style="background: #f9fafb;">
              <tr>
                <th style="padding: 12px 20px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">이름</th>
                <th style="padding: 12px 20px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">이메일</th>
                <th style="padding: 12px 20px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">역할</th>
                <th style="padding: 12px 20px; text-align: left; font-weight: 600; color: #374151; border-bottom: 1px solid #e5e7eb;">상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6; color: #374151;">홍길동</td>
                <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6; color: #6b7280;">hong@example.com</td>
                <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6; color: #374151;">관리자</td>
                <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6;">
                  <span style="background: #dcfce7; color: #166534; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">활성</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6; color: #374151;">김영희</td>
                <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6; color: #6b7280;">kim@example.com</td>
                <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6; color: #374151;">사용자</td>
                <td style="padding: 12px 20px; border-bottom: 1px solid #f3f4f6;">
                  <span style="background: #fef3c7; color: #92400e; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: 500;">대기</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    properties: {
      title: '사용자 목록',
      columns: ['이름', '이메일', '역할', '상태'],
      data: [
        ['홍길동', 'hong@example.com', '관리자', '활성'],
        ['김영희', 'kim@example.com', '사용자', '대기']
      ],
      headerBackground: '#f9fafb'
    }
  },

  chart: {
    category: 'data-display',
    name: '차트',
    icon: '📈',
    html: `
      <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
        <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1f2937;">월별 매출</h3>
        <div style="height: 200px; background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%); border-radius: 6px; display: flex; align-items: end; padding: 20px; gap: 8px;">
          <div style="background: #3b82f6; width: 40px; height: 60px; border-radius: 4px 4px 0 0; margin-top: auto;"></div>
          <div style="background: #10b981; width: 40px; height: 100px; border-radius: 4px 4px 0 0; margin-top: auto;"></div>
          <div style="background: #f59e0b; width: 40px; height: 80px; border-radius: 4px 4px 0 0; margin-top: auto;"></div>
          <div style="background: #ef4444; width: 40px; height: 120px; border-radius: 4px 4px 0 0; margin-top: auto;"></div>
          <div style="background: #8b5cf6; width: 40px; height: 90px; border-radius: 4px 4px 0 0; margin-top: auto;"></div>
          <div style="background: #06b6d4; width: 40px; height: 140px; border-radius: 4px 4px 0 0; margin-top: auto;"></div>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 12px; color: #6b7280; font-size: 14px;">
          <span>1월</span>
          <span>2월</span>
          <span>3월</span>
          <span>4월</span>
          <span>5월</span>
          <span>6월</span>
        </div>
      </div>
    `,
    properties: {
      title: '월별 매출',
      chartType: 'bar',
      data: [60, 100, 80, 120, 90, 140],
      labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']
    }
  },

  stats_card: {
    category: 'data-display',
    name: '통계 카드',
    icon: '📊',
    html: `
      <div style="background: white; border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
        <div style="display: flex; items: center; gap: 16px;">
          <div style="width: 48px; height: 48px; background: #dbeafe; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
            👥
          </div>
          <div>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">총 사용자</p>
            <p style="margin: 0; font-size: 32px; font-weight: bold; color: #1f2937;">1,234</p>
            <p style="margin: 0; color: #10b981; font-size: 14px; margin-top: 4px;">
              ↗ +12% 전월 대비
            </p>
          </div>
        </div>
      </div>
    `,
    properties: {
      title: '총 사용자',
      value: '1,234',
      icon: '👥',
      iconColor: '#dbeafe',
      change: '+12%',
      changeColor: '#10b981',
      changeDirection: 'up'
    }
  },

  progress: {
    category: 'data-display',
    name: '진행률 표시기',
    icon: '📊',
    html: `
      <div style="padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-weight: 500; color: #374151;">프로젝트 진행도</span>
          <span style="font-weight: 600; color: #1f2937;">75%</span>
        </div>
        <div style="background: #f3f4f6; height: 8px; border-radius: 4px; overflow: hidden;">
          <div style="background: #3b82f6; height: 100%; width: 75%; border-radius: 4px; transition: width 0.3s ease;"></div>
        </div>
        <p style="margin: 8px 0 0 0; color: #6b7280; font-size: 14px;">3개 작업 중 2개 완료</p>
      </div>
    `,
    properties: {
      title: '프로젝트 진행도',
      progress: 75,
      color: '#3b82f6',
      backgroundColor: '#f3f4f6',
      description: '3개 작업 중 2개 완료'
    }
  },

  timeline: {
    category: 'data-display',
    name: '타임라인',
    icon: '⏰',
    html: `
      <div style="padding: 20px;">
        <h3 style="margin: 0 0 24px 0; font-size: 18px; font-weight: 600; color: #1f2937;">프로젝트 타임라인</h3>
        <div style="position: relative; padding-left: 32px;">
          <div style="position: absolute; left: 16px; top: 0; bottom: 0; width: 2px; background: #e5e7eb;"></div>
          
          <div style="position: relative; margin-bottom: 24px;">
            <div style="position: absolute; left: -24px; width: 12px; height: 12px; background: #3b82f6; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #3b82f6;"></div>
            <div>
              <h4 style="margin: 0; font-weight: 600; color: #1f2937;">프로젝트 시작</h4>
              <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">2025-07-01</p>
              <p style="margin: 8px 0 0 0; color: #374151;">프로젝트 킥오프 미팅 및 요구사항 정의</p>
            </div>
          </div>

          <div style="position: relative; margin-bottom: 24px;">
            <div style="position: absolute; left: -24px; width: 12px; height: 12px; background: #10b981; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #10b981;"></div>
            <div>
              <h4 style="margin: 0; font-weight: 600; color: #1f2937;">개발 완료</h4>
              <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">2025-07-15</p>
              <p style="margin: 8px 0 0 0; color: #374151;">핵심 기능 개발 및 테스트 완료</p>
            </div>
          </div>

          <div style="position: relative;">
            <div style="position: absolute; left: -24px; width: 12px; height: 12px; background: #f59e0b; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 0 2px #f59e0b;"></div>
            <div>
              <h4 style="margin: 0; font-weight: 600; color: #1f2937;">배포 예정</h4>
              <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 14px;">2025-07-31</p>
              <p style="margin: 8px 0 0 0; color: #374151;">프로덕션 환경 배포 및 출시</p>
            </div>
          </div>
        </div>
      </div>
    `,
    properties: {
      title: '프로젝트 타임라인',
      events: [
        { title: '프로젝트 시작', date: '2025-07-01', description: '프로젝트 킥오프 미팅 및 요구사항 정의', color: '#3b82f6' },
        { title: '개발 완료', date: '2025-07-15', description: '핵심 기능 개발 및 테스트 완료', color: '#10b981' },
        { title: '배포 예정', date: '2025-07-31', description: '프로덕션 환경 배포 및 출시', color: '#f59e0b' }
      ]
    }
  },

  // 3. 상호작용 요소 (5개)
  modal: {
    category: 'interactive',
    name: '모달',
    icon: '📱',
    html: `
      <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;">
        <div style="background: white; border-radius: 12px; padding: 32px; max-width: 500px; width: 90%; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h3 style="margin: 0; font-size: 20px; font-weight: 600; color: #1f2937;">알림</h3>
            <button style="background: none; border: none; font-size: 24px; cursor: pointer; color: #6b7280;">×</button>
          </div>
          <p style="margin: 0 0 24px 0; color: #374151; line-height: 1.6;">
            이 작업을 계속하시겠습니까? 이 동작은 되돌릴 수 없습니다.
          </p>
          <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <button style="padding: 8px 16px; border: 1px solid #d1d5db; background: white; border-radius: 6px; cursor: pointer; color: #374151;">
              취소
            </button>
            <button style="padding: 8px 16px; border: none; background: #ef4444; color: white; border-radius: 6px; cursor: pointer;">
              확인
            </button>
          </div>
        </div>
      </div>
    `,
    properties: {
      title: '알림',
      message: '이 작업을 계속하시겠습니까? 이 동작은 되돌릴 수 없습니다.',
      confirmText: '확인',
      cancelText: '취소',
      confirmColor: '#ef4444'
    }
  },

  tooltip: {
    category: 'interactive',
    name: '툴팁',
    icon: '💬',
    html: `
      <div style="position: relative; display: inline-block; padding: 20px;">
        <button style="padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer;">
          도움말 버튼
        </button>
        <div style="position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%); background: #1f2937; color: white; padding: 8px 12px; border-radius: 6px; font-size: 14px; white-space: nowrap; margin-bottom: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          이 버튼을 클릭하면 도움말이 표시됩니다
          <div style="position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 6px solid transparent; border-top-color: #1f2937;"></div>
        </div>
      </div>
    `,
    properties: {
      text: '이 버튼을 클릭하면 도움말이 표시됩니다',
      position: 'top',
      backgroundColor: '#1f2937',
      textColor: '#ffffff'
    }
  },

  dropdown: {
    category: 'interactive',
    name: '드롭다운',
    icon: '📋',
    html: `
      <div style="position: relative; display: inline-block;">
        <button style="padding: 8px 16px; background: white; border: 1px solid #d1d5db; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 8px; color: #374151;">
          선택하기
          <span style="font-size: 12px;">▼</span>
        </button>
        <div style="position: absolute; top: 100%; left: 0; background: white; border: 1px solid #d1d5db; border-radius: 6px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); min-width: 200px; z-index: 10; margin-top: 4px;">
          <a href="#" style="display: block; padding: 12px 16px; text-decoration: none; color: #374151; border-bottom: 1px solid #f3f4f6; transition: background 0.2s;">
            첫 번째 옵션
          </a>
          <a href="#" style="display: block; padding: 12px 16px; text-decoration: none; color: #374151; border-bottom: 1px solid #f3f4f6; transition: background 0.2s;">
            두 번째 옵션
          </a>
          <a href="#" style="display: block; padding: 12px 16px; text-decoration: none; color: #374151; transition: background 0.2s;">
            세 번째 옵션
          </a>
        </div>
      </div>
    `,
    properties: {
      buttonText: '선택하기',
      options: ['첫 번째 옵션', '두 번째 옵션', '세 번째 옵션'],
      borderColor: '#d1d5db',
      textColor: '#374151'
    }
  },

  slider: {
    category: 'interactive',
    name: '슬라이더',
    icon: '🎚️',
    html: `
      <div style="padding: 20px;">
        <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 12px;">
          볼륨: <span style="font-weight: 600;">75</span>
        </label>
        <div style="position: relative;">
          <input type="range" min="0" max="100" value="75" style="width: 100%; height: 6px; border-radius: 3px; background: #e5e7eb; outline: none; -webkit-appearance: none;">
          <style>
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #3b82f6;
              cursor: pointer;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            input[type="range"]::-moz-range-thumb {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: #3b82f6;
              cursor: pointer;
              border: none;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
          </style>
        </div>
        <div style="display: flex; justify-content: space-between; margin-top: 8px; color: #6b7280; font-size: 14px;">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
      </div>
    `,
    properties: {
      label: '볼륨',
      min: 0,
      max: 100,
      value: 75,
      color: '#3b82f6',
      backgroundColor: '#e5e7eb'
    }
  },

  accordion: {
    category: 'interactive',
    name: '아코디언',
    icon: '📂',
    html: `
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <div style="border-bottom: 1px solid #e5e7eb;">
          <button style="width: 100%; padding: 16px 20px; background: white; border: none; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 500; color: #1f2937;">
            첫 번째 섹션
            <span style="font-size: 14px; color: #6b7280;">▼</span>
          </button>
          <div style="padding: 16px 20px; background: #f9fafb; color: #374151; line-height: 1.6;">
            첫 번째 섹션의 내용입니다. 여기에 상세한 정보나 설명을 추가할 수 있습니다.
          </div>
        </div>
        
        <div style="border-bottom: 1px solid #e5e7eb;">
          <button style="width: 100%; padding: 16px 20px; background: white; border: none; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 500; color: #1f2937;">
            두 번째 섹션
            <span style="font-size: 14px; color: #6b7280;">▶</span>
          </button>
        </div>
        
        <div>
          <button style="width: 100%; padding: 16px 20px; background: white; border: none; text-align: left; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-weight: 500; color: #1f2937;">
            세 번째 섹션
            <span style="font-size: 14px; color: #6b7280;">▶</span>
          </button>
        </div>
      </div>
    `,
    properties: {
      sections: [
        { title: '첫 번째 섹션', content: '첫 번째 섹션의 내용입니다.', open: true },
        { title: '두 번째 섹션', content: '두 번째 섹션의 내용입니다.', open: false },
        { title: '세 번째 섹션', content: '세 번째 섹션의 내용입니다.', open: false }
      ],
      borderColor: '#e5e7eb',
      backgroundColor: '#f9fafb'
    }
  },

  // 4. 폼 & 입력 (5개)
  datepicker: {
    category: 'forms',
    name: '날짜 선택기',
    icon: '📅',
    html: `
      <div style="padding: 16px;">
        <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 8px;">
          날짜 선택
        </label>
        <input type="date" value="2025-07-31" style="padding: 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 16px; width: 200px; color: #374151;">
      </div>
    `,
    properties: {
      label: '날짜 선택',
      value: '2025-07-31',
      format: 'YYYY-MM-DD',
      placeholder: '날짜를 선택하세요'
    }
  },

  fileupload: {
    category: 'forms',
    name: '파일 업로드',
    icon: '📎',
    html: `
      <div style="padding: 20px;">
        <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 12px;">
          파일 업로드
        </label>
        <div style="border: 2px dashed #d1d5db; border-radius: 8px; padding: 40px; text-align: center; background: #fafafa; cursor: pointer; transition: all 0.3s;">
          <div style="font-size: 48px; color: #9ca3af; margin-bottom: 12px;">📁</div>
          <p style="margin: 0 0 8px 0; font-weight: 500; color: #374151;">파일을 드래그하거나 클릭하여 업로드</p>
          <p style="margin: 0; color: #6b7280; font-size: 14px;">PNG, JPG, PDF 파일 지원 (최대 10MB)</p>
          <input type="file" multiple style="position: absolute; opacity: 0; width: 100%; height: 100%; cursor: pointer;">
        </div>
      </div>
    `,
    properties: {
      label: '파일 업로드',
      accept: '.png,.jpg,.jpeg,.pdf',
      multiple: true,
      maxSize: '10MB',
      dragText: '파일을 드래그하거나 클릭하여 업로드'
    }
  },

  richeditor: {
    category: 'forms',
    name: '리치 텍스트 에디터',
    icon: '📝',
    html: `
      <div style="border: 1px solid #d1d5db; border-radius: 8px; overflow: hidden;">
        <div style="background: #f9fafb; border-bottom: 1px solid #e5e7eb; padding: 12px; display: flex; gap: 8px;">
          <button style="padding: 6px 8px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer; font-weight: bold;">B</button>
          <button style="padding: 6px 8px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer; font-style: italic;">I</button>
          <button style="padding: 6px 8px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer; text-decoration: underline;">U</button>
          <div style="width: 1px; background: #e5e7eb; margin: 0 4px;"></div>
          <button style="padding: 6px 8px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer;">📝</button>
          <button style="padding: 6px 8px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer;">🔗</button>
          <button style="padding: 6px 8px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer;">📷</button>
        </div>
        <div contenteditable="true" style="padding: 16px; min-height: 200px; line-height: 1.6; color: #374151; outline: none;">
          <p>여기에 텍스트를 입력하세요. <strong>굵게</strong>, <em>기울임</em>, <u>밑줄</u> 등 다양한 서식을 적용할 수 있습니다.</p>
          <p>목록도 만들 수 있습니다:</p>
          <ul>
            <li>첫 번째 항목</li>
            <li>두 번째 항목</li>
          </ul>
        </div>
      </div>
    `,
    properties: {
      placeholder: '내용을 입력하세요...',
      toolbar: ['bold', 'italic', 'underline', 'link', 'image', 'list'],
      minHeight: '200px'
    }
  },

  checkbox_group: {
    category: 'forms',
    name: '체크박스 그룹',
    icon: '☑️',
    html: `
      <div style="padding: 16px;">
        <fieldset style="border: none; margin: 0; padding: 0;">
          <legend style="font-weight: 500; color: #374151; margin-bottom: 12px;">관심 분야를 선택하세요</legend>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" checked style="width: 16px; height: 16px; accent-color: #3b82f6;">
              <span style="color: #374151;">웹 개발</span>
            </label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" style="width: 16px; height: 16px; accent-color: #3b82f6;">
              <span style="color: #374151;">모바일 앱</span>
            </label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" style="width: 16px; height: 16px; accent-color: #3b82f6;">
              <span style="color: #374151;">데이터 분석</span>
            </label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" checked style="width: 16px; height: 16px; accent-color: #3b82f6;">
              <span style="color: #374151;">UI/UX 디자인</span>
            </label>
          </div>
        </fieldset>
      </div>
    `,
    properties: {
      legend: '관심 분야를 선택하세요',
      options: [
        { label: '웹 개발', value: 'web', checked: true },
        { label: '모바일 앱', value: 'mobile', checked: false },
        { label: '데이터 분석', value: 'data', checked: false },
        { label: 'UI/UX 디자인', value: 'design', checked: true }
      ],
      accentColor: '#3b82f6'
    }
  },

  toggle_switch: {
    category: 'forms',
    name: '토글 스위치',
    icon: '🔘',
    html: `
      <div style="padding: 16px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <label style="position: relative; display: inline-block; width: 44px; height: 24px;">
            <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
            <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #3b82f6; border-radius: 24px; transition: 0.4s;">
              <span style="position: absolute; content: ''; height: 20px; width: 20px; left: 22px; bottom: 2px; background: white; border-radius: 50%; transition: 0.4s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></span>
            </span>
          </label>
          <span style="font-weight: 500; color: #374151;">알림 받기</span>
        </div>
        
        <div style="display: flex; align-items: center; gap: 12px; margin-top: 16px;">
          <label style="position: relative; display: inline-block; width: 44px; height: 24px;">
            <input type="checkbox" style="opacity: 0; width: 0; height: 0;">
            <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background: #d1d5db; border-radius: 24px; transition: 0.4s;">
              <span style="position: absolute; content: ''; height: 20px; width: 20px; left: 2px; bottom: 2px; background: white; border-radius: 50%; transition: 0.4s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"></span>
            </span>
          </label>
          <span style="font-weight: 500; color: #374151;">다크 모드</span>
        </div>
      </div>
    `,
    properties: {
      switches: [
        { label: '알림 받기', checked: true },
        { label: '다크 모드', checked: false }
      ],
      activeColor: '#3b82f6',
      inactiveColor: '#d1d5db'
    }
  },

  // 5. Social & Community Components (5개)
  comment_system: {
    name: '댓글 시스템',
    category: 'social',
    icon: '💬',
    html: `<div class="comment-system">
        <div class="comment-form">
            <textarea placeholder="댓글을 작성하세요..." rows="3" style="width: 100%; padding: 12px; border: 2px solid #e5e7eb; border-radius: 8px; resize: vertical;"></textarea>
            <button class="comment-submit" style="background: #3b82f6; color: white; padding: 8px 16px; border: none; border-radius: 6px; margin-top: 8px; cursor: pointer;">댓글 달기</button>
        </div>
        <div class="comment-list" style="margin-top: 20px;">
            <div class="comment-item" style="display: flex; gap: 12px; padding: 16px 0; border-bottom: 1px solid #f3f4f6;">
                <div class="comment-avatar" style="width: 40px; height: 40px; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center;">👤</div>
                <div class="comment-content" style="flex: 1;">
                    <div class="comment-author" style="font-weight: 600; margin-bottom: 4px;">김사용자</div>
                    <div class="comment-text" style="margin-bottom: 8px; line-height: 1.5;">정말 유용한 정보네요! 감사합니다.</div>
                    <div class="comment-actions" style="display: flex; gap: 16px; align-items: center; font-size: 14px; color: #6b7280;">
                        <span class="comment-time">2시간 전</span>
                        <button class="comment-reply" style="background: none; border: none; color: #6b7280; cursor: pointer;">답글</button>
                        <button class="comment-like" style="background: none; border: none; color: #6b7280; cursor: pointer;">👍 12</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    properties: {
      placeholder: '댓글을 작성하세요...',
      buttonText: '댓글 달기',
      showAvatar: true,
      allowReplies: true
    }
  },
  
  social_share: {
    name: '소셜 공유',
    category: 'social',
    icon: '📤',
    html: `<div class="like-share-widget" style="background: white; border-radius: 12px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div class="engagement-stats" style="display: flex; gap: 20px; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #f3f4f6;">
            <span class="stat-item" style="color: #6b7280; font-size: 14px;">👍 1.2K</span>
            <span class="stat-item" style="color: #6b7280; font-size: 14px;">💬 89</span>
            <span class="stat-item" style="color: #6b7280; font-size: 14px;">📊 2.5K views</span>
        </div>
        <div class="action-buttons" style="display: flex; gap: 8px;">
            <button class="action-btn like-btn" style="display: flex; align-items: center; gap: 6px; padding: 8px 16px; border: 1px solid #e5e7eb; background: white; border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                <span class="icon" style="font-size: 16px;">👍</span>
                <span>좋아요</span>
            </button>
            <button class="action-btn comment-btn" style="display: flex; align-items: center; gap: 6px; padding: 8px 16px; border: 1px solid #e5e7eb; background: white; border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                <span class="icon" style="font-size: 16px;">💬</span>
                <span>댓글</span>
            </button>
            <button class="action-btn share-btn" style="display: flex; align-items: center; gap: 6px; padding: 8px 16px; border: 1px solid #e5e7eb; background: white; border-radius: 8px; cursor: pointer; transition: all 0.2s;">
                <span class="icon" style="font-size: 16px;">📤</span>
                <span>공유</span>
            </button>
        </div>
    </div>`,
    properties: {
      likes: 1200,
      comments: 89,
      views: 2500,
      showStats: true
    }
  },
  
  user_profile: {
    name: '사용자 프로필',
    category: 'social',
    icon: '👤',
    html: `<div class="user-profile-card" style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 300px;">
        <div class="profile-header" style="display: flex; align-items: center; gap: 16px; margin-bottom: 20px;">
            <div class="profile-avatar" style="position: relative;">
                <img src="https://via.placeholder.com/80" alt="프로필" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover;" />
                <div class="online-badge" style="position: absolute; bottom: 4px; right: 4px; width: 16px; height: 16px; background: #10b981; border: 3px solid white; border-radius: 50%;"></div>
            </div>
            <div class="profile-info">
                <h3 class="profile-name" style="margin: 0 0 4px 0; font-size: 18px; font-weight: 600;">김개발자</h3>
                <p class="profile-title" style="margin: 0 0 4px 0; color: #6b7280; font-size: 14px;">Full Stack Developer</p>
                <p class="profile-location" style="margin: 0; color: #6b7280; font-size: 12px;">📍 Seoul, Korea</p>
            </div>
        </div>
        <div class="profile-stats" style="display: flex; justify-content: space-around; margin-bottom: 20px;">
            <div class="stat" style="text-align: center;">
                <div class="stat-number" style="font-size: 18px; font-weight: 600; color: #111827;">1.2K</div>
                <div class="stat-label" style="font-size: 12px; color: #6b7280;">팔로워</div>
            </div>
            <div class="stat" style="text-align: center;">
                <div class="stat-number" style="font-size: 18px; font-weight: 600; color: #111827;">543</div>
                <div class="stat-label" style="font-size: 12px; color: #6b7280;">팔로잉</div>
            </div>
            <div class="stat" style="text-align: center;">
                <div class="stat-number" style="font-size: 18px; font-weight: 600; color: #111827;">89</div>
                <div class="stat-label" style="font-size: 12px; color: #6b7280;">게시물</div>
            </div>
        </div>
        <button class="follow-btn" style="width: 100%; padding: 12px; background: #3b82f6; color: white; border: none; border-radius: 8px; font-weight: 600; cursor: pointer;">팔로우</button>
    </div>`,
    properties: {
      name: '김개발자',
      title: 'Full Stack Developer',
      location: 'Seoul, Korea',
      followers: 1200,
      following: 543,
      posts: 89,
      isOnline: true
    }
  },
  
  chat_widget: {
    name: '채팅 위젯',
    category: 'social',
    icon: '💬',
    html: `<div class="chat-widget" style="width: 320px; background: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); overflow: hidden;">
        <div class="chat-header" style="background: #3b82f6; color: white; padding: 16px; display: flex; align-items: center; gap: 12px;">
            <div class="chat-avatar" style="width: 32px; height: 32px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center;">💬</div>
            <div class="chat-info" style="flex: 1;">
                <div class="chat-title" style="font-weight: 600; font-size: 14px;">고객지원</div>
                <div class="chat-status" style="font-size: 12px; opacity: 0.9;">온라인</div>
            </div>
            <button class="chat-minimize" style="background: none; border: none; color: white; cursor: pointer; font-size: 18px;">−</button>
        </div>
        <div class="chat-messages" style="height: 300px; overflow-y: auto; padding: 16px;">
            <div class="message bot-message" style="display: flex; align-items: flex-end; gap: 8px; margin-bottom: 16px;">
                <div class="message-avatar" style="width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px;">🤖</div>
                <div class="message-text" style="background: #f3f4f6; padding: 8px 12px; border-radius: 12px; max-width: 200px;">안녕하세요! 무엇을 도와드릴까요?</div>
            </div>
            <div class="message user-message" style="display: flex; align-items: flex-end; gap: 8px; margin-bottom: 16px; flex-direction: row-reverse;">
                <div class="message-avatar" style="width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px;">👤</div>
                <div class="message-text" style="background: #3b82f6; color: white; padding: 8px 12px; border-radius: 12px; max-width: 200px;">제품 문의가 있습니다.</div>
            </div>
        </div>
        <div class="chat-input" style="display: flex; padding: 16px; border-top: 1px solid #e5e7eb;">
            <input type="text" placeholder="메시지를 입력하세요..." style="flex: 1; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 20px; outline: none;" />
            <button class="send-btn" style="background: #3b82f6; color: white; border: none; border-radius: 50%; width: 36px; height: 36px; margin-left: 8px; cursor: pointer;">➤</button>
        </div>
    </div>`,
    properties: {
      title: '고객지원',
      status: '온라인',
      placeholder: '메시지를 입력하세요...',
      initialMessage: '안녕하세요! 무엇을 도와드릴까요?'
    }
  },
  
  rating: {
    name: '평점 & 리뷰',
    category: 'social',
    icon: '⭐',
    html: `<div class="review-rating-widget" style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <div class="rating-summary" style="display: flex; gap: 40px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid #f3f4f6;">
            <div class="overall-rating" style="text-align: center;">
                <div class="rating-score" style="font-size: 36px; font-weight: 700; color: #111827;">4.7</div>
                <div class="stars" style="font-size: 20px; margin: 8px 0;">⭐⭐⭐⭐⭐</div>
                <div class="rating-count" style="color: #6b7280; font-size: 14px;">1,234개 리뷰</div>
            </div>
            <div class="rating-breakdown" style="flex: 1;">
                <div class="rating-bar" style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                    <span style="font-size: 14px;">5⭐</span>
                    <div class="bar" style="flex: 1; height: 8px; background: #f3f4f6; border-radius: 4px; overflow: hidden;">
                        <div class="fill" style="height: 100%; background: #fbbf24; width: 75%;"></div>
                    </div>
                    <span style="font-size: 14px;">75%</span>
                </div>
                <div class="rating-bar" style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                    <span style="font-size: 14px;">4⭐</span>
                    <div class="bar" style="flex: 1; height: 8px; background: #f3f4f6; border-radius: 4px; overflow: hidden;">
                        <div class="fill" style="height: 100%; background: #fbbf24; width: 15%;"></div>
                    </div>
                    <span style="font-size: 14px;">15%</span>
                </div>
            </div>
        </div>
        <div class="review-item" style="border-bottom: 1px solid #f3f4f6; padding-bottom: 16px; margin-bottom: 16px;">
            <div class="reviewer-info" style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <div class="reviewer-avatar" style="width: 40px; height: 40px; background: #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center;">👤</div>
                <div class="reviewer-details" style="flex: 1;">
                    <div class="reviewer-name" style="font-weight: 600; margin-bottom: 4px;">김리뷰어</div>
                    <div class="review-stars" style="color: #fbbf24;">⭐⭐⭐⭐⭐</div>
                </div>
                <div class="review-date" style="color: #6b7280; font-size: 14px;">2일 전</div>
            </div>
            <div class="review-text" style="line-height: 1.6; margin-bottom: 12px;">정말 만족스러운 제품입니다. 품질도 좋고 배송도 빨라요!</div>
            <div class="review-actions">
                <button class="helpful-btn" style="background: none; border: 1px solid #e5e7eb; padding: 6px 12px; border-radius: 6px; color: #6b7280; cursor: pointer;">👍 도움됨 (12)</button>
            </div>
        </div>
    </div>`,
    properties: {
      overallRating: 4.7,
      totalReviews: 1234,
      ratingBreakdown: { 5: 75, 4: 15, 3: 5, 2: 3, 1: 2 },
      showReviews: true
    }
  },

  // 6. E-commerce Components (5개)
  product_card: {
    name: '상품 카드',
    category: 'ecommerce',
    icon: '🛍️',
    html: `<div class="product-card" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 280px; transition: transform 0.3s;">
        <div class="product-image" style="position: relative; overflow: hidden;">
            <img src="https://via.placeholder.com/280x200" alt="상품 이미지" style="width: 100%; height: 200px; object-fit: cover;" />
            <div class="product-badge" style="position: absolute; top: 12px; left: 12px; background: #ef4444; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">30% OFF</div>
            <button class="wishlist-btn" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.9); border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">❤️</button>
        </div>
        <div class="product-info" style="padding: 16px;">
            <h3 class="product-title" style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1f2937;">프리미엄 노트북</h3>
            <p class="product-description" style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px; line-height: 1.5;">고성능 프로세서와 뛰어난 디스플레이를 갖춘 노트북</p>
            <div class="product-rating" style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                <div class="stars" style="color: #fbbf24;">⭐⭐⭐⭐⭐</div>
                <span style="color: #6b7280; font-size: 14px;">(4.8)</span>
                <span style="color: #6b7280; font-size: 14px;">• 124 리뷰</span>
            </div>
            <div class="product-price" style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                <span class="current-price" style="font-size: 20px; font-weight: 700; color: #1f2937;">₩1,299,000</span>
                <span class="original-price" style="font-size: 16px; color: #6b7280; text-decoration: line-through;">₩1,799,000</span>
            </div>
            <button class="add-to-cart" style="width: 100%; background: #3b82f6; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: background 0.3s;">장바구니 담기</button>
        </div>
    </div>`,
    properties: {
      title: '프리미엄 노트북',
      description: '고성능 프로세서와 뛰어난 디스플레이를 갖춘 노트북',
      currentPrice: 1299000,
      originalPrice: 1799000,
      rating: 4.8,
      reviewCount: 124,
      badge: '30% OFF',
      inStock: true
    }
  },
  
  cart_widget: {
    name: '장바구니 위젯',
    category: 'ecommerce',
    icon: '🛒',
    html: `<div class="cart-widget" style="background: white; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); width: 350px; max-height: 500px; overflow: hidden;">
        <div class="cart-header" style="background: #1f2937; color: white; padding: 16px; display: flex; align-items: center; justify-content: space-between;">
            <h3 style="margin: 0; font-size: 18px; font-weight: 600;">장바구니 (2)</h3>
            <button style="background: none; border: none; color: white; cursor: pointer; font-size: 20px;">×</button>
        </div>
        <div class="cart-items" style="max-height: 300px; overflow-y: auto;">
            <div class="cart-item" style="display: flex; align-items: center; gap: 12px; padding: 16px; border-bottom: 1px solid #f3f4f6;">
                <img src="https://via.placeholder.com/60" alt="상품" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;" />
                <div class="item-info" style="flex: 1;">
                    <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #1f2937;">프리미엄 노트북</h4>
                    <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px;">색상: 스페이스 그레이</p>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <button style="width: 24px; height: 24px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer;">−</button>
                        <span style="font-weight: 600;">1</span>
                        <button style="width: 24px; height: 24px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer;">+</button>
                    </div>
                </div>
                <div class="item-price" style="text-align: right;">
                    <div style="font-weight: 600; color: #1f2937;">₩1,299,000</div>
                    <button style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 12px; margin-top: 4px;">삭제</button>
                </div>
            </div>
            <div class="cart-item" style="display: flex; align-items: center; gap: 12px; padding: 16px; border-bottom: 1px solid #f3f4f6;">
                <img src="https://via.placeholder.com/60" alt="상품" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;" />
                <div class="item-info" style="flex: 1;">
                    <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #1f2937;">무선 마우스</h4>
                    <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px;">색상: 화이트</p>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <button style="width: 24px; height: 24px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer;">−</button>
                        <span style="font-weight: 600;">2</span>
                        <button style="width: 24px; height: 24px; border: 1px solid #d1d5db; background: white; border-radius: 4px; cursor: pointer;">+</button>
                    </div>
                </div>
                <div class="item-price" style="text-align: right;">
                    <div style="font-weight: 600; color: #1f2937;">₩79,000</div>
                    <button style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 12px; margin-top: 4px;">삭제</button>
                </div>
            </div>
        </div>
        <div class="cart-summary" style="padding: 16px; border-top: 2px solid #f3f4f6;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #6b7280;">소계</span>
                <span style="font-weight: 600;">₩1,378,000</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #6b7280;">배송비</span>
                <span style="font-weight: 600;">무료</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 16px; padding-top: 8px; border-top: 1px solid #e5e7eb;">
                <span style="font-size: 18px; font-weight: 700;">총 합계</span>
                <span style="font-size: 18px; font-weight: 700; color: #3b82f6;">₩1,378,000</span>
            </div>
            <button style="width: 100%; background: #3b82f6; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer;">주문하기</button>
        </div>
    </div>`,
    properties: {
      itemCount: 2,
      subtotal: 1378000,
      shipping: 0,
      total: 1378000,
      showShipping: true
    }
  },
  
  payment_form: {
    name: '결제 폼',
    category: 'ecommerce',
    icon: '💳',
    html: `<div class="payment-form" style="background: white; border-radius: 12px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 500px;">
        <h3 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600; color: #1f2937;">결제 정보</h3>
        
        <div class="payment-methods" style="display: flex; gap: 12px; margin-bottom: 24px;">
            <label style="flex: 1; border: 2px solid #3b82f6; border-radius: 8px; padding: 12px; cursor: pointer; text-align: center; background: #eff6ff;">
                <input type="radio" name="payment" value="card" checked style="display: none;" />
                <div style="font-size: 24px; margin-bottom: 4px;">💳</div>
                <div style="font-size: 14px; font-weight: 600;">카드</div>
            </label>
            <label style="flex: 1; border: 2px solid #e5e7eb; border-radius: 8px; padding: 12px; cursor: pointer; text-align: center;">
                <input type="radio" name="payment" value="bank" style="display: none;" />
                <div style="font-size: 24px; margin-bottom: 4px;">🏦</div>
                <div style="font-size: 14px; font-weight: 600;">계좌이체</div>
            </label>
            <label style="flex: 1; border: 2px solid #e5e7eb; border-radius: 8px; padding: 12px; cursor: pointer; text-align: center;">
                <input type="radio" name="payment" value="kakao" style="display: none;" />
                <div style="font-size: 24px; margin-bottom: 4px;">💛</div>
                <div style="font-size: 14px; font-weight: 600;">카카오페이</div>
            </label>
        </div>
        
        <div class="card-form">
            <div style="margin-bottom: 16px;">
                <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 8px;">카드 번호</label>
                <input type="text" placeholder="1234 5678 9012 3456" style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 16px;" />
            </div>
            
            <div style="display: flex; gap: 12px; margin-bottom: 16px;">
                <div style="flex: 1;">
                    <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 8px;">만료일</label>
                    <input type="text" placeholder="MM/YY" style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 6px;" />
                </div>
                <div style="flex: 1;">
                    <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 8px;">CVC</label>
                    <input type="text" placeholder="123" style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 6px;" />
                </div>
            </div>
            
            <div style="margin-bottom: 24px;">
                <label style="display: block; font-weight: 500; color: #374151; margin-bottom: 8px;">카드 소유자명</label>
                <input type="text" placeholder="홍길동" style="width: 100%; padding: 12px; border: 1px solid #d1d5db; border-radius: 6px;" />
            </div>
        </div>
        
        <div class="order-summary" style="background: #f9fafb; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #6b7280;">상품 금액</span>
                <span>₩1,378,000</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="color: #6b7280;">배송비</span>
                <span>무료</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-top: 8px; border-top: 1px solid #e5e7eb;">
                <span style="font-size: 18px; font-weight: 700;">총 결제금액</span>
                <span style="font-size: 18px; font-weight: 700; color: #3b82f6;">₩1,378,000</span>
            </div>
        </div>
        
        <button style="width: 100%; background: #3b82f6; color: white; border: none; padding: 16px; border-radius: 8px; font-size: 18px; font-weight: 600; cursor: pointer;">₩1,378,000 결제하기</button>
    </div>`,
    properties: {
      amount: 1378000,
      currency: 'KRW',
      methods: ['card', 'bank', 'kakao'],
      showSummary: true
    }
  },
  
  wishlist: {
    name: '위시리스트',
    category: 'ecommerce',
    icon: '❤️',
    html: `<div class="wishlist-widget" style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 400px;">
        <div class="wishlist-header" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
            <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #1f2937;">위시리스트 (3)</h3>
            <button style="background: none; border: none; color: #6b7280; cursor: pointer;">전체 삭제</button>
        </div>
        
        <div class="wishlist-items">
            <div class="wishlist-item" style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                <img src="https://via.placeholder.com/60" alt="상품" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;" />
                <div class="item-info" style="flex: 1;">
                    <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #1f2937;">프리미엄 노트북</h4>
                    <div style="color: #6b7280; font-size: 12px; margin-bottom: 4px;">⭐ 4.8 (124 리뷰)</div>
                    <div style="font-weight: 600; color: #3b82f6;">₩1,299,000</div>
                </div>
                <div class="item-actions" style="display: flex; flex-direction: column; gap: 4px;">
                    <button style="background: #3b82f6; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer;">담기</button>
                    <button style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 12px;">삭제</button>
                </div>
            </div>
            
            <div class="wishlist-item" style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid #f3f4f6;">
                <img src="https://via.placeholder.com/60" alt="상품" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;" />
                <div class="item-info" style="flex: 1;">
                    <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #1f2937;">무선 헤드폰</h4>
                    <div style="color: #6b7280; font-size: 12px; margin-bottom: 4px;">⭐ 4.6 (89 리뷰)</div>
                    <div style="font-weight: 600; color: #3b82f6;">₹299,000</div>
                </div>
                <div class="item-actions" style="display: flex; flex-direction: column; gap: 4px;">
                    <button style="background: #3b82f6; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer;">담기</button>
                    <button style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 12px;">삭제</button>
                </div>
            </div>
            
            <div class="wishlist-item" style="display: flex; align-items: center; gap: 12px; padding: 12px 0;">
                <img src="https://via.placeholder.com/60" alt="상품" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;" />
                <div class="item-info" style="flex: 1;">
                    <h4 style="margin: 0 0 4px 0; font-size: 14px; font-weight: 600; color: #1f2937;">스마트 워치</h4>
                    <div style="color: #6b7280; font-size: 12px; margin-bottom: 4px;">⭐ 4.4 (67 리뷰)</div>
                    <div style="font-weight: 600; color: #3b82f6;">₩199,000</div>
                </div>
                <div class="item-actions" style="display: flex; flex-direction: column; gap: 4px;">
                    <button style="background: #3b82f6; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer;">담기</button>
                    <button style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 12px;">삭제</button>
                </div>
            </div>
        </div>
    </div>`,
    properties: {
      itemCount: 3,
      showActions: true,
      allowRemove: true
    }
  },
  
  product_compare: {
    name: '상품 비교',
    category: 'ecommerce',
    icon: '⚖️',
    html: `<div class="product-compare" style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow-x: auto;">
        <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1f2937;">상품 비교</h3>
        
        <table style="width: 100%; border-collapse: collapse; min-width: 600px;">
            <thead>
                <tr>
                    <th style="text-align: left; padding: 12px; color: #6b7280; font-weight: 500; width: 150px;"></th>
                    <th style="text-align: center; padding: 12px;">
                        <div style="text-align: center;">
                            <img src="https://via.placeholder.com/100" alt="상품1" style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover; margin-bottom: 8px;" />
                            <div style="font-weight: 600; color: #1f2937;">프리미엄 노트북</div>
                            <div style="color: #3b82f6; font-weight: 600; margin-top: 4px;">₩1,299,000</div>
                        </div>
                    </th>
                    <th style="text-align: center; padding: 12px;">
                        <div style="text-align: center;">
                            <img src="https://via.placeholder.com/100" alt="상품2" style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover; margin-bottom: 8px;" />
                            <div style="font-weight: 600; color: #1f2937;">스탠다드 노트북</div>
                            <div style="color: #3b82f6; font-weight: 600; margin-top: 4px;">₩899,000</div>
                        </div>
                    </th>
                    <th style="text-align: center; padding: 12px;">
                        <div style="text-align: center;">
                            <img src="https://via.placeholder.com/100" alt="상품3" style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover; margin-bottom: 8px;" />
                            <div style="font-weight: 600; color: #1f2937;">베이직 노트북</div>
                            <div style="color: #3b82f6; font-weight: 600; margin-top: 4px;">₩599,000</div>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px; font-weight: 500; color: #374151;">평점</td>
                    <td style="padding: 12px; text-align: center;">⭐ 4.8 (124)</td>
                    <td style="padding: 12px; text-align: center;">⭐ 4.5 (89)</td>
                    <td style="padding: 12px; text-align: center;">⭐ 4.2 (56)</td>
                </tr>
                <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px; font-weight: 500; color: #374151;">화면 크기</td>
                    <td style="padding: 12px; text-align: center;">15.6인치</td>
                    <td style="padding: 12px; text-align: center;">14인치</td>
                    <td style="padding: 12px; text-align: center;">13.3인치</td>
                </tr>
                <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px; font-weight: 500; color: #374151;">메모리</td>
                    <td style="padding: 12px; text-align: center; color: #10b981; font-weight: 600;">16GB</td>
                    <td style="padding: 12px; text-align: center;">8GB</td>
                    <td style="padding: 12px; text-align: center;">4GB</td>
                </tr>
                <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px; font-weight: 500; color: #374151;">저장용량</td>
                    <td style="padding: 12px; text-align: center; color: #10b981; font-weight: 600;">512GB SSD</td>
                    <td style="padding: 12px; text-align: center;">256GB SSD</td>
                    <td style="padding: 12px; text-align: center;">128GB SSD</td>
                </tr>
                <tr style="border-top: 1px solid #f3f4f6;">
                    <td style="padding: 12px; font-weight: 500; color: #374151;"></td>
                    <td style="padding: 12px; text-align: center;">
                        <button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%;">선택</button>
                    </td>
                    <td style="padding: 12px; text-align: center;">
                        <button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%;">선택</button>
                    </td>
                    <td style="padding: 12px; text-align: center;">
                        <button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%;">선택</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>`,
    properties: {
      products: 3,
      features: ['평점', '화면 크기', '메모리', '저장용량'],
      showActions: true
    }
  },

  // 7. Media & Content Components (5개)
  gallery: {
    name: '이미지 갤러리',
    category: 'media',
    icon: '🖼️',
    html: `<div class="image-gallery" style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <h3 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #1f2937;">이미지 갤러리</h3>
        
        <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
            <div class="gallery-item" style="position: relative; aspect-ratio: 1; border-radius: 8px; overflow: hidden; cursor: pointer;">
                <img src="https://via.placeholder.com/200" alt="이미지 1" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" />
                <div class="gallery-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; color: white;">
                    <span style="font-size: 24px;">🔍</span>
                </div>
            </div>
            
            <div class="gallery-item" style="position: relative; aspect-ratio: 1; border-radius: 8px; overflow: hidden; cursor: pointer;">
                <img src="https://via.placeholder.com/200" alt="이미지 2" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" />
                <div class="gallery-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; color: white;">
                    <span style="font-size: 24px;">🔍</span>
                </div>
            </div>
            
            <div class="gallery-item" style="position: relative; aspect-ratio: 1; border-radius: 8px; overflow: hidden; cursor: pointer;">
                <img src="https://via.placeholder.com/200" alt="이미지 3" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" />
                <div class="gallery-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; color: white;">
                    <span style="font-size: 24px;">🔍</span>
                </div>
            </div>
            
            <div class="gallery-item" style="position: relative; aspect-ratio: 1; border-radius: 8px; overflow: hidden; cursor: pointer;">
                <img src="https://via.placeholder.com/200" alt="이미지 4" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" />
                <div class="gallery-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; color: white;">
                    <span style="font-size: 24px;">🔍</span>
                </div>
            </div>
            
            <div class="gallery-item" style="position: relative; aspect-ratio: 1; border-radius: 8px; overflow: hidden; cursor: pointer;">
                <img src="https://via.placeholder.com/200" alt="이미지 5" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" />
                <div class="gallery-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; color: white;">
                    <span style="font-size: 24px;">🔍</span>
                </div>
            </div>
            
            <div class="gallery-item" style="position: relative; aspect-ratio: 1; border-radius: 8px; overflow: hidden; cursor: pointer;">
                <img src="https://via.placeholder.com/200" alt="이미지 6" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" />
                <div class="gallery-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; color: white;">
                    <span style="font-size: 24px;">🔍</span>
                </div>
            </div>
        </div>
        
        <div class="gallery-controls" style="display: flex; justify-content: center; align-items: center; gap: 12px; margin-top: 20px;">
            <button style="background: #f3f4f6; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer;">◀ 이전</button>
            <span style="color: #6b7280; font-size: 14px;">1 / 3</span>
            <button style="background: #f3f4f6; border: none; padding: 8px 12px; border-radius: 6px; cursor: pointer;">다음 ▶</button>
        </div>
    </div>`,
    properties: {
      images: 6,
      columns: 3,
      showOverlay: true,
      showControls: true
    }
  },
  
  video_player: {
    name: '비디오 플레이어',
    category: 'media',
    icon: '🎬',
    html: `<div class="video-player" style="background: #000; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3); max-width: 600px;">
        <div class="video-container" style="position: relative; aspect-ratio: 16/9; background: #000;">
            <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #1f2937 0%, #374151 100%);">
                <div style="text-align: center; color: white;">
                    <div style="font-size: 64px; margin-bottom: 16px;">▶️</div>
                    <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px;">샘플 비디오</div>
                    <div style="font-size: 14px; opacity: 0.8;">재생하려면 클릭하세요</div>
                </div>
            </div>
            
            <div class="video-overlay" style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%); opacity: 0; transition: opacity 0.3s; pointer-events: none;">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 20px;">
                    <div class="progress-bar" style="background: rgba(255,255,255,0.3); height: 4px; border-radius: 2px; margin-bottom: 12px;">
                        <div style="background: #3b82f6; height: 100%; width: 30%; border-radius: 2px;"></div>
                    </div>
                    
                    <div class="video-controls" style="display: flex; align-items: center; gap: 16px; color: white;">
                        <button style="background: none; border: none; color: white; cursor: pointer; font-size: 18px;">⏸️</button>
                        <button style="background: none; border: none; color: white; cursor: pointer; font-size: 16px;">🔊</button>
                        <div style="flex: 1; display: flex; align-items: center; gap: 8px; font-size: 14px;">
                            <span>02:15</span>
                            <span>/</span>
                            <span>07:32</span>
                        </div>
                        <button style="background: none; border: none; color: white; cursor: pointer; font-size: 16px;">⚙️</button>
                        <button style="background: none; border: none; color: white; cursor: pointer; font-size: 16px;">⛶</button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="video-info" style="padding: 16px; background: white;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1f2937;">제품 소개 영상</h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.5;">새로운 제품의 특징과 사용법을 자세히 알아보세요.</p>
            <div style="display: flex; align-items: center; gap: 16px; margin-top: 12px; font-size: 14px; color: #6b7280;">
                <span>👁️ 1,234 조회</span>
                <span>👍 89</span>
                <span>💬 12</span>
                <span>📅 2025-07-31</span>
            </div>
        </div>
    </div>`,
    properties: {
      title: '제품 소개 영상',
      description: '새로운 제품의 특징과 사용법을 자세히 알아보세요.',
      duration: '07:32',
      views: 1234,
      likes: 89,
      showControls: true
    }
  },
  
  audio_player: {
    name: '오디오 플레이어',
    category: 'media',
    icon: '🎵',
    html: `<div class="audio-player" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; padding: 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.2); max-width: 400px; color: white;">
        <div class="track-info" style="text-align: center; margin-bottom: 24px;">
            <div class="album-art" style="width: 120px; height: 120px; background: rgba(255,255,255,0.2); border-radius: 12px; margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 48px;">
                🎵
            </div>
            <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 600;">Amazing Song</h3>
            <p style="margin: 0; opacity: 0.8; font-size: 14px;">Artist Name</p>
        </div>
        
        <div class="progress-section" style="margin-bottom: 20px;">
            <div class="progress-bar" style="background: rgba(255,255,255,0.3); height: 6px; border-radius: 3px; margin-bottom: 8px; cursor: pointer;">
                <div style="background: white; height: 100%; width: 45%; border-radius: 3px; position: relative;">
                    <div style="position: absolute; right: -6px; top: -3px; width: 12px; height: 12px; background: white; border-radius: 50%;"></div>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 12px; opacity: 0.8;">
                <span>1:45</span>
                <span>3:42</span>
            </div>
        </div>
        
        <div class="player-controls" style="display: flex; align-items: center; justify-content: center; gap: 24px;">
            <button style="background: none; border: none; color: white; cursor: pointer; font-size: 20px; opacity: 0.8; transition: opacity 0.3s;">⏮️</button>
            <button style="background: rgba(255,255,255,0.2); border: none; color: white; cursor: pointer; font-size: 24px; width: 56px; height: 56px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: background 0.3s;">⏸️</button>
            <button style="background: none; border: none; color: white; cursor: pointer; font-size: 20px; opacity: 0.8; transition: opacity 0.3s;">⏭️</button>
        </div>
        
        <div class="volume-control" style="display: flex; align-items: center; gap: 12px; margin-top: 20px;">
            <span style="font-size: 16px; opacity: 0.8;">🔊</span>
            <div style="flex: 1; background: rgba(255,255,255,0.3); height: 4px; border-radius: 2px;">
                <div style="background: white; height: 100%; width: 70%; border-radius: 2px;"></div>
            </div>
            <span style="font-size: 12px; opacity: 0.8;">70%</span>
        </div>
    </div>`,
    properties: {
      title: 'Amazing Song',
      artist: 'Artist Name',
      duration: '03:42',
      currentTime: '01:45',
      volume: 70,
      isPlaying: false
    }
  },
  
  map: {
    name: '지도',
    category: 'media',
    icon: '🗺️',
    html: `<div class="map-container" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        <div class="map-header" style="padding: 16px; border-bottom: 1px solid #e5e7eb;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #1f2937;">우리 회사 위치</h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">📍 서울특별시 강남구 테헤란로 123</p>
        </div>
        
        <div class="map-display" style="position: relative; height: 300px; background: linear-gradient(135deg, #a7f3d0 0%, #6ee7b7 50%, #34d399 100%);">
            <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;">
                <div style="text-align: center; color: #065f46;">
                    <div style="font-size: 48px; margin-bottom: 12px;">📍</div>
                    <div style="font-size: 16px; font-weight: 600; margin-bottom: 4px;">우리 회사</div>
                    <div style="font-size: 14px; opacity: 0.8;">서울특별시 강남구</div>
                </div>
            </div>
            
            <div class="map-controls" style="position: absolute; top: 16px; right: 16px; display: flex; flex-direction: column; gap: 8px;">
                <button style="background: white; border: 1px solid #e5e7eb; width: 36px; height: 36px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: bold;">+</button>
                <button style="background: white; border: 1px solid #e5e7eb; width: 36px; height: 36px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: bold;">−</button>
            </div>
            
            <div class="map-marker" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 32px; animation: bounce 2s infinite;">
                📍
            </div>
            
            <style>
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% { transform: translate(-50%, -50%) translateY(0); }
                    40% { transform: translate(-50%, -50%) translateY(-10px); }
                    60% { transform: translate(-50%, -50%) translateY(-5px); }
                }
            </style>
        </div>
        
        <div class="map-info" style="padding: 16px; background: #f9fafb;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <div>
                    <div style="font-weight: 600; color: #1f2937; margin-bottom: 4px;">영업시간</div>
                    <div style="color: #6b7280; font-size: 14px;">월-금 09:00 - 18:00</div>
                </div>
                <div>
                    <div style="font-weight: 600; color: #1f2937; margin-bottom: 4px;">연락처</div>
                    <div style="color: #6b7280; font-size: 14px;">02-1234-5678</div>
                </div>
            </div>
            <div style="display: flex; gap: 8px;">
                <button style="flex: 1; background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px;">길찾기</button>
                <button style="flex: 1; background: white; color: #3b82f6; border: 1px solid #3b82f6; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px;">전화하기</button>
            </div>
        </div>
    </div>`,
    properties: {
      address: '서울특별시 강남구 테헤란로 123',
      businessName: '우리 회사',
      hours: '월-금 09:00 - 18:00',
      phone: '02-1234-5678',
      showControls: true
    }
  },
  
  embed: {
    name: '임베드 콘텐츠',
    category: 'media',
    icon: '📎',
    html: `<div class="embed-container" style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-width: 600px;">
        <div class="embed-header" style="display: flex; align-items: center; gap: 12px; padding: 16px; border-bottom: 1px solid #e5e7eb;">
            <div style="width: 40px; height: 40px; background: #3b82f6; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">Y</div>
            <div>
                <h3 style="margin: 0; font-size: 16px; font-weight: 600; color: #1f2937;">YouTube 동영상</h3>
                <p style="margin: 0; color: #6b7280; font-size: 14px;">youtube.com</p>
            </div>
            <button style="margin-left: auto; background: none; border: none; color: #6b7280; cursor: pointer; font-size: 18px;">⚙️</button>
        </div>
        
        <div class="embed-content" style="position: relative; aspect-ratio: 16/9; background: #f3f4f6;">
            <div style="position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 16px;">
                <div style="width: 80px; height: 80px; background: #ef4444; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 32px;">
                    ▶️
                </div>
                <div style="text-align: center;">
                    <div style="font-size: 18px; font-weight: 600; color: #1f2937; margin-bottom: 8px;">제품 소개 영상</div>
                    <div style="color: #6b7280; font-size: 14px;">5분 33초 • 조회수 12,345회</div>
                </div>
            </div>
            
            <div style="position: absolute; top: 16px; right: 16px;">
                <span style="background: rgba(0,0,0,0.8); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500;">5:33</span>
            </div>
        </div>
        
        <div class="embed-footer" style="padding: 16px;">
            <p style="margin: 0 0 12px 0; color: #374151; line-height: 1.5;">우리 제품의 다양한 기능과 사용법을 영상으로 확인해보세요. 초보자도 쉽게 따라할 수 있는 단계별 가이드를 제공합니다.</p>
            <div style="display: flex; gap: 8px;">
                <button style="background: #ef4444; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px; display: flex; align-items: center; gap: 6px;">
                    <span>▶️</span> YouTube에서 보기
                </button>
                <button style="background: #f3f4f6; color: #374151; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px;">공유</button>
            </div>
        </div>
    </div>`,
    properties: {
      platform: 'YouTube',
      title: '제품 소개 영상',
      duration: '5:33',
      views: 12345,
      description: '우리 제품의 다양한 기능과 사용법을 영상으로 확인해보세요.',
      showFooter: true
    }
  }
};

// 컴포넌트 카테고리 정의
const componentCategories = {
  basic: {
    name: '🧱 기본 요소',
    components: ['heading', 'text', 'button', 'input', 'card', 'container', 'image', 'video', 'divider', 'spacer']
  },
  navigation: {
    name: '🧭 내비게이션',
    components: ['navbar', 'breadcrumb', 'sidebar', 'tabs', 'pagination']
  },
  'data-display': {
    name: '📊 데이터 표시',
    components: ['datatable', 'chart', 'stats_card', 'progress', 'timeline']
  },
  interactive: {
    name: '🎯 상호작용',
    components: ['modal', 'tooltip', 'dropdown', 'slider', 'accordion']
  },
  forms: {
    name: '📝 폼 & 입력',
    components: ['datepicker', 'fileupload', 'richeditor', 'checkbox_group', 'toggle_switch']
  },
  social: {
    name: '👥 소셜',
    components: ['comment_system', 'social_share', 'user_profile', 'chat_widget', 'rating']
  },
  ecommerce: {
    name: '🛒 이커머스',
    components: ['product_card', 'cart_widget', 'payment_form', 'wishlist', 'product_compare']
  },
  media: {
    name: '🎨 미디어',
    components: ['gallery', 'video_player', 'audio_player', 'map', 'embed']
  }
};

// Visual Builder에서 사용할 수 있도록 export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    extendedComponentTemplates,
    componentCategories
  };
}

// 브라우저 환경에서 사용할 수 있도록 global 객체에 할당
if (typeof window !== 'undefined') {
  window.ExtendedComponents = {
    templates: extendedComponentTemplates,
    categories: componentCategories
  };
}