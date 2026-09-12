export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
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
    role: 'QA Lead — Sonic E2E',
    company: 'Inspire Brands (via Capgemini) — Atlanta, GA',
    period: 'Jan 2024 – Present',
    description:
      "Own test strategy and automation architecture for Sonic's end-to-end digital ordering and POS integration platform across Web, Mobile and API. Built the Maestro E2E framework and standardized Playwright/Maestro runners reused across brands, plus CI/CD test infrastructure integrating BrowserStack execution and quality gates. Also technical lead for the automation team, drove repo restructuring and standardized deployment flows, and now focus on loyalty-platform resiliency and payment error handling.",
    tags: ['Java', 'Maestro', 'BrowserStack', 'GitLab CI/CD', 'Jira/Xray'],
  },
  {
    role: 'E2E POS QA Engineer — Sonic POS & Digital Integration',
    company: 'Inspire Brands (via Capgemini) — Atlanta, GA',
    period: 'May 2023 – Dec 2023',
    description:
      'Performed system integration testing across POS and digital-ordering platforms — built and maintained automated regression and smoke test suites across Web, Mobile and API layers, validating integrations between digital ordering platforms and POS systems (Micros, Infor) across ordering, payment and pricing workflows. Performed backend API testing with Rest Assured and validated data integrity using SQL and MongoDB. Partnered with stakeholders during UAT to define test requirements and support reliable in-store operations at scale.',
    tags: ['Rest Assured', 'SQL', 'MongoDB', 'POS Integration', 'UAT', 'Test Planning'],
  },
  {
    role: 'QA Automation Engineer — Buffalo Wild Wings (BWW Choice)',
    company: 'Inspire Brands (via Capgemini) — Bengaluru, India',
    period: 'May 2022 – Apr 2023',
    description:
      "Automated Web and Mobile features for Buffalo Wild Wings' in-store dining experience using Java, Selenium, Appium and Cucumber BDD, integrating suites into GitLab CI/CD with ReportPortal and Jira reporting.",
    tags: ['Java', 'Selenium', 'Appium', 'Cucumber BDD', 'GitLab CI/CD', 'ReportPortal'],
  },
  {
    role: "QA Automation Engineer — Arby's & Buffalo Wild Wings",
    company: 'Inspire Brands (via Capgemini) — Bengaluru, India',
    period: 'Jul 2020 – Apr 2022',
    description:
      'Joined a multi-platform automation framework at early-stage build-out and grew it to 2,000+ tests across Web, Mobile, and API layers using Java, Selenium, Appium, Rest Assured, and Cucumber BDD. Managed CI/CD schedules on GitLab, conducted code reviews, and mentored team members on maintainable, scalable automation practices.',
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
    role: 'QA Automation Engineer — Customer Care & Retail',
    company: 'T-Mobile (via Capgemini) — Bengaluru, India',
    period: 'Jan 2020 – Jun 2020',
    description:
      'Tested desktop, web, mobile, and API applications for retail and care operations using Tosca and Appium (Java). Validated APIs with Postman and tracked defects in Jira in close collaboration with development teams.',
    tags: ['Tosca', 'Appium', 'Java', 'Postman', 'Jira'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: '🧪',
    name: 'Test Automation',
    skills: [
      'Selenium WebDriver',
      'Playwright',
      'Appium',
      'Rest Assured',
      'Maestro',
      'TestNG',
      'Cucumber BDD',
      'Tosca',
    ],
  },
  {
    icon: '🏗️',
    name: 'Infrastructure & CI/CD',
    skills: ['GitLab CI/CD', 'BrowserStack', 'Docker', 'Gradle', 'Git'],
  },
  {
    icon: '📋',
    name: 'Test Management',
    skills: [
      'Jira',
      'Xray',
      'qTest',
      'Confluence',
      'ReportPortal',
      'Test Planning',
      'Defect Tracking',
    ],
  },
  {
    icon: '💻',
    name: 'Languages',
    skills: ['Java', 'Python', 'SQL'],
  },
  {
    icon: '🗄️',
    name: 'Data & APIs',
    skills: ['REST APIs', 'Postman', 'Swagger', 'SQL', 'MongoDB', 'API Automation'],
  },
  {
    icon: '☁️',
    name: 'Cloud & Tools',
    skills: ['AWS', 'Docker', 'BrowserStack', 'Git', 'Postman'],
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
    icon: '🎭',
    name: 'Agent-Based Playwright Framework',
    period: '2026',
    description:
      'A Playwright framework built on PLATE, using agents and skills instead of a fixed script library, syncing cases, runs and results with Jira/Xray automatically.',
    tags: ['Playwright', 'AI Agents', 'Jira/Xray', 'Knowledge Base', 'Test Automation'],
  },
  {
    icon: '🛠️',
    name: 'PLATE — AI-Assisted QA Platform',
    period: 'Jan 2026 – Present',
    description:
      'Independently designed and built the full architecture, as sole developer, in personal time — CI/CD orchestration, BrowserStack mobile execution and Jira/Xray sync in one platform. A genericized public release of the same architecture is linked below.',
    tags: [
      'Java',
      'GitLab CI/CD',
      'BrowserStack',
      'Jira/Xray',
      'REST API',
      'AI-Assisted QA',
    ],
    url: 'https://github.com/kavikar/shuriken',
  },
  {
    icon: '📱',
    name: 'Maestro E2E Framework',
    period: '2026',
    description:
      'A Maestro end-to-end framework with smoke suites, shared flows and critical-path coverage across digital ordering and POS systems.',
    tags: ['Maestro', 'Playwright', 'BrowserStack', 'GitLab CI/CD', 'Java'],
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
    icon: '🧪',
    name: 'Multi-Brand Playwright Framework',
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
    icon: '☕',
    name: 'Test Automation Framework',
    period: '2022',
    description:
      'A Java test automation framework built on Selenium, Cucumber and Gradle, with BDD feature files and a page-object structure.',
    tags: ['Java', 'Selenium', 'Cucumber', 'Gradle', 'BDD'],
    url: 'https://github.com/kavikar/Test_Automation_Framework',
  },
  {
    icon: '🎤',
    name: 'Emotion Recognition from Speech',
    period: 'Jan 2019 – Apr 2019',
    description:
      'A machine learning system that classifies emotions from speech audio using an SVM in Python.',
    tags: ['Python', 'SVM', 'Machine Learning', 'Audio Processing', 'scikit-learn'],
  },
];
