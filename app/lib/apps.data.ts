// /app/data/apps.ts
export interface App {
  id: string;
  title: string;
  description: string;
  type: "Web" | "Mobile" | "SaaS" | "Tool";
  category: string;
  pricing: "Free" | "Freemium" | "Premium" | "Enterprise";
  status: "Live" | "Beta" | "Coming Soon" | "Maintenance";
  url?: string;
  downloadUrl?: string;
  image?: string;
  technologies: string[];
  features?: string[];
  isFeatured?: boolean;
}

export const appTypes: string[] = ["Web", "Mobile", "SaaS", "Tool"];

export const appsData: App[] = [
  {
    id: "ije",
    title: "Ije",
    description:
      "An all-in-one e-hailing and logistics platform integrating ride-hailing, parcel delivery, and fleet management with real-time tracking and cloud-native scalability.",
    type: "Mobile",
    category: "Transport & Logistics",
    pricing: "Freemium",
    status: "Beta",
    image: "/images/ije-preview.png",
    technologies: ["React Native", "Node.js", "AWS", "PostgreSQL"],
    features: [
      "Real-time driver and delivery tracking",
      "Seamless payment and user management"
    ],
    url: "https://ije.app",
    downloadUrl: "https://play.google.com/store/apps/details?id=com.ije",
    isFeatured: true
  },
  {
    id: "nera",
    title: "Nera",
    description:
      "A fintech super app offering digital banking, payments, savings, and financial tools built for speed, transparency, and accessibility.",
    type: "Mobile",
    category: "Fintech",
    pricing: "Premium",
    status: "Coming Soon",
    image: "/images/nera-preview.png",
    technologies: ["Go", "Next.js", "AWS", "Docker", "Terraform"],
    features: [
      "Secure transactions and user wallet system",
      "Real-time analytics dashboard"
    ],
    url: "https://nera.app",
    isFeatured: true
  },
  {
    id: "hemart",
    title: "HEmart",
    description:
      "A cloud-native e-commerce platform built with a serverless architecture and AI-driven recommendations to enhance user engagement and performance.",
    type: "Web",
    category: "E-Commerce",
    pricing: "Freemium",
    status: "Live",
    image: "/images/hemart-preview.png",
    technologies: ["Vue.js", "Node.js", "AWS Lambda", "DynamoDB"],
    features: [
      "AI-powered recommendations",
      "Serverless scalability and S3 integration"
    ],
    url: "https://hemart.app"
  },
  {
    id: "mantap",
    title: "Mantap",
    description:
      "A modern project management platform for teams to plan, track, and collaborate efficiently across multiple projects.",
    type: "Web",
    category: "Productivity",
    pricing: "Free",
    status: "Live",
    image: "/images/mantap-preview.png",
    technologies: ["React", "Express.js", "Docker", "Nginx"],
    features: ["Task management and progress tracking", "Team collaboration tools"],
    url: "https://mantap.app"
  },
  {
    id: "syncly",
    title: "Syncly",
    description:
      "A distributed file synchronization service inspired by Dropbox, showcasing concurrency, versioning, and distributed storage systems.",
    type: "SaaS",
    category: "Infrastructure",
    pricing: "Premium",
    status: "Beta",
    image: "/images/syncly-preview.png",
    technologies: ["Go", "Kubernetes", "MinIO", "gRPC"],
    features: [
      "Real-time file synchronization and deduplication",
      "Secure data replication across distributed nodes"
    ],
    url: "https://syncly.dev",
    isFeatured: false
  }
];
