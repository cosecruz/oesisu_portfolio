import { DetailItem } from "../ui/DetailSection";
import {
  Coffee,
  Book,
  Music,
  Camera,

} from "lucide-react";

export const BioData = {
  intro: "Driven and detail-oriented Backend Software Engineer with strong expertise in Go, Java, TypeScript, and Python for building scalable, high-performance systems and APIs. Skilled in cloud development and DevOps, with hands-on experience in AWS, Docker, CI/CD pipelines, and infrastructure as code.",
  philosophy: "I believe that great software isn't just about functionality—it's about crafting experiences that feel intuitive, look beautiful, and solve real problems. As a Certified AWS Cloud Developer Associate, I'm passionate about designing robust architectures and optimizing system reliability and deployment efficiency.",
  journey: "My journey into software engineering began with curiosity — a fascination with how ideas turn into systems that power the world. Over time, that curiosity grew into a passion for building elegant, scalable solutions that make technology feel effortless. From freelancing to crafting cloud-native applications at eCloudValley, I’ve embraced every opportunity to learn, evolve, and refine my craft. For me, engineering isn’t just about code — it’s about creating impact, solving meaningful problems, and continuously pushing the boundaries of what’s possible.",
  tags: ["Backend Development", "Cloud & DevOps", "Full Stack Web", "System Design"],
  images: ["/assets/Images/sisuavatar.png"]
};

export const EducationData: DetailItem[] = [
  {
    id: "edu-1",
    title: "Bachelor of Software Engineering",
    organization: "University Putra Malaysia",
    location: "Selangor, Malaysia",
    startDate: "2018",
    endDate: "2022",
    description: "Comprehensive software engineering program with focus on cloud computing, system design, and modern development practices. Served as President of Intl@FSKTM student organization.",
    highlights: [
      "Majored in Software Engineering with emphasis on distributed systems",
      "President of International Students Organization (Intl@FSKTM)",
      "Led final year project on cloud-native microservices architecture",
      "Active participation in hackathons and coding competitions"
    ],
    tags: ["Software Engineering", "Cloud Computing", "System Design", "Leadership"]
  },
  {
    id: "edu-2",
    title: "Java Programming Certification",
    organization: "NIIT Port Harcourt",
    location: "Nigeria",
    startDate: "2017",
    endDate: "2018",
    description: "Intensive Java programming course covering core concepts, object-oriented programming, and hands-on project development.",
    tags: ["Java", "OOP", "Programming Fundamentals"]
  }
];

// Experience Data from Resume
export const ExperienceData: DetailItem[] = [
  {
    id: "exp-1",
    title: "Cloud Developer Associate",
    organization: "eCloudValley Technology Sdn. Bhd",
    location: "Hybrid/Remote",
    startDate: "Sept 2024",
    endDate: "March 2025",
    description: "Developed and deployed scalable cloud applications on AWS, implementing infrastructure automation and optimizing project delivery processes.",
    highlights: [
      "Developed scalable cloud applications using AWS Lambda, EC2, and S3",
      "Automated infrastructure provisioning with Terraform and CloudFormation",
      "Built and optimized APIs and microservices using Docker and serverless frameworks",
      "Maintained security best practices through IAM policies and encryption",
      "Reduced project delivery time by 15% through process streamlining",
      "Created standardized reporting frameworks improving data-driven decisions"
    ],
    tags: ["AWS", "Lambda", "Terraform", "Docker", "Serverless", "Microservices"]
  },
  {
    id: "exp-2",
    title: "Full Stack Web & Cloud Developer Intern",
    organization: "eCloudValley Technology Sdn. Bhd",
    location: "Hybrid/Remote",
    startDate: "March 2024",
    endDate: "Aug 2024",
    description: "Contributed to full-stack development using modern frameworks and assisted in cloud infrastructure automation.",
    highlights: [
      "Built cloud-native applications with TypeScript, Vue.js, Node.js, and Express.js",
      "Optimized applications for performance and scalability",
      "Assisted in automating cloud resource provisioning with Terraform",
      "Collaborated with project managers on planning and deliverable tracking",
      "Supported documentation, testing, and quality assurance processes"
    ],
    tags: ["TypeScript", "Vue.js", "Node.js", "Express.js", "Terraform", "AWS"]
  },
  {
    id: "exp-3",
    title: "Freelance Backend and Full Stack Developer",
    organization: "Self-Employed",
    location: "Remote",
    startDate: "Oct 2018",
    endDate: "Present",
    description: "Designed and developed web and backend systems for diverse clients, emphasizing performance, maintainability, and scalability.",
    highlights: [
      "Delivered customized solutions using Go, Java, Python, and TypeScript",
      "Integrated APIs, databases, and cloud services for various client projects",
      "Implemented React, Next.js, and AWS solutions for full-stack applications",
      "Adapted quickly to diverse project requirements and new frameworks",
      "Solved real-world engineering challenges through self-directed learning"
    ],
    tags: ["Go", "Java", "Python", "TypeScript", "React", "Next.js", "AWS"]
  },
  {
    id: "exp-4",
    title: "Java Programming Instructor",
    organization: "NIIT Port Harcourt",
    location: "Nigeria",
    startDate: "July 2017",
    endDate: "Aug 2018",
    description: "Taught core and object-oriented Java programming, guiding students through hands-on projects and problem-solving exercises.",
    highlights: [
      "Developed course materials and simplified complex programming concepts",
      "Guided students through hands-on projects and exercises",
      "Fostered curiosity, adaptability, and critical thinking",
      "Continuously refined teaching methods and technical knowledge"
    ],
    tags: ["Teaching", "Java", "OOP", "Mentoring"]
  }
];

