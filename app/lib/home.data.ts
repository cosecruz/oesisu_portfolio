import { v4 as uuidv4 } from "uuid";
import { ShowcaseLayer } from "../ui/MiniShowcase";
import type { LucideIcon } from "lucide-react";
import { Rocket, Brain, Users, Sparkles } from "lucide-react";

export type HomeIntroType = {
  fullname: string,
  alias: string | undefined,
  avatar: string,
  quote: string
}


const HomeIntro:HomeIntroType = {
    fullname: "Obiechi Ebuka Samuel",
    alias: "oesisu",
  avatar: "/assets/Images/sisuavatar.png",
    quote: "I'm a developer driven by curiosity and creativity — I love breaking down complexity into clarity."
}

type Role =  {
  role: string;
  comment: string;
}

const RoleComments: Role[] = [
  {
    role: "Backend & API Development",
    comment: `"Crafting robust, scalable server-side solutions and seamless APIs is my forte — think 'fufu and egusi', perfectly blended for performance and reliability."`,
  },
  {
    role: "System & Architecture",
    comment: `"Designing and managing systems from the ground up, I architect solutions that are 'thoughtful', 'resilient', and built to scale effortlessly."`,
  },
  {
    role: "Cloud & DevOps Engineer",
    comment: `"Your 'infra guy' — I streamline deployments and manage cloud ecosystems with confidence, ensuring your systems run 'smoothly', fret not!"`,
  },
  {
    role: "Frontend Development",
    comment: `"I tame the chaos of 'JS frameworks' to deliver sleek, functional frontends — capable and 'conquered', though my heart lies in the backend."`,
  },
  {
    role: "Cyber Security & AI/ML",
    comment: `"Dabbling in the art of 'security' and 'machine learning', I’m eager to dive deeper into these fascinating fields — let’s 'explore' together!"`,
  },
  {
    role: "Software Craftsman",
    comment: `"Code is my canvas — I write 'clean', 'precise', and 'expressive' solutions that turn complex logic into elegant, connected systems."`,
  },
];

interface ExpDataType {
  label: string;
  amount: number;
  prefix?: string;
  suffix?: string;
}

const ExpData: ExpDataType[] = [
  { label: "Years of Experience", amount: 4, suffix: "+" },
  { label: "Projects Completed", amount: 15, prefix: "~", suffix: "+" },
  { label: "Clients Served", amount: 10, prefix: "~", suffix: "+" },
  { label: "Students Mentored", amount: 3, suffix: "+" },
  { label: "Certifications", amount: 5, suffix: "+" },
];

interface CarouselType {
  id: string;
  tag: string[];
  title: string;
  description?: string;
  label?: string;
  from?: string;
  to?: string;
}

const ExpItems: CarouselType[] = [
   {
    id: uuidv4(),
    tag: ["Instructor", "Work"],
    title: "NIIT",
    label: "Java Programming Instructor",
    from: "2018",
    to: "2018",
  },
  {
    id: uuidv4(),
    tag: ["Education", "Undergraduate"],
    title: "University Putra Malaysia",
    label: "Bachelor of Software Engineering",
    from: "2018",
    to: "2022",
  },
  {
    id: uuidv4(),
    tag: ["Intern", "Work"],
    title: "eCloudValley",
    label: "Cloud Developer Intern",
    from: "2024",
    to: "2024",
  },
  {
    id: uuidv4(),
    tag: ["Associate", "Work"],
    title: "eCloudValley",
    label: "Cloud Developer Associate",
    from: "2024",
    to: "2025",
  },

  {
    id: uuidv4(),
    tag: ["Work"],
    title: "Freelance",
    label: "Independent Contractor",
    from: "2018",
    to: "Now",
  },
  {
    id: uuidv4(),
    tag: ["Work"],
    title: "Thee",
    label: "Senior Software Engineer",
    from: "2025",
    to: "Now",
  },
];

const HomeProjects: CarouselType[] = [
  {
    id: uuidv4(),
    tag: ["Frontend", "NextJS", "Maintenance"],
    title: "Portfolio Website",
    label: "Personal",
    from: "2023",
    to: "Present",
  },
  {
    id: uuidv4(),
    tag: ["API", "TypeScript", "In Dev"],
    title: "Ije Auth Service",
    label: "Backend Service for Ije",
    from: "2022",
    to: "2023",
  },
  {
    id: uuidv4(),
    tag: ["Microservices", "AWS", "System", "Ongoing"],
    title: "Ije",
    label: "Backend Services for Ije",
    from: "2025",
    to: "Present",
  },
  {
    id: uuidv4(),
    tag: ["AWS", "Lambda", "API Gateway", "AI", "Completed"],
    title: "HE Mart",
    label: "E-commerce Platform",
    from: "2024",
    to: "2024",
  },
  {
    id: uuidv4(),
    tag: ["AWS", "Lambda", "API Gateway", "VueJS", "Completed"],
    title: "Zappit",
    label: "E-commerce Platform",
    from: "2024",
    to: "2025",
  },
  {
    id: uuidv4(),
    tag: ["AWS", "NodeJS", "VueJS", "Completed"],
    title: "TIMS",
    label: "Data Visualization",
    from: "2024",
    to: "2025",
  },
  {
    id: uuidv4(),
    tag: ["AWS", "AI/ML"],
    title: "MTR",
    label: "Fault Line Prediction",
    from: "2024",
    to: "2025",
  },
  {
    id: uuidv4(),
    tag: ["AI", "ML"],
    title: "Content Assistant",
    label: "AI/ML",
    from: "2023",
    to: "Present",
  },
  {
    id: uuidv4(),
    tag: ["Tool", "DevOps"],
    title: "Deployment Workflow",
    label: "DevOps",
    from: "2025",
    to: "2025",
  },
];

