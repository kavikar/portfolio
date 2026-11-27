export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface SkillCategory {
  icon: string;
  name: string;
  skills: string[];
}

export interface Certification {
  icon: string;
  name: string;
  issuer: string;
  /** Month issued, e.g. "Nov 2026". */
  issued?: string;
  description?: string;
  /** Public verification page. When set, the whole entry links to it. */
  url?: string;
  /** Badge image served from public/. */
  badge?: string;
}

export interface Project {
  icon: string;
  name: string;
  period: string;
  description: string;
  tags: string[];
  /** Public source URL. Omitted for proprietary or academic work. */
  url?: string;
  /** Deployed instance, when there is one to click. */
  live?: string;
  /** Spans the full grid width, for the larger projects. */
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    role: 'Senior Software Engineer in Test (SDET) — Multi-Brand Digital Ordering, Loyalty & POS Platforms',
    company: 'Capgemini (Client: Inspire Brands) — Atlanta, GA',
    period: 'Apr 2026 – Present',
    bullets: [
      'Own automation standards, framework direction, and CI/CD test execution across Sonic, Buffalo Wild Wings, Dunkin’, and selected Arby’s projects.',
      'Built an AI-assisted test-authoring workflow for Sonic E2E (agent skills, MCP tooling, prompt-driven generation) that creates test cases in Jira/Xray: 1,000+ to date (about 50 per release), saving an estimated 20 engineer-hours per two-week sprint.',
      'Maintain a 400-test cross-platform regression suite: each release’s new-feature E2E cases are promoted into regression or merged into existing cases, while time-bound offer and promotion cases rotate out.',
      'Built a release-analysis CLI that compares the existing suite against each release’s Jira epics and stories, adds cases for coverage gaps and for functional defects from earlier releases, and estimates the test capacity needed.',
      'Dunkin’ loyalty platform: designed and ran resiliency and fault-tolerance tests, validating circuit-breaker behavior and recovery under induced failure conditions.',
      'Buffalo Wild Wings: built automation coverage for the Business Service Layer (BSL) migration, validating API contracts, regression, and integration paths so existing behavior carried over.',
      'Built a proof-of-concept agent skill that turns existing test cases into prompts for runs in the Comet AI browser.',
    ],
    tags: [
      'AI Agent Skills',
      'MCP Tooling',
      'Prompt-Driven Testing',
      'Jira/Xray',
      'Resiliency Testing',
    ],
  },
  {
    role: 'SDET / Automation Lead — Sonic E2E Digital Ordering & POS Platform',
    company: 'Capgemini (Client: Inspire Brands) — Atlanta, GA',
    period: 'Jan 2024 – Mar 2026',
    bullets: [
      'Owned test strategy, test plans, and automation architecture for Sonic’s end-to-end digital ordering and POS integration platform across Web, Mobile (iOS/Android), and API layers.',
      'Architected the CI/CD test pipeline: GitLab pipelines with BrowserStack parallel execution, quality gates, and automated Slack/email reporting, improving release visibility and removing manual release-prep work.',
      'Designed and built the Maestro mobile E2E framework (shared flows, smoke suites, critical-path coverage) and standardized runners (Playwright in Java for web, Maestro for Android) reused across brands.',
      'Validated mobile app releases and staged rollouts, triaging issues from Android device logs (adb); validated A/B tests and feature-flag rollouts in Optimizely and Contentful.',
      'Root-caused production and integration failures through Splunk log analysis across services and third-party integrations; built dashboards and custom metrics and confirmed deployed service versions.',
      'Tested offers, promotions, and loyalty logic and guest vs. signed-in ordering flows; ran accessibility testing with UsableNet, VoiceOver, and TalkBack.',
      'Led repository restructuring (config registry, loader updates, security hardening) and standardized deployment flows across automation and menu domains.',
    ],
    tags: [
      'Maestro',
      'Playwright',
      'BrowserStack',
      'GitLab CI/CD',
      'Splunk',
      'Accessibility',
    ],
  },
  {
    role: 'SDET — Sonic POS, Payments & Digital Integration',
    company: 'Capgemini (Client: Inspire Brands) — Atlanta, GA',
    period: 'May 2023 – Dec 2023',
    bullets: [
      'Built and maintained automated regression and smoke suites validating integrations between digital ordering platforms and POS systems (Micros, Infor) across ordering, payment, and pricing workflows.',
      'Reconciled POS records against ordering-platform and payment-processor data in SQL and MongoDB to surface pricing and payment mismatches; automated backend API tests with REST Assured.',
    ],
    tags: ['REST Assured', 'SQL', 'MongoDB', 'POS Integration', 'Payments'],
  },
  {
    role: 'SDET — Buffalo Wild Wings (BWW Choice)',
    company: 'Capgemini (Client: Inspire Brands) — Bengaluru, India',
    period: 'May 2022 – Apr 2023',
    bullets: [
      'Sole automation engineer for BWW Choice mobile web and API layers: built Java suites with Selenium WebDriver and REST Assured, integrated into GitLab CI/CD with ReportPortal and Jira reporting.',
      'Extended the shared multi-brand framework with reusable components; root-caused service and third-party integration failures from New Relic logs during regression triage.',
    ],
    tags: [
      'Java',
      'Selenium',
      'REST Assured',
      'GitLab CI/CD',
      'ReportPortal',
      'New Relic',
    ],
  },
  {
    role: "Automation Engineer, Web & API Lead — Arby's & Buffalo Wild Wings",
    company: 'Capgemini (Client: Inspire Brands) — Bengaluru, India',
    period: 'Jul 2020 – Apr 2022',
    bullets: [
      'Authored the majority of the Java automation framework (Selenium, Appium, REST Assured, Cucumber BDD, TestNG) as a first-year engineer: flow structure, reusable utilities, test data handling, and reporting.',
      'Sole engineer on Web and API automation and co-owner of mobile app automation; grew the Arby’s and Buffalo Wild Wings suites to 2,000+ automated tests and took on automation-lead duties within 18 months.',
      'Configured GitLab CI/CD pipelines for scheduled and on-demand runs with brand, environment, and suite selection.',
      'Reviewed and merged 200+ merge requests in a shared multi-brand codebase, resolving conflicts and onboarding new engineers to the framework.',
    ],
    tags: [
      'Java',
      'Selenium',
      'Appium',
      'REST Assured',
      'Cucumber BDD',
      'GitLab CI/CD',
      'TestNG',
    ],
  },
  {
    role: 'Test Automation Engineer — T-Mobile Customer Care & Retail',
    company: 'Capgemini (Client: T-Mobile) — Bengaluru, India',
    period: 'Jan 2020 – Jun 2020',
    bullets: [
      'Automated desktop, web, mobile, and API tests with Tosca and Appium (Java); API checks in Postman; defects tracked in Jira.',
    ],
    tags: ['Tosca', 'Appium', 'Java', 'Postman', 'Jira'],
  },
  {
    role: 'QA Trainee — Test Automation',
    company: 'Capgemini — Pune, India',
    period: 'Aug 2019 – Dec 2019',
    bullets: ['Automated tests for web and Windows applications with UFT.'],
    tags: ['UFT'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: '🧪',
    name: 'Test Automation',
    skills: [
      'Playwright (Java, TypeScript)',
      'Selenium WebDriver',
      'Appium',
      'Maestro',
      'REST Assured',
      'TestNG',
      'JUnit',
      'Cucumber BDD (Gherkin)',
      'Tosca',
    ],
  },
  {
    icon: '💻',
    name: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    icon: '🏗️',
    name: 'CI/CD & Test Infrastructure',
    skills: [
      'GitLab CI/CD',
      'BrowserStack',
      'Docker',
      'Gradle',
      'Git',
      'Parallel & Cross-Device Execution',
      'Quality Gates',
      'Test Orchestration',
      'Secrets Management',
      'AWS (Cloud Practitioner)',
    ],
  },
  {
    icon: '🗄️',
    name: 'APIs, Data & Integration Validation',
    skills: [
      'REST API Testing',
      'API Contract Testing',
      'API Mocking',
      'Microservices',
      'Postman',
      'Swagger',
      'MS SQL Server',
      'MongoDB',
      'Azure Service Bus',
      'Azure-hosted DBs',
    ],
  },
  {
    icon: '📈',
    name: 'Observability & Release',
    skills: [
      'Splunk',
      'New Relic',
      'Root-Cause Analysis (Logs)',
      'Custom Metrics & Dashboards',
      'Android adb / Device Logs',
      'Staged-Rollout Validation',
      'Optimizely',
      'Contentful',
    ],
  },
  {
    icon: '🤖',
    name: 'AI-Assisted Engineering',
    skills: [
      'MCP Servers',
      'Agent Skills',
      'Prompt-Driven Test Generation',
      'LLM-Based Evaluation',
      'Claude API',
      'Claude Code',
      'GitHub Copilot',
    ],
  },
  {
    icon: '📋',
    name: 'Quality Practice & Test Management',
    skills: [
      'Resiliency Testing',
      'Circuit-Breaker Testing',
      'POS Integrations (Micros, Infor, NCR, Brink)',
      'Payments & POS Reconciliation',
      'Accessibility (UsableNet, VoiceOver, TalkBack)',
      'A/B & Feature-Flag Validation',
      'UAT',
      'Jira',
      'Xray',
      'qTest',
      'Confluence',
      'ReportPortal',
      'Scrum/Agile',
    ],
  },
];

