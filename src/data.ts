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
  date: string;
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
    role: "QA & Automation Lead",
    company: "Capgemini — Atlanta, Georgia, USA",
    period: "2019 – Present",
    description:
      "Leading automation and quality assurance initiatives across web, mobile, and API platforms. Designing and implementing end-to-end test frameworks, driving CI/CD pipeline integration, and championing a quality-first engineering culture across cross-functional teams.",
    tags: ["Selenium", "Appium", "REST Assured", "Jenkins", "AWS", "Agile", "qTest"],
  },
  {
    role: "QA Engineer",
    company: "Capgemini — Bengaluru, Karnataka, India",
    period: "2019",
    description:
      "Delivered automated testing solutions for enterprise clients, focusing on functional, regression, and API testing. Collaborated with development teams to integrate quality checks early in the delivery pipeline.",
    tags: ["Tricentis Tosca", "Selenium", "API Testing", "Agile"],
  },
  {
    role: "Intern — QA Automation",
    company: "Pune, Maharashtra, India",
    period: "2018 – 2019",
    description:
      "Developed hands-on experience in test automation scripting and exploratory testing, contributing to live client projects during academic internship.",
    tags: ["Selenium", "Java", "TestNG"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    icon: "🧪",
    name: "Test Automation",
    skills: ["Selenium WebDriver", "Appium", "REST Assured", "Tricentis Tosca", "TestNG", "JUnit"],
  },
  {
    icon: "☁️",
    name: "Cloud & DevOps",
    skills: ["AWS", "Jenkins", "CI/CD Pipelines", "Docker", "Git", "GitHub Actions"],
  },
  {
    icon: "📋",
    name: "Test Management",
    skills: ["qTest", "JIRA", "Test Planning", "Defect Management", "Agile/Scrum"],
  },
  {
    icon: "💻",
    name: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Bash"],
  },
  {
    icon: "📱",
    name: "Mobile & API",
    skills: ["Mobile Testing", "REST API", "Postman", "API Automation", "BDD"],
  },
  {
    icon: "🤖",
    name: "Emerging Tech",
    skills: ["Generative AI", "Machine Learning basics", "RPA (Tricentis)", "SVM"],
  },
];

export const certifications: Certification[] = [
  {
    icon: "☁️",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Mar 2023",
  },
  {
    icon: "🤖",
    name: "AWS Partner: Generative AI Essentials – Business",
    issuer: "Amazon Web Services",
    date: "Nov 2023",
  },
  {
    icon: "⚡",
    name: "Jenkins: Automating Delivery Pipeline",
    issuer: "Coursera",
    date: "Apr 2022",
  },
  {
    icon: "🔄",
    name: "Agile Software Development",
    issuer: "Coursera",
    date: "Apr 2022",
  },
  {
    icon: "🧩",
    name: "Tricentis Tosca Automation Engineer",
    issuer: "Tricentis",
    date: "2022",
  },
  {
    icon: "📋",
    name: "qTest Specialist",
    issuer: "Tricentis",
    date: "2022",
  },
];

export const projects: Project[] = [
  {
    icon: "🎤",
    name: "Emotion Recognition from Speech",
    period: "Jan 2019 – Apr 2019",
    description:
      "Built a machine learning system to classify emotions from speech audio using Support Vector Machine (SVM) in Python. Processed audio features and trained the model on labeled datasets to achieve reliable emotion detection.",
    tags: ["Python", "SVM", "Machine Learning", "Audio Processing", "scikit-learn"],
  },
  {
    icon: "🚨",
    name: "Panic Alarm Button",
    period: "Feb 2018 – Apr 2018",
    description:
      "Designed and implemented an integrated circuit (IC) based panic alarm system as a hardware project, focusing on low-latency trigger response and reliable signal transmission for safety applications.",
    tags: ["IC Design", "Embedded Systems", "Hardware", "Electronics"],
  },
];