// Projects Data from Resume
export const ProjectsData: DetailItem[] = [
  {
    id: "proj-1",
    title: "HEmart",
    subtitle: "Cloud-Native E-commerce Application (POC)",
    startDate: "2024",
    endDate: "2024",
    description: "Proof-of-concept e-commerce platform showcasing scalable serverless architecture and AI-driven personalization.",
    highlights: [
      "Built dynamic product listings, shopping cart, and search with Vue.js",
      "Designed RESTful APIs using Node.js deployed via AWS Lambda and API Gateway",
      "Integrated AWS S3, CloudFront, and Serverless Framework for scalability",
      "Implemented Generative AI for personalized recommendations and smart search"
    ],
    tags: ["Vue.js", "Node.js", "AWS Lambda", "API Gateway", "S3", "CloudFront", "Generative AI", "Serverless"]
  },
  {
    id: "proj-2",
    title: "GoTasker",
    subtitle: "Scalable Task Management API",
    startDate: "2023",
    endDate: "2024",
    description: "High-performance, cloud-native task management API using Go (Golang), showcasing advanced backend architecture and DevOps practices.",
    highlights: [
      "Implemented microservices with gRPC for high-performance communication",
      "Integrated PostgreSQL for data persistence and Redis for caching",
      "Optimized concurrency and performance for high-throughput workloads",
      "Containerized with Docker and deployed via Kubernetes for cloud scalability"
    ],
    tags: ["Go", "gRPC", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Microservices"]
  },
  {
    id: "proj-3",
    title: "Mantap",
    subtitle: "Project Management System",
    startDate: "2023",
    endDate: "2023",
    description: "Interactive project management platform enabling task creation, progress tracking, and team management.",
    highlights: [
      "Developed interactive UI in React with task creation and progress tracking",
      "Implemented Express.js APIs for authentication, task handling, and access control",
      "Containerized with Docker for consistent deployment environments",
      "Deployed via Nginx for high performance and scalability"
    ],
    tags: ["React", "Express.js", "Docker", "Nginx", "PostgreSQL", "JWT"]
  },
  {
    id: "proj-4",
    title: "Nimbus",
    subtitle: "Cloud Infrastructure Automation Platform",
    startDate: "2023",
    endDate: "Present",
    description: "DevOps automation platform streamlining cloud resource provisioning and deployment workflows.",
    highlights: [
      "Automated AWS infrastructure setup using Terraform and CloudFormation",
      "Integrated CI/CD pipelines via GitHub Actions and Jenkins",
      "Implemented monitoring and alerting with Prometheus and Grafana dashboards",
      "Achieved zero-downtime deployments through automation"
    ],
    tags: ["Terraform", "CloudFormation", "GitHub Actions", "Jenkins", "Prometheus", "Grafana", "AWS"]
  }
];

// Achievements Data from Resume
export const AchievementsData: DetailItem[] = [
  {
    id: "ach-1",
    title: "AWS Certified Cloud Developer Associate",
    organization: "Amazon Web Services",
    startDate: "2024",
    endDate: "2027",
    description: "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS services.",
    tags: ["AWS", "Cloud", "Certification"]
  },
  {
    id: "ach-2",
    title: "HILTI Dev Competition Winner",
    organization: "HILTI Malaysia",
    startDate: "2020",
    endDate: "2020",
    description: "Won regional development competition showcasing innovative software solutions.",
    tags: ["Award", "Competition", "Innovation"]
  },
  {
    id: "ach-3",
    title: "Hackathon Winner",
    organization: "University Putra Malaysia",
    startDate: "2021",
    endDate: "2021",
    description: "First place in university hackathon for developing innovative tech solution.",
    tags: ["Hackathon", "Award", "Innovation"]
  },
  {
    id: "ach-4",
    title: "AWS Cloud Day Dev Booth Presenter",
    organization: "AWS Malaysia",
    startDate: "2024",
    endDate: "2024",
    description: "Presented cloud development solutions and best practices at AWS Cloud Day event.",
    tags: ["AWS", "Speaking", "Community"]
  }
];

export const Quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" }
];