export const certifications: Certification[] = [
  {
    icon: '✳️',
    name: 'Claude Certified Associate – Foundations',
    issuer: 'Anthropic',
    issued: 'Nov 2026',
    description:
      'Validates practical, responsible use of Claude for real work: prompting, evaluating output, and knowing when human review is needed.',
    url: 'https://www.credly.com/badges/768b412d-8d23-4faf-b8ac-5c1b68247e01/public_url',
    badge: '/claude-certified-associate-foundations.png',
  },
  {
    icon: '☁️',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
  },
  {
    icon: '🤖',
    name: 'AWS Generative AI Essentials',
    issuer: 'Amazon Web Services',
  },
  {
    icon: '🎯',
    name: 'Tosca L1 & qTest',
    issuer: 'Tricentis',
  },
];

export const projects: Project[] = [
  {
    icon: '🛠️',
    name: 'Unified QA Platform',
    period: 'Jan 2026 – Present',
    description:
      'Designed and built the platform architecture as sole developer, in personal time: test orchestration, GitLab CI/CD and Jira/Xray integrations, a web dashboard, a Gherkin-to-Jira importer, MCP servers, agent skill libraries, prompt-driven test generation, AI-assisted failure triage and self-healing locators. The linked repo, shuriken (Python), is a sanitized, AI-assisted public rebuild of its core architecture, with dummy data in place of the production codebase.',
    tags: [
      'Java',
      'GitLab CI/CD',
      'BrowserStack',
      'Jira/Xray',
      'MCP Servers',
      'Agent Skills',
    ],
    url: 'https://github.com/kavikar/shuriken',
    featured: true,
  },
  {
    icon: '🎲',
    name: 'GameNight',
    period: '2026',
    description:
      'A scorekeeper and session tracker for board and card games (Phase 10, UNO, Ticket to Ride, ONO 99, Poker Night): one universal game engine with independent rule modules, undo and correction replay, per-player stats, and a mobile-first scoring UI. Covered by 49 unit and integration tests and 16 Playwright end-to-end and accessibility (axe) tests.',
    tags: ['Next.js', 'React', 'TypeScript', 'Zod', 'Vitest', 'Playwright', 'axe'],
    url: 'https://github.com/kavikar/game-over',
    live: 'https://game-over-nine-lac.vercel.app/',
    featured: true,
  },
  {
    icon: '🧪',
    name: 'play-left',
    period: '2026',
    description:
      'A standalone multi-brand Playwright web E2E framework, split out of shuriken as a companion repository: brand facts live in a typed registry instead of forked specs, and a dependency-free demo storefront means CI needs no external network.',
    tags: [
      'Playwright',
      'TypeScript',
      'Multi-Brand Testing',
      'CI/CD',
      'Test Architecture',
    ],
    url: 'https://github.com/kavikar/play-left',
  },
  {
    icon: '🔌',
    name: 'OpenAPI-to-Tests CLI',
    period: 'Personal project',
    description:
      'A CLI that turns OpenAPI specs into structured API test cases via the Claude API.',
    tags: ['Claude API', 'OpenAPI', 'API Testing', 'CLI'],
  },
  {
    icon: '🏏',
    name: 'Cricket Field Planner',
    period: '2026',
    description:
      'A cricket field-setting tool (Android + web) that validates fielder placements against ICC regulations and exports a tactical plan.',
    tags: ['Kotlin', 'Android', 'React', 'TypeScript', 'Cloudflare Pages', 'Gemini API'],
    url: 'https://github.com/kavikar/CricketFieldPlanner/tree/main/web',
    live: 'https://cricketfieldplanner.com',
  },
  {
    icon: '☕',
    name: 'Java Test Automation Framework',
    period: '2022',
    description:
      'A Java test automation framework built on Selenium, Cucumber and Gradle, with BDD feature files and a page-object structure.',
    tags: ['Java', 'Selenium', 'Cucumber', 'Gradle', 'BDD'],
    url: 'https://github.com/kavikar/Test_Automation_Framework',
  },
];
