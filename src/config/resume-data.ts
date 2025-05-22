export interface Skill {
  name: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
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

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
}

export const resumeData = {
  name: "Pedro Augusto",
  title: "Full Stack Developer | AWS & Firebase Cloud Specialist",
  contact: {
    email: "PEDRO.AUGUSTO07.DEV@GMAIL.COM",
    linkedin: "https://www.linkedin.com/in/pedro-augusto-dev/", // Replace with actual LinkedIn
    github: "https://github.com/pedro-augusto-dev", // Replace with actual GitHub
    portfolioUrl: "", // This website, will be populated dynamically if needed
  },
  summary: "Full-Stack Developer with hands-on expertise in AWS and Firebase cloud platforms. Proficient in JavaScript, Python, and C, with a strong focus on building scalable, secure, and serverless web applications. Experienced in building modern UIs, optimizing performance, and architecting robust, cloud-native solutions.",
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
      category: "Frontend Development",
      skills: [
        { name: "HTML5" }, { name: "CSS3" }, { name: "JavaScript" }, { name: "TypeScript" }, 
        { name: "React.js" }, { name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Bootstrap" },
        { name: "Responsive & Mobile-First Design" }, { name: "UI/UX Optimization" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Python" }, { name: "C" }, { name: "Node.js" }, { name: "Express.js" },
        { name: "RESTful APIs" }, { name: "GraphQL APIs" }, { name: "Authentication & Security (JWT, OAuth)" },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS Lambda" }, { name: "AWS API Gateway" }, { name: "AWS IAM" }, { name: "AWS Cognito" },
        { name: "AWS CloudWatch" }, { name: "AWS CloudFront" }, { name: "AWS Amplify" }, { name: "AWS CloudFormation" },
        { name: "AWS Elastic Beanstalk" }, { name: "AWS Key Management Service (KMS)" },
        { name: "Firebase Authentication" }, { name: "Firebase Firestore" }, { name: "Firebase Realtime Database" },
        { name: "Firebase Hosting" }, { name: "Firebase Cloud Functions" }, { name: "Firebase Cloud Messaging (FCM)" },
        { name: "CI/CD & Deployment" }, { name: "Serverless Framework" }, { name: "GitHub Actions" },
        { name: "Docker" }, { name: "Kubernetes" },
      ],
    },
    {
      category: "Languages",
      skills: [
        { name: "English", description: "Fluent" },
        { name: "Portuguese", description: "Native" },
        { name: "Spanish", description: "Intermediate" },
      ],
    },
  ] as SkillCategory[],
  experience: [
    {
      role: "Full-Stack Developer",
      company: "MediMentor & Muscles & Balance",
      period: "2024 - 2025",
      description: "Developed and deployed two cloud-native platforms focused on healthcare and fitness. MediMentor is an AI-powered medical assistant offering symptom analysis using APIs like Isabel Healthcare and Healthwise, serving users with secure authentication via AWS Cognito and scalable serverless infrastructure on AWS Lambda, CloudFront, and Amplify. Muscles & Balance delivers personalized nutrition, workout planning, and macro calculations, leveraging Firebase Authentication, Firestore, and a Python backend that reduced API response time by 30%.",
      responsibilities: [
        "Architected serverless backend with AWS Lambda and Firebase Cloud Functions, managing over 20+ secure API endpoints for real-time data interactions.",
        "Deployed scalable cloud infrastructure with CI/CD pipelines via AWS Amplify and GitHub Actions.",
        "Designed responsive, mobile-first UIs using JavaScript, HTML/CSS, and Amplify, ensuring seamless UX across devices.",
        "Implemented secure authentication flows with AWS Cognito and Firebase Auth, handling login, authorization, and session management.",
        "Optimized app performance with AWS CloudFront, cutting load times by 40%, and reduced backend latency through efficient API design.",
      ],
      technologies: ["AWS Lambda", "Firebase Cloud Functions", "AWS Cognito", "Firebase Auth", "AWS Amplify", "GitHub Actions", "JavaScript", "HTML/CSS", "Python", "AWS CloudFront", "Next.js", "React.js", "Tailwind CSS"]
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
${this.experience.map(exp => `  ${exp.role} at ${exp.company} (${exp.period})\n  Description: ${exp.description}\n  Responsibilities:\n${exp.responsibilities.map(res => `    - ${res}`).join('\n')}`).join('\n\n')}
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
