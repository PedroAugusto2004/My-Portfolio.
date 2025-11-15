export interface Skill {
  name: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
  icon?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string | number;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export interface ProjectLink {
  name: string;
  url: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  projectLinks?: ProjectLink[];
}

export const resumeData = {
  name: "Pedro Augusto",
  title: "Software Engineer | Web & App Development Specialist",
  contact: {
    email: "pedro.augusto.software@gmail.com",
    linkedin: "https://www.linkedin.com/in/pedro-augusto-cabral-oliveira/",
    github: "https://github.com/PedroAugusto2004",
    whatsapp: "+55 34 99281-5713",
    portfolioUrl: "", // This website, will be populated dynamically if needed
  },
  summary: "I’m a Software Engineer specialized in full stack development and AI. I design, build, and deploy scalable web and mobile applications, develop AI-powered solutions, and optimize machine learning models for real-world performance. My expertise spans end-to-end system architecture, rapid prototyping, API development, cloud deployment, and implementing AI workflows from experimentation to production.",
  education: [
    {
      degree: "B.S. in Analysis and Systems Development",
      institution: "Estácio University",
      period: "Expected 2026",
    },
  ] as EducationEntry[],
  certifications: [
    { name: "CS50x: Introduction to Computer Science", issuer: "Harvard University" },
    { name: "CS50AI: Introduction to Artificial Intelligence with Python", issuer: "Harvard University" },
    { name: "CS50C: Introduction to Cybersecurity", issuer: "Harvard University" },
    { name: "Front End Development Certification", issuer: "freeCodeCamp" },
    { name: "100+ hours of training", issuer: "DIO (web dev, cloud, software engineering)" },
  ] as Certification[],
  achievements: [
    {
      title: "VOX ASTRA Hackathon Winner",
      description: "$300k sponsor prize pool, featured in article, selected from 500+ teams.",
    },
  ] as Achievement[],
  skills: [
    {
      category: "Languages",
      icon: "Code2",
      skills: [
        { name: "Python" }, { name: "JavaScript" }, { name: "TypeScript" }, { name: "SQL" }, { name: "C# / .NET" }, { name: "C" },
      ],
    },
    {
      category: "Frontend",
      icon: "Monitor",
      skills: [
        { name: "React" }, { name: "Next.js" }, { name: "Tailwind" }, { name: "Framer Motion" }, { name: "HTML/CSS" }, 
        { name: "Bootstrap" }, { name: "Responsive & Mobile-First Design" }, { name: "UI/UX Optimization" },
      ],
    },
    {
      category: "Backend / Infra",
      icon: "Server",
      skills: [
        { name: "Node.js" }, { name: "Express.js" }, { name: "AWS Lambda" }, { name: "AWS API Gateway" }, { name: "AWS Amplify" }, 
        { name: "AWS CloudFront" }, { name: "AWS Cognito" }, { name: "AWS IAM" }, { name: "AWS CloudFormation" }, 
        { name: "AWS Elastic Beanstalk" }, { name: "AWS Key Management Service (KMS)" }, { name: "Vercel" }, 
        { name: "Serverless" }, { name: "REST APIs" }, { name: "GraphQL APIs" }, { name: "Authentication & Security (JWT, OAuth)" },
      ],
    },
    {
      category: "Data & ML",
      icon: "Brain",
      skills: [
        { name: "RAG pipelines" }, { name: "LLM prompt engineering" }, { name: "Google Gemini" }, 
        { name: "ChatGPT" }, { name: "Claude-Sonnet" }, { name: "Amazon Q" }, { name: "scikit-learn" }, 
        { name: "PostgreSQL" }, { name: "telemetry & monitoring" },
      ],
    },
    {
      category: "Tools",
      icon: "Wrench",
      skills: [
        { name: "GitHub Actions" }, { name: "Supabase" }, { name: "Firebase" }, { name: "Firebase Authentication" }, 
        { name: "Firebase Firestore" }, { name: "Firebase Realtime Database" }, { name: "Firebase Hosting" }, 
        { name: "Firebase Cloud Functions" }, { name: "Firebase Cloud Messaging (FCM)" }, { name: "CloudWatch" }, 
        { name: "CI/CD" }, { name: "Docker" }, { name: "Kubernetes" }, { name: "Serverless Framework" },
      ],
    },
    {
      category: "Other",
      icon: "Users",
      skills: [
        { name: "Product → deploy ownership" }, { name: "rapid prototyping" }, 
        { name: "bilingual (PT/EN)" }, { name: "Spanish", description: "Intermediate" }, 
        { name: "English", description: "Fluent" }, { name: "Portuguese", description: "Native" },
      ],
    },
  ] as SkillCategory[],
  experience: [
    {
      role: "Software Engineer",
      company: "Outlier",
      period: "Remote • 2025 – Present",
      description: "Software Engineer focused on productionizing ML and AI-driven features: building LLM-powered agents, serverless ML APIs, and automated testing & deployment pipelines.",
      responsibilities: [
        "Engineered and productionized LLM-powered agents (ChatGPT, Claude-Sonnet, Amazon Q), improving reliability and response relevance through robust prompt orchestration and monitoring.",
        "Built automated testing and CI/CD pipelines for AI features, including automated test-case generation and integration tests to increase coverage and reduce regressions.",
        "Deployed serverless ML APIs (Python, scikit-learn on AWS Lambda) with telemetry, automated evaluation, and alerting to ensure production observability and reliability."
      ],
      technologies: ["Python", "scikit-learn", "AWS Lambda", "ChatGPT", "Claude-Sonnet", "Amazon Q", "CI/CD", "Telemetry"],
      projectLinks: []
    },
    {
      role: "Full Stack Engineer",
      company: "StudyShield",
      period: "2025",
      description: "Architected and implemented StudyShield, an AI-powered PWA using React 18, TypeScript and Vite; delivered a responsive, installable web app with offline support and service-worker versioning.",
      responsibilities: [
        "Designed and shipped a dual-mode AI platform integrating Google Gemini (Flash online + Nano offline) with streaming responses and automatic failover to ensure low latency and offline resilience.",
        "Integrated Supabase for Auth, PostgreSQL and Storage; authored DB migrations and Row-Level Security policies and designed user_profiles and conversations schemas to enforce per-user data isolation.",
        "Built secure multimodal chat: file attachments (images/PDFs via pdfjs), voice input (Web Speech API), content sanitization (DOMPurify) and AI content filtering to protect users.",
        "Implemented Focus Mode and distraction-blocking UX to increase study session productivity; added gamified progress tracking and analytics dashboards (Recharts) to boost engagement.",
        "Enforced engineering quality: strict TypeScript, ESLint, structured project layout (services/integrations/hooks), CI/deploy readiness (Vercel), and performance tuning targeting Lighthouse/Core Web Vitals.",
        "Implemented internationalization (react-i18next), accessible UI primitives (Radix), and smooth interactions (Framer Motion) to ship an inclusive, production-grade frontend experience.",
        "Automated build pipeline improvements (prebuild script to bump service worker version, optimized code-splitting) to reduce bundle size and improve perceived performance."
      ],
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "Framer Motion", "Google Generative AI (Gemini)", "Supabase (Auth/Postgres/Storage)", "PWA (Service Worker)", "react-i18next", "pdfjs", "Web Speech API", "ESLint", "PostCSS", "Recharts"],
      projectLinks: [
        { name: "StudyShield GitHub", url: "https://github.com/PedroAugusto2004/StudyShield" },
        { name: "Visit StudyShield", url: "https://www.studyshield.site/" }
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Megaphoton – Solar Energy",
      period: "Remote • 2025",
      description: "Bilingual conversational assistant powered by Google Gemini 2.5-Flash with RAG pipeline and WhatsApp escalation for solar energy company.",
      responsibilities: [
        "Implemented a bilingual (PT/EN) conversational assistant powered by Google Gemini 2.5-Flash, with language detection and persistent context.",
        "Built a RAG pipeline + knowledge base and verification layers to minimize hallucinations and ensure company-data correctness.",
        "Implemented WhatsApp escalation for human handoff and quick-action flows for common requests; improved customer self-service by 25%.",
        "Production deployment: Vercel serverless functions, env-secure API integration, rate-limit planning, robust fallback/error handling, mobile-optimized UX (React + TypeScript + Framer Motion + Tailwind)."
      ],
      technologies: ["Google Gemini 2.5-Flash", "Vercel", "React", "TypeScript", "Framer Motion", "Tailwind", "RAG Pipeline", "WhatsApp API"],
      projectLinks: [
        { name: "Megaphoton GitHub", url: "https://github.com/PedroAugusto2004/megaphoton" },
        { name: "Visit Megaphoton", url: "https://www.megaphoton.com.br/" }]
    },
    {
      role: "Full Stack Developer",
      company: "MediMentor",
      period: "Remote • 2024 – 2025",
      description: "AI-driven medical platform providing symptom analysis and differential diagnosis with clinical-grade data sourcing.",
      responsibilities: [
        "Integrated Isabel Healthcare API to power AI-driven symptom analysis and differential diagnosis, ensuring clinical-grade data sourcing.",
        "Architected serverless backend (AWS Lambda, API Gateway) with secure auth (Cognito) and production monitoring (CloudWatch), enabling reliable real-time interactions.",
        "Implemented frontend hosting and CI/CD via AWS Amplify and CloudFront for fast, globally distributed delivery.",
        "Built analytics dashboards and monitoring to track system health and performance (telemetry & logging)."
      ],
      technologies: ["AWS Lambda", "AWS API Gateway", "AWS Cognito", "AWS CloudWatch", "AWS Amplify", "AWS CloudFront", "Isabel Healthcare API"],
      projectLinks: [
        { name: "MediMentor GitHub", url: "https://github.com/PedroAugusto2004/MediMentor" },
        { name: "Visit MediMentor", url: "https://main.do8zwgfpt20yc.amplifyapp.com" }
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Muscles & Balance",
      period: "Remote • 2023 – 2025",
      description: "Full-stack health & fitness platform with secure authentication, workout tracking, and interactive analytics dashboards.",
      responsibilities: [
        "Built first full-stack health & fitness platform with secure authentication, workout tracking, and interactive analytics dashboards; established CI/CD pipelines (AWS Amplify, GitHub Actions) for rapid, reliable releases.",
        "Implemented realtime UX features (progress tracking and dashboards) and telemetry to measure performance and user flows.",
        "Led end-to-end development of a fitness app: product design → auth → real-time dashboards → CI/CD and deployments. This project passed by MLH Fellowship which validates its maturity."
      ],
      technologies: ["AWS Amplify", "GitHub Actions", "React.js", "Firebase Auth", "Firebase Firestore", "Real-time Analytics"],
      projectLinks: [
        { name: "Muscles & Balance GitHub", url: "https://github.com/PedroAugusto2004/Muscles-e-Balance" },
        { name: "Visit Muscles & Balance", url: "https://muscles-and-balance-7.web.app" }
      ]
    },
  ] as ExperienceEntry[],
  get 전체ResumeText() {
    return `
Name: ${this.name}
Title: ${this.title}
Contact: Email - ${this.contact.email}, LinkedIn - ${this.contact.linkedin}, GitHub - ${this.contact.github}
Summary: ${this.summary}

Education:
${this.education.map(edu => `- ${edu.degree} at ${edu.institution} (${edu.period})`).join('\n')}

Certifications:
${this.certifications.map(cert => `- ${cert.name} from ${cert.issuer}`).join('\n')}

Achievements:
${this.achievements.map(ach => `- ${ach.title}: ${ach.description}`).join('\n')}

Skills:
${this.skills.map(cat => `  ${cat.category}:\n${cat.skills.map(skill => `    - ${skill.name}${skill.description ? ` (${skill.description})` : ''}`).join('\n')}`).join('\n\n')}

Experience:
${this.experience.map(exp => `  ${exp.role} at ${exp.company} (${exp.period})\n  Description: ${exp.description}\n  Responsibilities:\n${exp.responsibilities.map(res => `    - ${res}`).join('\n')}\n  ${exp.projectLinks ? 'Project Links:\n' + exp.projectLinks.map(link => `    - ${link.name}: ${link.url}`).join('\n') : ''}`).join('\n\n')}
    `;
  },
  get portfolioSummaryText() {
    return `
Professional Summary: ${this.summary}

Key Projects:
${this.experience.map(exp => `- ${exp.company}: ${exp.description.substring(0,150)}... (Built with ${exp.technologies?.slice(0,3).join(', ') || 'various technologies'})`).join('\n')}

Core Skills:
${this.skills.flatMap(s => s.skills).slice(0,5).map(skill => skill.name).join(', ')}
    `;
  }
};

