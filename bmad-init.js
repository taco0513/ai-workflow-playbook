#!/usr/bin/env node

/**
 * BMAD Method Initializer
 * Based on the BMAD Method Workflow Playbook
 * 
 * B - Business Logic
 * M - Mockup
 * A - API Integration
 * D - Design Polish
 */

const fs = require('fs');
const path = require('path');

console.log(`
╔══════════════════════════════════════════════════╗
║          BMAD Method Project Initializer         ║
║                                                  ║
║  B - Business Logic First                        ║
║  M - Mockup Development                          ║
║  A - API Integration                             ║
║  D - Design Polish                               ║
╚══════════════════════════════════════════════════╝
`);

// Create BMAD project structure
const projectRoot = process.cwd();
const bmadStructure = {
  'bmad': {
    'B-business': {
      'models': {},
      'logic': {},
      'tests': {}
    },
    'M-mockup': {
      'html': {},
      'css': {},
      'js': {}
    },
    'A-api': {
      'server': {},
      'client': {},
      'routes': {}
    },
    'D-design': {
      'components': {},
      'styles': {},
      'assets': {}
    },
    'docs': {}
  }
};

// Create directories recursively
function createDirectories(structure, basePath = projectRoot) {
  Object.entries(structure).forEach(([dir, subDirs]) => {
    const dirPath = path.join(basePath, dir);
    
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`✅ Created: ${path.relative(projectRoot, dirPath)}`);
    }
    
    if (Object.keys(subDirs).length > 0) {
      createDirectories(subDirs, dirPath);
    }
  });
}

// Create README files for each phase
function createPhaseReadmes() {
  const phases = {
    'bmad/B-business/README.md': `# Phase B: Business Logic First

## Goal
Create core functionality without UI

## Checklist
- [ ] Define business requirements
- [ ] Design data models
- [ ] Implement core business logic
- [ ] Create console tests
- [ ] Add data persistence

## Key Files
- models/ - Data structures
- logic/ - Business rules
- tests/ - Console test scripts
`,
    'bmad/M-mockup/README.md': `# Phase M: Mockup Development

## Goal
Create working UI prototype

## Checklist
- [ ] Design screen layouts
- [ ] Create HTML structure
- [ ] Add JavaScript interactions
- [ ] Connect to local storage
- [ ] Implement all UI features

## Key Files
- html/ - Page templates
- css/ - Styles
- js/ - Client-side logic
`,
    'bmad/A-api/README.md': `# Phase A: API Integration

## Goal
Connect frontend to backend

## Checklist
- [ ] Design RESTful API
- [ ] Implement server endpoints
- [ ] Create API client
- [ ] Add error handling
- [ ] Implement loading states

## Key Files
- server/ - Backend code
- client/ - API client
- routes/ - API endpoints
`,
    'bmad/D-design/README.md': `# Phase D: Design Polish

## Goal
Production-ready UI/UX

## Checklist
- [ ] Apply UI framework
- [ ] Implement responsive design
- [ ] Add animations
- [ ] Optimize performance
- [ ] Final testing

## Key Files
- components/ - UI components
- styles/ - Production CSS
- assets/ - Images, fonts
`
  };

  Object.entries(phases).forEach(([filePath, content]) => {
    const fullPath = path.join(projectRoot, filePath);
    fs.writeFileSync(fullPath, content);
    console.log(`📄 Created: ${filePath}`);
  });
}

// Create main BMAD checklist
function createMainChecklist() {
  const checklistPath = path.join(projectRoot, 'bmad/BMAD_CHECKLIST.md');
  const content = `# BMAD Method Checklist

## Project: ${path.basename(projectRoot)}

### Phase B: Business Logic First (Days 1-5)
- [ ] Requirements definition
- [ ] Data model design
- [ ] Core business logic implementation
- [ ] Console testing
- [ ] Data persistence

### Phase M: Mockup Development (Days 6-10)
- [ ] Screen design planning
- [ ] HTML prototype
- [ ] JavaScript interactions
- [ ] Local storage integration
- [ ] All features UI implementation

### Phase A: API Integration (Days 11-15)
- [ ] API design
- [ ] Server implementation
- [ ] Client integration
- [ ] Error handling
- [ ] Loading states

### Phase D: Design Polish (Days 16-20)
- [ ] UI framework application
- [ ] Responsive design
- [ ] Animations
- [ ] Performance optimization
- [ ] Final testing

## Progress Tracking
- Started: ${new Date().toLocaleDateString()}
- Phase B: ⏳ In Progress
- Phase M: ⬜ Not Started
- Phase A: ⬜ Not Started
- Phase D: ⬜ Not Started
`;

  fs.writeFileSync(checklistPath, content);
  console.log(`📋 Created: bmad/BMAD_CHECKLIST.md`);
}

// Initialize BMAD structure
console.log('\n🚀 Initializing BMAD Method structure...\n');
createDirectories(bmadStructure);
createPhaseReadmes();
createMainChecklist();

console.log(`
✨ BMAD Method structure created successfully!

📁 Structure:
  bmad/
  ├── B-business/    # Business Logic First
  ├── M-mockup/      # Mockup Development
  ├── A-api/         # API Integration
  ├── D-design/      # Design Polish
  └── docs/          # Documentation

📖 Next Steps:
  1. Read bmad/BMAD_CHECKLIST.md for phase guidelines
  2. Start with Phase B in bmad/B-business/
  3. Follow the systematic approach: B → M → A → D

💡 Tips:
  - Complete each phase before moving to the next
  - Use console tests in Phase B
  - Keep UI simple in Phase M
  - Focus on connection in Phase A
  - Polish everything in Phase D

Happy coding with BMAD Method! 🎉
`);