const HomeAchievements: CarouselType[] = [
  {
    id: uuidv4(),
    tag: ["AWS", "Certificate"],
    title: "Certified Developer Associate",
    label: "Amazon Web Services",
    from: "2024",
    to: "2027",
  },
  {
    id: uuidv4(),
    tag: ["Award"],
    title: "Hackathon Winner",
    label: "First Place",
    from: "2021",
    to: "2021",
  },
  {
    id: uuidv4(),
    tag: ["HILTI", "Award"],
    title: "HILTI Dev Competition",
    label: "Regional Winner",
    from: "2020",
    to: "2020",
  },
  {
    id: uuidv4(),
    tag: ["AWS", "Cloud Day"],
    title: "AWS Dev Booth",
    label: "Speaker & Presenter",
    from: "2024",
    to: "2024",
  },
];

const SkillCategories: ShowcaseLayer[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Python", icon: "logos:python" },
      { name: "Go", icon: "logos:go" },
      { name: "C++", icon: "logos:c-plusplus" },
      { name: "C", icon: "logos:c" },
      { name: "Rust", icon: "logos:rust" },
      { name: "Java", icon: "logos:java" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Express", icon: "logos:express" },
      // { name: "NestJS", icon: "logos:nestjs" },
      { name: "Vue.js", icon: "logos:vue" },
      // { name: "Nuxt.js", icon: "logos:nuxt-icon" },
      // { name: "FastAPI", icon: "logos:fastapi-icon" },
      // { name: "Django", icon: "logos:django-icon" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Terraform", icon: "logos:terraform-icon" },
      { name: "Pulumi", icon: "logos:pulumi-icon" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Shell", icon: "logos:bash-icon" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "SQLite", icon: "logos:sqlite" },
      { name: "DynamoDB", icon: "logos:aws-dynamodb" },
    ],
  },
  {
    title: "Engineering Practices",
    items: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "Microservices", icon: "carbon:microservices-1" },
      { name: "System Design", icon: "carbon:ibm-cloud-pak-manta-automated-data-lineage" },
      { name: "Testing", icon: "logos:jest" },
      { name: "CI/CD", icon: "logos:circleci" },
      { name: "Teamwork", icon: "fluent:people-team-24-filled" },
      { name: "Leadership", icon: "mdi:account-tie" },
      { name: "Ownership", icon: "mdi:account-check" },
    ],
  },
];

export const ColorClasses = {
  blue: "bg-blue-400/10 border-blue-400/20 text-blue-400",
  purple: "bg-purple-400/10 border-purple-400/20 text-purple-400",
  green: "bg-green-400/10 border-green-400/20 text-green-400",
  amber: "bg-amber-400/10 border-amber-400/20 text-amber-400",
} as const;

interface Goal {
  icon: LucideIcon;
  title: string;
  description: string;
  color: keyof typeof ColorClasses;
  glow: string;
}

const HomeGoals: Goal[] = [
  {
    icon: Rocket,
    title: "Master Cloud Architecture",
    description: "Deep dive into advanced AWS services and become a certified solutions architect",
    color: "blue",
    glow: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    description: "Build intelligent systems that leverage machine learning for real-world applications",
    color: "purple",
    glow: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Users,
    title: "Mentor & Share",
    description: "Help 100+ developers learn and grow through mentorship and open-source contributions",
    color: "green",
    glow: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Sparkles,
    title: "Launch SaaS Product",
    description: "Build and scale a successful SaaS platform that solves real problems for businesses",
    color: "amber",
    glow: "from-amber-500/20 to-orange-500/20"
  },
];


const HomeData = {
  intro: HomeIntro,
  roleComments: RoleComments,
  expData: ExpData,
  exp: ExpItems,
  projects: HomeProjects,
  skillCategories: SkillCategories,
  achievements: HomeAchievements,
  goals: HomeGoals,
}

// const q = `Driven and detail-oriented Backend Software Engineer with strong expertise in Go, Java, TypeScript, and Python for building scalable, high-performance systems. Passionate about cloud architecture, DevOps, and delivering efficient solutions.`
export{
  HomeData
}
