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
}

export const experiences: Experience[] = [
  {
    role: "QA Automation Engineer",
    company: "Inspire Brands (via Capgemini) — Atlanta, GA",
    period: "May 2023 – Present",
    description:
      "Independently architected PLATE, a test infrastructure platform integrating CI/CD pipeline orchestration, BrowserStack mobile execution, and automated Jira/Xray workflow sync — applied across multiple brand projects. Built the Maestro E2E framework for Sonic with smoke suites, shared flows, and critical-path coverage. Led a cross-functional QA team of 8 for ~1 year, and currently contributing to Dunkin' loyalty resiliency and Fiserv payment error mapping.",
    tags: ["Java", "Maestro", "BrowserStack", "GitLab CI/CD", "Jira/Xray", "Rest Assured", "SQL", "MongoDB"],
  },
  {
    role: "QA Automation Engineer — BWW Choice",
    company: "Inspire Brands (via Capgemini) — Bengaluru, India",
    period: "May 2022 – Apr 2023",
    description:
      "Led automation efforts for Buffalo Wild Wings Choice, a new in-store restaurant experience initiative. Automated web and mobile features using Java, Selenium, Appium, and Cucumber BDD. Implemented API automation with Rest Assured and database validations with SQL. Coordinated task assignments across the team.",
    tags: ["Java", "Selenium", "Appium", "Cucumber BDD", "Rest Assured", "SQL"],
  },
  {
    role: "QA Automation Engineer — Arby's & Buffalo Wild Wings",
    company: "Inspire Brands (via Capgemini) — Bengaluru, India",
    period: "Jul 2020 – Apr 2022",
    description:
      "Joined a multi-platform automation framework at early-stage build-out and grew it to 2,000+ tests across web, mobile, and API layers using Java, Selenium, Appium, Rest Assured, and Cucumber BDD. Assumed lead responsibilities as the team scaled down, integrating test suites into GitLab CI/CD for nightly regression runs.",
    tags: ["Java", "Selenium", "Appium", "Rest Assured", "Cucumber BDD", "GitLab CI/CD", "TestNG"],
  },
  {
    role: "QA Automation Engineer — Retail & Care",
    company: "T-Mobile — Bengaluru, India",
    period: "Jan 2020 – Jun 2020",
    description:
      "Tested desktop, web, mobile, and API applications for retail and care operations using Tosca and Appium (Java). Validated APIs with Postman and tracked defects in Jira in close collaboration with development teams.",
    tags: ["Tosca", "Appium", "Java", "Postman", "Jira"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: "🧪",
    name: "Test Automation",
    skills: ["Selenium WebDriver", "Appium", "Rest Assured", "Maestro", "TestNG", "Cucumber BDD", "Tosca"],
  },
  {
    icon: "🏗️",
    name: "Infrastructure & CI/CD",
    skills: ["GitLab CI/CD", "BrowserStack", "Gradle", "Git", "PLATE Platform"],
  },
  {
    icon: "📋",
    name: "Test Management",
    skills: ["Jira", "Xray", "Test Planning", "Defect Tracking", "Agile/Scrum"],
  },
  {
    icon: "💻",
    name: "Languages",
    skills: ["Java", "Python", "SQL", "Bash"],
  },
  {
    icon: "🗄️",
    name: "Data & APIs",
    skills: ["REST APIs", "Postman", "SQL", "MongoDB", "API Automation"],
  },
  {
    icon: "☁️",
    name: "Cloud & Tools",
    skills: ["AWS", "BrowserStack", "MongoDB", "Git", "Postman"],
  },
];

export const certifications: Certification[] = [
  {
    icon: "☁️",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    icon: "🤖",
    name: "AWS Generative AI Essentials",
    issuer: "Amazon Web Services",
  },
];

export const projects: Project[] = [
  {
    icon: "🛠️",
    name: "PLATE — Test Infrastructure Platform",
    period: "Jan 2026 – Present",
    description:
      "Independently built and maintained PLATE, a test infrastructure platform integrating CI/CD pipeline orchestration, BrowserStack mobile execution, and automated Jira/Xray workflow synchronization. Applied across multiple Inspire Brands projects (Sonic, BSL, Dunkin') as an ongoing personal tooling effort.",
    tags: ["Java", "GitLab CI/CD", "BrowserStack", "Jira/Xray", "REST API", "Infrastructure"],
  },
  {
    icon: "📱",
    name: "Maestro E2E Framework — Sonic",
    period: "Jan 2024 – Feb 2026",
    description:
      "Built a production Maestro end-to-end framework with smoke suites, shared flows, and critical-path coverage for Sonic's digital and POS systems. Introduced standardized runners (Playwright, Maestro AOS TE) reused across the Sonic testing scope, and integrated BrowserStack mobile pipelines with automated result reporting.",
    tags: ["Maestro", "Playwright", "BrowserStack", "GitLab CI/CD", "Java"],
  },
  {
    icon: "🎤",
    name: "Emotion Recognition from Speech",
    period: "Jan 2019 – Apr 2019",
    description:
      "Built a machine learning system to classify emotions from speech audio using Support Vector Machine (SVM) in Python. Processed audio features and trained the model on labeled datasets for reliable emotion detection.",
    tags: ["Python", "SVM", "Machine Learning", "Audio Processing", "scikit-learn"],
  },
];
