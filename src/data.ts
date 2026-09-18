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
}

export const experiences: Experience[] = [
  {
    role: 'SDET / Automation Technical Lead — Multi-Brand Digital Ordering & POS Platforms',
    company: 'Capgemini (Client: Inspire Brands) — Atlanta, GA',
    period: 'Apr 2026 – Present',
    bullets: [
      'Own automation standards and framework direction across four Inspire Brands properties (Sonic, Buffalo Wild Wings, Dunkin’, Arby’s), leading CI/CD test execution end to end.',
      'Rebuilt Sonic’s regression suite on AI agent skills and prompt-driven test generation, with human review gates before any suite is trusted.',
      'Designed resiliency and circuit-breaker testing for Dunkin’’s loyalty platform under induced failure conditions.',
      'Led contract, regression, and integration validation for Buffalo Wild Wings’ Business Service Layer migration.',
    ],
    tags: ['AI Agent Skills', 'Prompt-Driven Testing', 'CI/CD', 'Resiliency Testing'],
  },
  {
    role: 'SDET / Automation Lead — Sonic E2E Digital Ordering & POS Platform',
    company: 'Capgemini (Client: Inspire Brands) — Atlanta, GA',
    period: 'Jan 2024 – Mar 2026',
    bullets: [
      'Owned test strategy and automation architecture for Sonic’s end-to-end digital ordering and POS integration platform across Web, Mobile, and API.',
      'Built CI/CD test infrastructure integrating BrowserStack execution, quality gates, and Slack/email reporting.',
      'Built the Maestro mobile E2E framework and standardized Playwright and Maestro AOS TE runners for Android, reused across brands.',
      'Drove repository and domain restructuring (config registry, loader updates, security hardening); led A/B and feature-flag validation (Optimizely, Contentful) and accessibility testing (UsableNet, VoiceOver, TalkBack).',
    ],
    tags: ['Maestro', 'Playwright', 'BrowserStack', 'GitLab CI/CD', 'Accessibility'],
  },
  {
    role: 'SDET — Sonic POS, Payments & Digital Integration',
    company: 'Capgemini (Client: Inspire Brands) — Atlanta, GA',
    period: 'May 2023 – Dec 2023',
    bullets: [
      'Performed POS integration testing across Micros and Infor systems, reconciling pricing and payment mismatches between the POS, ordering platform, and payment processor.',
      'Built and maintained automated regression and smoke suites across Web, Mobile, and API layers with Rest Assured.',
      'Validated data integrity across systems using SQL and MongoDB.',
      'Partnered with stakeholders during UAT to define test requirements for reliable in-store operations at scale.',
    ],
    tags: ['Rest Assured', 'SQL', 'MongoDB', 'POS Integration', 'UAT'],
  },
  {
    role: 'SDET — Buffalo Wild Wings (BWW Choice)',
    company: 'Capgemini (Client: Inspire Brands) — Bengaluru, India',
    period: 'May 2022 – Apr 2023',
    bullets: [
      'Sole automation engineer for BWW Choice’s mobile web and API layers (native app out of scope).',
      'Automated in-store dining features using Java, Selenium, Appium, and Cucumber BDD.',
      'Integrated suites into GitLab CI/CD with ReportPortal and Jira reporting.',
    ],
    tags: ['Java', 'Selenium', 'Appium', 'Cucumber BDD', 'GitLab CI/CD', 'ReportPortal'],
  },
  {
    role: "Automation Engineer, Web & API Lead — Arby's & Buffalo Wild Wings",
    company: 'Capgemini (Client: Inspire Brands) — Bengaluru, India',
    period: 'Jul 2020 – Apr 2022',
    bullets: [
      'Authored most of the Java automation framework as a first-year engineer; became sole owner of Web and API automation within 18 months, co-owned mobile.',
      "Grew suites to 2,000+ automated tests across Web, Mobile, and API for Arby's and Buffalo Wild Wings.",
      'Reviewed and merged 200+ merge requests, resolving conflicts on a shared multi-brand codebase.',
      'Managed CI/CD schedules on GitLab and mentored team members on maintainable, scalable automation practices.',
    ],
    tags: [
      'Java',
      'Selenium',
      'Appium',
      'Rest Assured',
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
      'Tested desktop, web, mobile, and API applications for retail and care operations using Tosca and Appium (Java).',
      'Validated APIs with Postman and tracked defects in Jira in close collaboration with development teams.',
    ],
    tags: ['Tosca', 'Appium', 'Java', 'Postman', 'Jira'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: '💻',
    name: 'Languages',
    skills: ['Java', 'Python', 'TypeScript / JavaScript', 'SQL'],
  },
  {
    icon: '🏗️',
    name: 'CI/CD & Build Tooling',
    skills: [
      'GitLab CI/CD',
      'Gradle',
      'Git',
      'Docker',
      'BrowserStack',
      'AWS (Cloud Practitioner)',
    ],
  },
  {
    icon: '🧪',
    name: 'Test Frameworks',
    skills: [
      'Selenium WebDriver',
      'Appium',
      'Playwright',
      'Maestro (incl. AOS TE)',
      'Rest Assured',
      'TestNG',
      'Cucumber BDD',
      'Tosca',
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
      'Claude',
      'GitHub Copilot',
    ],
  },
  {
    icon: '🗄️',
    name: 'Data & APIs',
    skills: ['SQL', 'MongoDB', 'REST APIs', 'Postman', 'Swagger', 'Azure Service Bus'],
  },
  {
    icon: '📋',
    name: 'Quality Practice',
    skills: [
      'Resiliency / Fault-Tolerance Testing',
      'POS & Payments Integration Testing',
      'Accessibility Testing',
      'A/B & Feature-Flag Validation',
      'Jira / Xray / qTest / Confluence / ReportPortal',
    ],
  },
];

export const certifications: Certification[] = [
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
    name: 'Tosca L1, TQL, qTest & RPA Specialist',
    issuer: 'Tricentis',
  },
  {
    icon: '🎓',
    name: 'Harvard ManageMentor',
    issuer: 'Harvard Business School',
  },
];

export const projects: Project[] = [
  {
    icon: '🛠️',
    name: 'Unified QA Platform',
    period: 'Jan 2026 – Present',
    description:
      'Independently designed and built the full architecture, as sole developer, in personal time — test orchestration, CI/CD tooling, Jira/Xray sync, MCP servers, agent skills and prompt-driven test-generation runners in one platform. Sanitized public rebuild below, with dummy data in place of the production codebase.',
    tags: [
      'Java',
      'GitLab CI/CD',
      'BrowserStack',
      'Jira/Xray',
      'MCP Servers',
      'Agent Skills',
    ],
    url: 'https://github.com/kavikar/shuriken',
  },
  {
    icon: '🧪',
    name: 'play-left',
    period: '2026',
    description:
      'A multi-brand Playwright E2E framework with brand facts in a typed registry instead of forked specs, and a dependency-free demo storefront so CI needs no external network.',
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
    icon: '📅',
    name: 'Personal Tracker',
    period: '2026',
    description:
      'A calendar-centric tracker for running concurrent goals — job applications, interview prep, admin tasks and habits — local-first with IndexedDB, no account needed.',
    tags: ['TypeScript', 'Vite', 'Playwright', 'Vitest', 'Docker', 'GitHub Actions'],
    url: 'https://github.com/kavikar/personal-tracker',
    live: 'https://personal-tracker-weld.vercel.app',
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
