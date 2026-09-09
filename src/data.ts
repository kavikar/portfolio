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
    role: 'QA Lead — PLATE QA Platform / Sonic E2E',
    company: 'Inspire Brands (via Capgemini) — Atlanta, GA',
    period: 'Jan 2024 – Present',
    description:
      "Architected and own PLATE, an enterprise QA automation platform, as its primary contributor — driving architecture across test orchestration, CI/CD and Jira/Xray integration. Built AI-assisted QA tooling including prompt-driven automation runners and EPIC/TE testcase generation, and Snowflake dashboards giving stakeholders data-driven visibility into release readiness. Built the Maestro E2E framework for Sonic with smoke suites, shared flows and critical-path coverage. Led a cross-functional QA team of 8 for ~1 year, and currently contributing to Dunkin' loyalty resiliency and Fiserv payment error mapping.",
    tags: [
      'Java',
      'Maestro',
      'BrowserStack',
      'GitLab CI/CD',
      'Jira/Xray',
      'Snowflake',
      'AI-Assisted QA',
    ],
  },
  {
    role: 'E2E POS QA Engineer — Sonic POS & Digital',
    company: 'Inspire Brands (via Capgemini) — Atlanta, GA',
    period: 'May 2023 – Dec 2023',
    description:
      'Validated integrations between digital ordering platforms and POS systems (Micros, Infor) across ordering, payment and pricing workflows, ensuring calculation accuracy before production release. Performed backend API testing with Rest Assured and validated data integrity using SQL and MongoDB. Gathered test requirements from stakeholders and authored detailed manual test plans for UAT cycles, defining the quality metrics used to sign off on release readiness for in-store operations at scale.',
    tags: ['Rest Assured', 'SQL', 'MongoDB', 'POS Integration', 'UAT', 'Test Planning'],
  },
  {
    role: 'QA Automation Engineer — BWW Choice',
    company: 'Inspire Brands (via Capgemini) — Bengaluru, India',
    period: 'May 2022 – Apr 2023',
    description:
      'Led automation efforts for Buffalo Wild Wings Choice, a new in-store restaurant experience initiative. Automated web and mobile features using Java, Selenium, Appium, and Cucumber BDD. Implemented API automation with Rest Assured and database validations with SQL. Coordinated task assignments across the team.',
    tags: ['Java', 'Selenium', 'Appium', 'Cucumber BDD', 'Rest Assured', 'SQL'],
  },
  {
    role: "QA Automation Engineer — Arby's & Buffalo Wild Wings",
    company: 'Inspire Brands (via Capgemini) — Bengaluru, India',
    period: 'Jul 2020 – Apr 2022',
    description:
      'Joined a multi-platform automation framework at early-stage build-out and grew it to 2,000+ tests across web, mobile, and API layers using Java, Selenium, Appium, Rest Assured, and Cucumber BDD. Assumed lead responsibilities as the team scaled down, integrating test suites into GitLab CI/CD for nightly regression runs.',
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
    role: 'QA Automation Engineer — Retail & Care',
    company: 'T-Mobile — Bengaluru, India',
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
    skills: ['GitLab CI/CD', 'BrowserStack', 'Docker', 'Gradle', 'Git', 'PLATE Platform'],
  },
  {
    icon: '📋',
    name: 'Test Management',
    skills: ['Jira', 'Xray', 'qTest', 'ReportPortal', 'Test Planning', 'Defect Tracking'],
  },
  {
    icon: '💻',
    name: 'Languages',
    skills: ['Java', 'Python', 'SQL', 'Bash'],
  },
  {
    icon: '🗄️',
    name: 'Data & APIs',
    skills: ['REST APIs', 'Postman', 'SQL', 'MongoDB', 'Snowflake', 'API Automation'],
  },
  {
    icon: '☁️',
    name: 'Cloud & Tools',
    skills: ['AWS', 'Docker', 'BrowserStack', 'Snowflake', 'Git', 'Postman'],
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
    name: 'Tosca Automation Specialist (L1) & TQL',
    issuer: 'Tricentis',
  },
  {
    icon: '📊',
    name: 'qTest Specialist',
    issuer: 'Tricentis',
  },
  {
    icon: '🤝',
    name: 'RPA Specialist',
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
    name: 'PLATE — Test Infrastructure Platform',
    period: 'Jan 2026 – Present',
    description:
      "Independently built and maintained PLATE, a test infrastructure platform integrating CI/CD pipeline orchestration, BrowserStack mobile execution, and automated Jira/Xray workflow synchronization. Applied across multiple Inspire Brands projects (Sonic, BSL, Dunkin') as an ongoing personal tooling effort.",
    tags: [
      'Java',
      'GitLab CI/CD',
      'BrowserStack',
      'Jira/Xray',
      'REST API',
      'Infrastructure',
    ],
  },
  {
    icon: '📱',
    name: 'Maestro E2E Framework — Sonic',
    period: 'Jan 2024 – Feb 2026',
    description:
      "Built a production Maestro end-to-end framework with smoke suites, shared flows, and critical-path coverage for Sonic's digital and POS systems. Introduced standardized runners (Playwright, Maestro AOS TE) reused across the Sonic testing scope, and integrated BrowserStack mobile pipelines with automated result reporting.",
    tags: ['Maestro', 'Playwright', 'BrowserStack', 'GitLab CI/CD', 'Java'],
  },
  {
    icon: '📅',
    name: 'Personal Tracker',
    period: '2026',
    description:
      "A calendar-centric tracker for running concurrent goals on one date grid — job applications, interview prep, admin tasks and habits. Local-first with IndexedDB, no account, works offline. Built the way I'd want a service at work built: typed, unit and Playwright E2E tested, linted in CI, containerized and documented.",
    tags: ['TypeScript', 'Vite', 'Playwright', 'Vitest', 'Docker', 'GitHub Actions'],
    url: 'https://github.com/kavikar/personal-tracker',
    live: 'https://personal-tracker-weld.vercel.app',
  },
  {
    icon: '🏏',
    name: 'FieldPlanner Pro',
    period: '2026',
    description:
      'Cricket field planning app in two forms: a Kotlin Android app and a React + TypeScript web version. Drag fielders around an interactive pitch, validate placements against ICC fielding regulations for T20/ODI/Test, mirror the field for left-handed batters, and export a tactical plan. AI advice runs through a Cloudflare Pages Function so the API key stays server-side.',
    tags: ['Kotlin', 'React', 'TypeScript', 'Cloudflare Pages', 'Gemini API'],
    url: 'https://github.com/kavikar/CicketFieldSetter/tree/main/web',
  },
  {
    icon: '☕',
    name: 'Test Automation Framework',
    period: '2022',
    description:
      'A Java test automation framework built on Selenium, Cucumber and Gradle, with BDD feature files and a page-object structure — an early project that shaped how I approach framework design today.',
    tags: ['Java', 'Selenium', 'Cucumber', 'Gradle', 'BDD'],
    url: 'https://github.com/kavikar/Test_Automation_Framework',
  },
  {
    icon: '🎤',
    name: 'Emotion Recognition from Speech',
    period: 'Jan 2019 – Apr 2019',
    description:
      'Built a machine learning system to classify emotions from speech audio using Support Vector Machine (SVM) in Python. Processed audio features and trained the model on labeled datasets for reliable emotion detection.',
    tags: ['Python', 'SVM', 'Machine Learning', 'Audio Processing', 'scikit-learn'],
  },
];
