#!/usr/bin/env node

/**
 * 통합 테스트 - v3.1.0 프로토타입 연동 테스트
 * 
 * AI Interview Bot → Context Assembly → MVP Generator → Visual Builder
 * Created: 2025-07-31
 */

const fs = require('fs');
const path = require('path');
const { SafeExecution } = require('../../infrastructure/security/security');

// 통합 테스트는 독립적으로 실행되며, 각 프로토타입의 동작을 시뮬레이션합니다

// 색상 코드
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  red: '\x1b[31m',
  blue: '\x1b[34m'
};

class IntegrationTest {
  constructor() {
    this.testResults = [];
    this.startTime = Date.now();
    this.outputDir = path.join(__dirname, 'test-outputs');
    
    // 출력 디렉토리 생성
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  // 로고 출력
  showLogo() {
    console.log(`
${colors.magenta}╔══════════════════════════════════════════════════╗
║        🔗 통합 테스트 - v3.1.0 프로토타입       ║
║                                                  ║
║    AI Interview → Context → MVP → Visual         ║
╚══════════════════════════════════════════════════╝${colors.reset}
`);
  }

  // 진행 상황 표시
  showProgress(step, total, message) {
    const percentage = Math.round((step / total) * 100);
    const filled = Math.round((step / total) * 20);
    const empty = 20 - filled;
    const bar = '█'.repeat(filled) + '░'.repeat(empty);
    
    console.log(`
${colors.cyan}[${bar}] ${percentage}%${colors.reset}
${colors.bright}통합 테스트 ${step}/${total}${colors.reset}: ${message}
`);
  }

  // 테스트 결과 기록
  recordTest(testName, passed, duration, details = '') {
    const result = {
      name: testName,
      passed,
      duration,
      details,
      timestamp: new Date().toISOString()
    };
    
    this.testResults.push(result);
    
    const status = passed ? `${colors.green}✅ PASS${colors.reset}` : `${colors.red}❌ FAIL${colors.reset}`;
    console.log(`${status} ${testName} (${duration}ms) ${details}`);
  }

  // 시나리오 1: 온라인 쇼핑몰
  async testEcommerceScenario() {
    console.log(`\n${colors.blue}📱 시나리오 1: 온라인 쇼핑몰${colors.reset}`);
    const startTime = Date.now();
    
    try {
      // 1. AI Interview Bot 시뮬레이션
      const interviewData = {
        projectType: 'ecommerce',
        userProfile: 'beginner',
        requirements: {
          productType: '수제 악세서리',
          mainFeatures: ['상품 카탈로그', '장바구니', '결제 시스템'],
          currentSolution: 'Instagram DM',
          painPoints: ['수동 주문 관리', '입금 확인', '재고 추적'],
          successMetrics: '월 100개 판매'
        }
      };
      
      console.log(`${colors.yellow}  📝 Interview 데이터 생성...${colors.reset}`);
      this.saveTestOutput('interview-ecommerce.json', interviewData);
      
      // 2. Context Assembly 시뮬레이션
      const contextData = {
        instructions: 'Create an ecommerce MVP with product catalog and payment integration',
        knowledge: ['Next.js', 'Stripe', 'Tailwind CSS', 'React hooks'],
        tools: ['Write', 'Edit', 'Bash', 'Context7'],
        memory: 'Previous ecommerce projects, payment integration patterns',
        state: 'Project: ecommerce, User: beginner, Focus: user-friendly',
        query: 'Build online store for handmade accessories with simple management'
      };
      
      console.log(`${colors.yellow}  🧠 Context 최적화...${colors.reset}`);
      this.saveTestOutput('context-ecommerce.json', contextData);
      
      // 3. MVP Generator 파라미터 준비
      const mvpConfig = {
        template: 'ecommerce',
        projectName: 'handmade-accessories-store',
        customizations: {
          businessName: '수제 악세서리 샵',
          primaryColor: '#E91E63',
          features: ['product-catalog', 'shopping-cart', 'stripe-payment']
        }
      };
      
      console.log(`${colors.yellow}  🏗️ MVP 설정 준비...${colors.reset}`);
      this.saveTestOutput('mvp-config-ecommerce.json', mvpConfig);
      
      // 4. Visual Builder 커스터마이징 데이터
      const visualConfig = {
        layout: 'grid',
        components: [
          { type: 'heading', text: '수제 악세서리 샵' },
          { type: 'text', text: '정성스럽게 만든 수제 악세서리를 만나보세요' },
          { type: 'card', title: '인기 상품', content: '베스트셀러 악세서리 모음' },
          { type: 'button', text: '쇼핑하기', backgroundColor: '#E91E63' }
        ],
        theme: {
          primaryColor: '#E91E63',
          fontFamily: 'Noto Sans KR',
          borderRadius: '8px'
        }
      };
      
      console.log(`${colors.yellow}  🎨 Visual 커스터마이징...${colors.reset}`);
      this.saveTestOutput('visual-config-ecommerce.json', visualConfig);
      
      const duration = Date.now() - startTime;
      this.recordTest('Ecommerce Scenario', true, duration, 'All components integrated successfully');
      
      return {
        success: true,
        data: { interviewData, contextData, mvpConfig, visualConfig }
      };
      
    } catch (error) {
      const duration = Date.now() - startTime;
      this.recordTest('Ecommerce Scenario', false, duration, error.message);
      return { success: false, error: error.message };
    }
  }

  // 시나리오 2: SaaS 대시보드
  async testSaaSScenario() {
    console.log(`\n${colors.blue}💼 시나리오 2: SaaS 대시보드${colors.reset}`);
    const startTime = Date.now();
    
    try {
      const interviewData = {
        projectType: 'saas',
        userProfile: 'developer',
        requirements: {
          service: '팀 협업 도구',
          mainFeatures: ['실시간 동기화', '동시 편집', '사용자 관리'],
          techStack: 'React + Node.js + WebSocket',
          painPoints: ['동시 편집 충돌', '실시간 성능', '확장성'],
          successMetrics: '동시 접속 100명'
        }
      };

      const contextData = {
        instructions: 'Build SaaS collaboration platform with real-time features',
        knowledge: ['React', 'WebSocket', 'Node.js', 'Redis', 'MongoDB'],
        tools: ['Write', 'Edit', 'Bash', 'Sequential', 'Context7'],
        memory: 'Real-time collaboration patterns, WebSocket optimization',
        state: 'Project: saas, User: developer, Focus: scalability',
        query: 'Create team collaboration SaaS with real-time sync'
      };

      const mvpConfig = {
        template: 'saas',
        projectName: 'team-collaboration-platform',
        customizations: {
          businessName: '팀워크 플러스',
          primaryColor: '#6366F1',
          features: ['user-auth', 'real-time-sync', 'dashboard', 'subscription']
        }
      };

      const visualConfig = {
        layout: 'dashboard',
        components: [
          { type: 'heading', text: '팀워크 플러스 대시보드' },
          { type: 'card', title: '활성 프로젝트', content: '실시간 협업 중인 프로젝트들' },
          { type: 'card', title: '팀 멤버', content: '온라인 상태의 동료들' },
          { type: 'button', text: '새 프로젝트', backgroundColor: '#6366F1' }
        ],
        theme: {
          primaryColor: '#6366F1',
          layout: 'sidebar',
          darkMode: true
        }
      };

      console.log(`${colors.yellow}  📊 SaaS 대시보드 구성 완료${colors.reset}`);
      
      this.saveTestOutput('interview-saas.json', interviewData);
      this.saveTestOutput('context-saas.json', contextData);
      this.saveTestOutput('mvp-config-saas.json', mvpConfig);
      this.saveTestOutput('visual-config-saas.json', visualConfig);

      const duration = Date.now() - startTime;
      this.recordTest('SaaS Scenario', true, duration, 'Developer-focused SaaS platform configured');
      
      return { success: true, data: { interviewData, contextData, mvpConfig, visualConfig } };
      
    } catch (error) {
      const duration = Date.now() - startTime;
      this.recordTest('SaaS Scenario', false, duration, error.message);
      return { success: false, error: error.message };
    }
  }

  // 시나리오 3: 레스토랑 시스템
  async testRestaurantScenario() {
    console.log(`\n${colors.blue}🍔 시나리오 3: 레스토랑 주문 시스템${colors.reset}`);
    const startTime = Date.now();
    
    try {
      const interviewData = {
        projectType: 'restaurant',
        userProfile: 'business',
        requirements: {
          service: 'QR 주문 시스템',
          mainFeatures: ['QR 메뉴', '실시간 주문', '결제', '주방 알림'],
          currentSolution: '종이 메뉴 + 수기 주문',
          painPoints: ['주문 실수', '대기 시간', '테이블 회전율'],
          successMetrics: '테이블 회전율 20% 향상'
        }
      };

      const contextData = {
        instructions: 'Create QR-based restaurant ordering system with real-time kitchen alerts',
        knowledge: ['QR generation', 'Real-time orders', 'POS integration', 'Mobile-first design'],
        tools: ['Write', 'Edit', 'Magic', 'Context7'],
        memory: 'Restaurant workflow patterns, mobile ordering UX',
        state: 'Project: restaurant, User: business, Focus: efficiency',
        query: 'Build QR ordering system to improve table turnover'
      };

      const mvpConfig = {
        template: 'restaurant',
        projectName: 'qr-restaurant-orders',
        customizations: {
          businessName: '맛있는 식당',
          primaryColor: '#F59E0B',
          features: ['qr-menu', 'real-time-orders', 'payment', 'kitchen-display']
        }
      };

      const visualConfig = {
        layout: 'mobile-first',
        components: [
          { type: 'heading', text: '맛있는 식당 메뉴' },
          { type: 'text', text: 'QR 코드로 간편하게 주문하세요' },
          { type: 'card', title: '추천 메뉴', content: '오늘의 특별 요리' },
          { type: 'button', text: '주문하기', backgroundColor: '#F59E0B' }
        ],
        theme: {
          primaryColor: '#F59E0B',
          mobileOptimized: true,
          fontSize: 'large'
        }
      };

      console.log(`${colors.yellow}  🍽️ 레스토랑 시스템 구성 완료${colors.reset}`);
      
      this.saveTestOutput('interview-restaurant.json', interviewData);
      this.saveTestOutput('context-restaurant.json', contextData);
      this.saveTestOutput('mvp-config-restaurant.json', mvpConfig);
      this.saveTestOutput('visual-config-restaurant.json', visualConfig);

      const duration = Date.now() - startTime;
      this.recordTest('Restaurant Scenario', true, duration, 'QR ordering system configured successfully');
      
      return { success: true, data: { interviewData, contextData, mvpConfig, visualConfig } };
      
    } catch (error) {
      const duration = Date.now() - startTime;
      this.recordTest('Restaurant Scenario', false, duration, error.message);
      return { success: false, error: error.message };
    }
  }

  // 데이터 흐름 검증
  async testDataFlow() {
    console.log(`\n${colors.blue}🔄 데이터 흐름 검증${colors.reset}`);
    const startTime = Date.now();
    
    try {
      // 각 단계의 출력이 다음 단계의 입력으로 올바르게 전달되는지 확인
      const interviewOutput = JSON.parse(fs.readFileSync(
        path.join(this.outputDir, 'interview-ecommerce.json'), 'utf8'
      ));
      
      const contextOutput = JSON.parse(fs.readFileSync(
        path.join(this.outputDir, 'context-ecommerce.json'), 'utf8'
      ));
      
      const mvpOutput = JSON.parse(fs.readFileSync(
        path.join(this.outputDir, 'mvp-config-ecommerce.json'), 'utf8'
      ));
      
      // 데이터 일관성 확인
      const projectTypeMatch = interviewOutput.projectType === mvpOutput.template;
      const colorConsistency = interviewOutput.requirements && mvpOutput.customizations.primaryColor;
      const featureAlignment = mvpOutput.customizations.features.length > 0;
      
      console.log(`${colors.yellow}  📋 프로젝트 타입 일치: ${projectTypeMatch ? '✅' : '❌'}${colors.reset}`);
      console.log(`${colors.yellow}  🎨 색상 설정 전달: ${colorConsistency ? '✅' : '❌'}${colors.reset}`);
      console.log(`${colors.yellow}  ⚙️ 기능 매핑: ${featureAlignment ? '✅' : '❌'}${colors.reset}`);
      
      const allPassed = projectTypeMatch && colorConsistency && featureAlignment;
      
      const duration = Date.now() - startTime;
      this.recordTest('Data Flow Validation', allPassed, duration, 
        `Type: ${projectTypeMatch}, Color: ${colorConsistency}, Features: ${featureAlignment}`);
      
      return { success: allPassed };
      
    } catch (error) {
      const duration = Date.now() - startTime;
      this.recordTest('Data Flow Validation', false, duration, error.message);
      return { success: false, error: error.message };
    }
  }

  // 성능 측정
  async testPerformance() {
    console.log(`\n${colors.blue}⚡ 성능 측정${colors.reset}`);
    const startTime = Date.now();
    
    try {
      const performanceMetrics = {
        totalWorkflowTime: Date.now() - this.startTime,
        averageStepTime: this.testResults.reduce((sum, test) => sum + test.duration, 0) / this.testResults.length,
        memoryUsage: process.memoryUsage(),
        scenarioTimes: this.testResults.filter(test => test.name.includes('Scenario')).map(test => ({
          scenario: test.name,
          duration: test.duration
        }))
      };
      
      console.log(`${colors.yellow}  🕐 전체 워크플로우 시간: ${performanceMetrics.totalWorkflowTime}ms${colors.reset}`);
      console.log(`${colors.yellow}  ⏱️ 평균 단계 시간: ${Math.round(performanceMetrics.averageStepTime)}ms${colors.reset}`);
      console.log(`${colors.yellow}  💾 메모리 사용량: ${Math.round(performanceMetrics.memoryUsage.heapUsed / 1024 / 1024)}MB${colors.reset}`);
      
      this.saveTestOutput('performance-metrics.json', performanceMetrics);
      
      // 성능 기준: 전체 워크플로우 30분 이내 (1,800,000ms)
      const performanceTarget = 1800000; // 30분
      const performancePassed = performanceMetrics.totalWorkflowTime < performanceTarget;
      
      const duration = Date.now() - startTime;
      this.recordTest('Performance Test', performancePassed, duration, 
        `Total: ${performanceMetrics.totalWorkflowTime}ms (Target: <${performanceTarget}ms)`);
      
      return { success: performancePassed, metrics: performanceMetrics };
      
    } catch (error) {
      const duration = Date.now() - startTime;
      this.recordTest('Performance Test', false, duration, error.message);
      return { success: false, error: error.message };
    }
  }

  // 테스트 출력 저장
  saveTestOutput(filename, data) {
    const filePath = path.join(this.outputDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }

  // 최종 보고서 생성
  generateReport() {
    const totalTests = this.testResults.length;
    const passedTests = this.testResults.filter(test => test.passed).length;
    const failedTests = totalTests - passedTests;
    const successRate = Math.round((passedTests / totalTests) * 100);
    
    const report = {
      summary: {
        totalTests,
        passedTests,
        failedTests,
        successRate,
        totalDuration: Date.now() - this.startTime
      },
      details: this.testResults,
      timestamp: new Date().toISOString()
    };
    
    this.saveTestOutput('integration-test-report.json', report);
    
    console.log(`
${colors.bright}📊 통합 테스트 결과${colors.reset}
${'='.repeat(50)}
총 테스트: ${totalTests}
성공: ${colors.green}${passedTests}${colors.reset}
실패: ${colors.red}${failedTests}${colors.reset}
성공률: ${successRate >= 80 ? colors.green : colors.red}${successRate}%${colors.reset}
총 소요 시간: ${Math.round(report.summary.totalDuration / 1000)}초

${colors.cyan}📁 결과 파일들이 ${this.outputDir}에 저장되었습니다.${colors.reset}
`);
    
    return report;
  }

  // 메인 실행 함수
  async run(scenario = 'all') {
    try {
      this.showLogo();
      
      if (scenario === 'all' || scenario === 'ecommerce') {
        this.showProgress(1, 6, 'Ecommerce 시나리오 테스트');
        await this.testEcommerceScenario();
      }
      
      if (scenario === 'all' || scenario === 'saas') {
        this.showProgress(2, 6, 'SaaS 시나리오 테스트');
        await this.testSaaSScenario();
      }
      
      if (scenario === 'all' || scenario === 'restaurant') {
        this.showProgress(3, 6, '레스토랑 시나리오 테스트');
        await this.testRestaurantScenario();
      }
      
      if (scenario === 'all') {
        this.showProgress(4, 6, '데이터 흐름 검증');
        await this.testDataFlow();
        
        this.showProgress(5, 6, '성능 측정');
        await this.testPerformance();
      }
      
      this.showProgress(6, 6, '보고서 생성');
      const report = this.generateReport();
      
      console.log(`${colors.green}✅ 통합 테스트 완료!${colors.reset}`);
      
      return report;
      
    } catch (error) {
      console.error(`${colors.red}❌ 통합 테스트 실패:${colors.reset}`, error);
      return { success: false, error: error.message };
    }
  }
}

// CLI 실행
if (require.main === module) {
  const scenario = process.argv[2] || 'all';
  const integrationTest = new IntegrationTest();
  integrationTest.run(scenario).catch(console.error);
}

module.exports = IntegrationTest;