/**
 * Goals Page Data
 *
 * CMS/API Integration Notes:
 * - Replace this with: const goalsData = await fetch('/api/goals').then(r => r.json())
 * - For App Router: Create app/api/goals/route.ts that returns this structure
 * - Expected JSON: GoalsPageContent interface from types/goals.ts
 *
 * API Endpoints:
 * GET /api/goals -> Returns GoalsPageContent
 * PUT /api/goals/:id -> Update a specific goal (admin only)
 * POST /api/goals -> Create new goal (admin only)
 * DELETE /api/goals/:id -> Remove goal (admin only)
 */

import {
  Rocket,
  Brain,
  Users,
  Sparkles,
  TrendingUp,
  Globe,
  Award
} from "lucide-react";
import { GoalsPageContent } from "./types/goals";

export const goalsData: GoalsPageContent = {
  hero: {
    badge: "Vision & Aspirations",
    title: "Future Goals",
    subtitle: "My roadmap for continuous growth as an engineer, leader, and innovator in the tech industry."
  },

  quote: {
    text: "The best way to predict the future is to create it. These goals represent my commitment to continuous learning, meaningful impact, and building solutions that matter.",
    author: "Personal Philosophy"
  },

  goals: [
    {
      id: "cloud-architecture",
      icon: Rocket,
      title: "Master Cloud-Native Architecture",
      description: "Deepen expertise in designing and implementing large-scale distributed systems on AWS and multi-cloud platforms.",
      details: [
        "Achieve AWS Solutions Architect Professional certification",
        "Build production-grade microservices architectures",
        "Master Kubernetes orchestration and service mesh technologies",
        "Implement advanced observability and monitoring solutions"
      ],
      color: "blue",
      glow: "from-blue-500/20 to-cyan-500/20",
      timeframe: "1-2 Years",
      category: "Technical Mastery",
      priority: "high"
    },
    {
      id: "ai-ml-integration",
      icon: Brain,
      title: "AI & Machine Learning Integration",
      description: "Leverage AI/ML technologies to build intelligent systems that solve real-world problems at scale.",
      details: [
        "Master integration of Generative AI (GPT, Bedrock) into production systems",
        "Build ML pipelines for data processing and model deployment",
        "Implement AI-driven automation and intelligent decision systems",
        "Explore edge AI and real-time inference optimization"
      ],
      color: "purple",
      glow: "from-purple-500/20 to-pink-500/20",
      timeframe: "2-3 Years",
      category: "Emerging Technologies",
      priority: "high"
    },
    {
      id: "mentorship-community",
      icon: Users,
      title: "Mentorship & Community Impact",
      description: "Help aspiring developers grow their skills and contribute meaningfully to the tech community.",
      details: [
        "Mentor 50+ developers through 1-on-1 guidance and workshops",
        "Contribute to open-source projects and create educational content",
        "Speak at tech conferences and community meetups",
        "Build a platform for sharing knowledge and best practices"
      ],
      color: "green",
      glow: "from-green-500/20 to-emerald-500/20",
      timeframe: "Ongoing",
      category: "Community & Growth",
      priority: "high"
    },
    {
      id: "saas-product",
      icon: Sparkles,
      title: "Launch a Successful SaaS Product",
      description: "Build and scale a profitable SaaS platform that solves a real problem for businesses or developers.",
      details: [
        "Identify market gap and validate product-market fit",
        "Design scalable architecture supporting 10k+ users",
        "Implement subscription billing and user management",
        "Achieve sustainable revenue and positive unit economics"
      ],
      color: "amber",
      glow: "from-amber-500/20 to-orange-500/20",
      timeframe: "3-5 Years",
      category: "Entrepreneurship",
      priority: "medium"
    },
    {
      id: "technical-leadership",
      icon: TrendingUp,
      title: "Technical Leadership",
      description: "Grow into a technical leadership role where I can drive engineering excellence and mentor teams.",
      details: [
        "Lead engineering teams on complex, high-impact projects",
        "Define technical vision and architectural standards",
        "Foster a culture of continuous learning and innovation",
        "Build scalable processes for growing engineering organizations"
      ],
      color: "violet",
      glow: "from-violet-500/20 to-indigo-500/20",
      timeframe: "3-4 Years",
      category: "Career Advancement",
      priority: "high"
    },
    {
      id: "global-impact",
      icon: Globe,
      title: "Global Impact & Remote Expertise",
      description: "Work with global teams and contribute to products that impact millions of users worldwide.",
      details: [
        "Collaborate with distributed teams across time zones",
        "Build systems that scale to millions of users globally",
        "Contribute to international open-source projects",
        "Master async communication and remote collaboration"
      ],
      color: "cyan",
      glow: "from-cyan-500/20 to-blue-500/20",
      timeframe: "Ongoing",
      category: "Professional Development",
      priority: "medium"
    }
  ],

  learningRoadmap: {
    title: "Continuous Learning Roadmap",
    subtitle: "Technologies and skills I'm actively learning and mastering",
    categories: [
      {
        id: "advanced-backend",
        title: "Advanced Backend",
        icon: Award,
        iconColor: "text-blue-400",
        items: [
          "Distributed Systems Design",
          "Event-Driven Architecture",
          "gRPC & Protocol Buffers",
          "Message Queues (Kafka, RabbitMQ)"
        ]
      },
      {
        id: "cloud-devops",
        title: "Cloud & DevOps",
        icon: Award,
        iconColor: "text-violet-400",
        items: [
          "Service Mesh (Istio, Linkerd)",
          "GitOps (ArgoCD, Flux)",
          "Multi-Cloud Strategies",
          "FinOps & Cost Optimization"
        ]
      },
      {
        id: "emerging-tech",
        title: "Emerging Tech",
        icon: Award,
        iconColor: "text-green-400",
        items: [
          "AI/ML Operations (MLOps)",
          "WebAssembly & Edge Computing",
          "Blockchain & Web3",
          "Quantum Computing Basics"
        ]
      }
    ]
  },

  cta: {
    title: "Let's Build the Future Together",
    description: "Interested in collaborating on exciting projects or opportunities?",
    buttonText: "Get In Touch",
    buttonLink: "/contacts"
  }
};

// Helper functions
export const getGoalsByCategory = (category: string) => {
  return goalsData.goals.filter(goal => goal.category === category);
};

export const getGoalsByPriority = (priority: "high" | "medium" | "low") => {
  return goalsData.goals.filter(goal => goal.priority === priority);
};

export const getGoalById = (id: string) => {
  return goalsData.goals.find(goal => goal.id === id);
};
