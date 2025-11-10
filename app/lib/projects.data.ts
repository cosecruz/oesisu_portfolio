/**
 * Projects Page Data (Portfolio Showcase)
 *
 * CMS/API Integration Notes:
 * - Replace this with: const projectsData = await fetch('/api/projects').then(r => r.json())
 * - For App Router: Create app/api/projects/route.ts that returns this structure
 * - Expected JSON: ProjectsPageContent interface from types/projects.ts
 *
 * Note: This is separate from me.data.ts ProjectsData
 * - This file is for the /projects showcase page (card-based layout)
 * - me.data.ts is for the About Me detailed timeline
 *
 * API Endpoints:
 * GET /api/projects -> Returns ProjectsPageContent
 * GET /api/projects/:id -> Returns specific PortfolioProject
 * POST /api/projects -> Create project (admin only)
 * PUT /api/projects/:id -> Update project (admin only)
 * DELETE /api/projects/:id -> Remove project (admin only)
 */

import { Cloud, Server, Rocket, Database } from "lucide-react";
import { ProjectsPageContent } from "./types/projects";

export const projectsData: ProjectsPageContent = {
  hero: {
    badge: "Portfolio",
    title: "My Projects",
    subtitle: "A collection of my work spanning full-stack development, cloud architecture, DevOps automation, and scalable backend systems."
  },

  categories: ["All", "E-Commerce", "Backend", "DevOps", "Full Stack"],

  projects: [
    {
      id: "hemart",
      title: "HEmart",
      category: "E-Commerce Platform",
      description: "Cloud-native e-commerce application showcasing scalable serverless architecture and AI-driven personalization.",
      details: [
        "Built dynamic product listings, shopping cart, and search functionality with Vue.js",
        "Designed RESTful APIs using Node.js deployed via AWS Lambda and API Gateway",
        "Integrated AWS S3, CloudFront, and Serverless Framework for scalability",
        "Implemented Generative AI for personalized recommendations and smart search"
      ],
      techStack: ["Vue.js", "Node.js", "AWS Lambda", "API Gateway", "S3", "CloudFront", "Generative AI", "Serverless Framework"],
      highlights: ["Full-stack development", "Serverless design", "AI integration", "AWS Cloud"],
      status: "POC",
      icon: Cloud,
      gradient: "from-blue-500/20 to-cyan-500/20",
      demo: "#",
      featured: true
    },
    {
      id: "gotasker",
      title: "GoTasker",
      category: "Task Management API",
      description: "High-performance, cloud-native task management API using Go (Golang), showcasing advanced backend architecture and DevOps practices.",
      details: [
        "Implemented microservices with gRPC for high-performance inter-service communication",
        "Integrated PostgreSQL for data persistence and Redis for caching",
        "Optimized concurrency and performance for handling high-throughput workloads",
        "Containerized services with Docker and deployed via Kubernetes for cloud scalability"
      ],
      techStack: ["Go", "gRPC", "PostgreSQL", "Redis", "Docker", "Kubernetes", "CI/CD"],
      highlights: ["Backend architecture", "Microservices", "Cloud scalability", "System reliability"],
      status: "Completed",
      icon: Server,
      gradient: "from-green-500/20 to-emerald-500/20",
      github: "#",
      featured: true
    },
    {
      id: "mantap",
      title: "Mantap",
      category: "Project Management System",
      description: "Interactive project management platform enabling task creation, progress tracking, and team collaboration.",
      details: [
        "Developed interactive UI in React with task creation and progress tracking",
        "Implemented Express.js APIs for authentication and access control",
        "Containerized with Docker for consistent deployment",
        "Deployed via Nginx for high performance and scalability"
      ],
      techStack: ["React", "Express.js", "Docker", "Nginx", "PostgreSQL", "JWT"],
      highlights: ["Full-stack development", "Containerization", "Deployment automation"],
      status: "Completed",
      icon: Rocket,
      gradient: "from-violet-500/20 to-purple-500/20",
      demo: "#"
    },
    {
      id: "nimbus",
      title: "Nimbus",
      category: "Cloud Infrastructure Automation",
      description: "DevOps automation platform streamlining cloud resource provisioning and deployment workflows.",
      details: [
        "Automated AWS infrastructure setup using Terraform and CloudFormation templates",
        "Integrated CI/CD pipelines via GitHub Actions and Jenkins for zero-downtime deployments",
        "Implemented monitoring and alerting with Prometheus and Grafana dashboards",
        "Reduced deployment time by 40% through automation"
      ],
      techStack: ["Terraform", "CloudFormation", "GitHub Actions", "Jenkins", "Prometheus", "Grafana", "AWS"],
      highlights: ["Cloud & DevOps", "IaC", "CI/CD", "Observability"],
      status: "In Progress",
      icon: Database,
      gradient: "from-amber-500/20 to-orange-500/20",
      github: "#"
    }
  ],

  cta: {
    title: "Interested in Working Together?",
    description: "I'm always open to discussing new projects and opportunities",
    buttonText: "Get In Touch",
    buttonLink: "/contacts"
  }
};

// Helper functions
export const getProjectsByCategory = (category: string) => {
  if (category === "All") return projectsData.projects;
  return projectsData.projects.filter(project =>
    project.category.includes(category)
  );
};

export const getFeaturedProjects = () => {
  return projectsData.projects.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return projectsData.projects.find(project => project.id === id);
};

export const getProjectsByStatus = (status: string) => {
  return projectsData.projects.filter(project => project.status === status);
};