export const Hobbies = [
  { icon: Book, name: "Reading", description: "Tech blogs, system design books, and sci-fi novels" },
  { icon: Music, name: "Music", description: "Lo-fi beats for deep work sessions" },
  { icon: Camera, name: "Photography", description: "Capturing urban landscapes and tech events" },
  { icon: Coffee, name: "Coffee", description: "Exploring brewing methods and local cafés" },
];

export const LifeValues = [
  {
    title: "Continuous Learning",
    description: "Always growing, always improving. The tech landscape evolves rapidly, and staying curious is key to remaining relevant and effective."
  },
  {
    title: "Creative Problem Solving",
    description: "Finding elegant solutions to complex challenges. Every problem is an opportunity to innovate and think differently."
  },
  {
    title: "Work-Life Balance",
    description: "Building great things while living a full life. Sustainable productivity comes from taking care of yourself."
  },
  {
    title: "Community & Mentorship",
    description: "Sharing knowledge and lifting others up. The best way to solidify your learning is to teach others."
  },
];

export interface Skill {
  name: string;
  category: string;
  level: number; // 0-100
  description?: string;
  icon?: string; // Optional icon identifier
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: Skill[];
}

export interface SoftSkill {
  name: string;
  description: string;
  icon?: string;
}

// Technical Skills organized by category
export const technicalSkills: SkillCategory[] = [
  {
    id: "programming-languages",
    name: "Programming Languages",
    description: "Core languages for building scalable systems",
    skills: [
      {
        name: "Go (Golang)",
        category: "Programming Languages",
        level: 90,
        description: "High-performance backend systems, microservices, gRPC"
      },
      {
        name: "TypeScript",
        category: "Programming Languages",
        level: 95,
        description: "Full-stack development, type-safe applications"
      },
      {
        name: "Java",
        category: "Programming Languages",
        level: 88,
        description: "Spring Boot, enterprise applications, OOP"
      },
      {
        name: "Python",
        category: "Programming Languages",
        level: 85,
        description: "FastAPI, Django, scripting, automation"
      },
      {
        name: "SQL",
        category: "Programming Languages",
        level: 90,
        description: "Complex queries, optimization, database design"
      },
      {
        name: "Bash/Shell",
        category: "Programming Languages",
        level: 80,
        description: "Automation, DevOps scripting, system administration"
      }
    ]
  },
  {
    id: "backend-development",
    name: "Backend Development",
    description: "Building scalable APIs and microservices",
    skills: [
      {
        name: "Node.js & Express.js",
        category: "Backend Development",
        level: 92,
        description: "RESTful APIs, middleware, server-side logic"
      },
      {
        name: "Spring Boot",
        category: "Backend Development",
        level: 85,
        description: "Java enterprise applications, dependency injection"
      },
      {
        name: "RESTful & gRPC APIs",
        category: "Backend Development",
        level: 90,
        description: "API design, protocol buffers, high-performance communication"
      },
      {
        name: "GraphQL",
        category: "Backend Development",
        level: 78,
        description: "Query language, schema design, resolvers"
      },
      {
        name: "Microservices Architecture",
        category: "Backend Development",
        level: 88,
        description: "Service decomposition, inter-service communication"
      },
      {
        name: "Event-Driven Systems",
        category: "Backend Development",
        level: 82,
        description: "Message queues, async processing, event sourcing"
      }
    ]
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    description: "Infrastructure, deployment, and automation",
    skills: [
      {
        name: "AWS",
        category: "Cloud & DevOps",
        level: 92,
        description: "Lambda, ECS, S3, DynamoDB, CloudFormation, certified"
      },
      {
        name: "Docker",
        category: "Cloud & DevOps",
        level: 90,
        description: "Containerization, multi-stage builds, optimization"
      },
      {
        name: "Kubernetes (K8s)",
        category: "Cloud & DevOps",
        level: 85,
        description: "Orchestration, deployments, services, ingress"
      },
      {
        name: "Terraform",
        category: "Cloud & DevOps",
        level: 88,
        description: "Infrastructure as Code, state management, modules"
      },
      {
        name: "CI/CD Pipelines",
        category: "Cloud & DevOps",
        level: 90,
        description: "GitHub Actions, Jenkins, automated testing & deployment"
      },
      {
        name: "Serverless Architecture",
        category: "Cloud & DevOps",
        level: 87,
        description: "Lambda functions, API Gateway, event-driven design"
      },
      {
        name: "Monitoring & Observability",
        category: "Cloud & DevOps",
        level: 83,
        description: "Prometheus, Grafana, CloudWatch, logging, metrics"
      }
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Data persistence and management",
    skills: [
      {
        name: "PostgreSQL",
        category: "Databases & Storage",
        level: 90,
        description: "Relational database, complex queries, optimization"
      },
      {
        name: "MongoDB",
        category: "Databases & Storage",
        level: 85,
        description: "NoSQL, document storage, aggregation pipelines"
      },
      {
        name: "Redis",
        category: "Databases & Storage",
        level: 88,
        description: "Caching, pub/sub, session management"
      },
      {
        name: "DynamoDB",
        category: "Databases & Storage",
        level: 80,
        description: "AWS NoSQL, single-table design, performance"
      },
      {
        name: "MySQL",
        category: "Databases & Storage",
        level: 85,
        description: "Relational database, indexing, transactions"
      },
      {
        name: "ORM Tools",
        category: "Databases & Storage",
        level: 87,
        description: "Prisma, Hibernate, Drizzle, type-safe queries"
      }
    ]
  },
  {
    id: "frontend-fullstack",
    name: "Frontend & Full Stack",
    description: "Modern web interfaces and frameworks",
    skills: [
      {
        name: "React",
        category: "Frontend & Full Stack",
        level: 90,
        description: "Hooks, context, component architecture"
      },
      {
        name: "Next.js",
        category: "Frontend & Full Stack",
        level: 92,
        description: "App Router, SSR, SSG, API routes, full-stack"
      },
      {
        name: "Vue.js",
        category: "Frontend & Full Stack",
        level: 85,
        description: "Composition API, Vuex, component design"
      },
      {
        name: "Tailwind CSS",
        category: "Frontend & Full Stack",
        level: 93,
        description: "Utility-first styling, responsive design"
      },
      {
        name: "API Integration",
        category: "Frontend & Full Stack",
        level: 90,
        description: "REST, GraphQL, WebSockets, state management"
      },
      {
        name: "Responsive Design",
        category: "Frontend & Full Stack",
        level: 88,
        description: "Mobile-first, cross-browser compatibility"
      }
    ]
  },
  {
    id: "tools-practices",
    name: "Tools & Best Practices",
    description: "Development tools and methodologies",
    skills: [
      {
        name: "Git & GitHub",
        category: "Tools & Best Practices",
        level: 92,
        description: "Version control, branching strategies, collaboration"
      },
      {
        name: "System Design",
        category: "Tools & Best Practices",
        level: 85,
        description: "Architecture patterns, scalability, trade-offs"
      },
      {
        name: "Clean Architecture",
        category: "Tools & Best Practices",
        level: 87,
        description: "SOLID principles, separation of concerns"
      },
      {
        name: "API Security",
        category: "Tools & Best Practices",
        level: 88,
        description: "Authentication, authorization, JWT, OAuth"
      },
      {
        name: "Testing",
        category: "Tools & Best Practices",
        level: 82,
        description: "Unit, integration, e2e testing"
      },
      {
        name: "Agile Development",
        category: "Tools & Best Practices",
        level: 90,
        description: "Scrum, sprint planning, iterative development"
      }
    ]
  }
];

// Soft Skills
export const softSkills: SoftSkill[] = [
  {
    name: "Problem Solving",
    description: "Breaking down complex challenges into manageable solutions"
  },
  {
    name: "Collaboration & Teamwork",
    description: "Working effectively with cross-functional teams"
  },
  {
    name: "Communication",
    description: "Clear technical communication with both technical and non-technical stakeholders"
  },
  {
    name: "Adaptability",
    description: "Quickly learning new technologies and adapting to changing requirements"
  },
  {
    name: "Leadership & Ownership",
    description: "Taking initiative and mentoring junior developers"
  },
  {
    name: "Agile & DevOps Mindset",
    description: "Embracing continuous improvement and automation"
  },
  {
    name: "Time Management",
    description: "Prioritizing tasks and meeting deadlines effectively"
  },
  {
    name: "Critical Thinking",
    description: "Analyzing problems from multiple perspectives to find optimal solutions"
  }
];

// Helper function to get all skills flattened
export const getAllTechnicalSkills = (): Skill[] => {
  return technicalSkills.flatMap(category => category.skills);
};

// Helper function to get skills by category
export const getSkillsByCategory = (categoryId: string): Skill[] => {
  const category = technicalSkills.find(cat => cat.id === categoryId);
  return category?.skills || [];
};

// Helper function to get top skills (highest level)
export const getTopSkills = (limit: number = 10): Skill[] => {
  return getAllTechnicalSkills()
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};
