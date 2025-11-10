/**
 * Knowledge Base Mock Data
 * CMS-Ready: Will be replaced with API calls to /api/resources
 */

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "Learning Resources" | "Roadmaps" | "Project Ideas" | "Tools & Links";
  source: string;
  url: string;
  dateAdded: string;
  tags?: string[];
  isPinned?: boolean;
}

export const knowledgebaseData: Resource[] = [
  // Learning Resources
  {
    id: "lr-1",
    title: "Designing Data-Intensive Applications",
    description: "The big ideas behind reliable, scalable, and maintainable systems. Essential reading for backend engineers.",
    category: "Learning Resources",
    source: "Book by Martin Kleppmann",
    url: "https://dataintensive.net/",
    dateAdded: "2024-01-15",
    tags: ["System Design", "Databases", "Distributed Systems"],
    isPinned: true
  },
  {
    id: "lr-2",
    title: "AWS Certified Developer Course",
    description: "Comprehensive course covering Lambda, DynamoDB, API Gateway, and serverless architecture patterns.",
    category: "Learning Resources",
    source: "A Cloud Guru",
    url: "#",
    dateAdded: "2024-02-20",
    tags: ["AWS", "Cloud", "Serverless"]
  },
  {
    id: "lr-3",
    title: "Go Programming Patterns",
    description: "Deep dive into idiomatic Go patterns, concurrency, and building production-grade microservices.",
    category: "Learning Resources",
    source: "Article Series",
    url: "https://go.dev/blog",
    dateAdded: "2024-03-10",
    tags: ["Go", "Microservices", "Backend"]
  },
  {
    id: "lr-4",
    title: "System Design Interview Guide",
    description: "Comprehensive guide covering scalability, load balancing, caching, databases, and distributed systems.",
    category: "Learning Resources",
    source: "ByteByteGo",
    url: "https://bytebytego.com",
    dateAdded: "2024-01-05",
    tags: ["System Design", "Interview Prep"]
  },

  // Roadmaps
  {
    id: "rm-1",
    title: "Backend Developer Roadmap 2024",
    description: "Step-by-step guide covering APIs, databases, authentication, caching, message queues, and microservices.",
    category: "Roadmaps",
    source: "roadmap.sh",
    url: "https://roadmap.sh/backend",
    dateAdded: "2024-01-01",
    tags: ["Backend", "Career", "Learning Path"],
    isPinned: true
  },
  {
    id: "rm-2",
    title: "AWS Solutions Architect Path",
    description: "Complete learning path from Associate to Professional level AWS certification with hands-on projects.",
    category: "Roadmaps",
    source: "AWS Training",
    url: "https://aws.amazon.com/training",
    dateAdded: "2024-01-20",
    tags: ["AWS", "Cloud", "Architecture"]
  },
  {
    id: "rm-3",
    title: "Full Stack TypeScript Developer",
    description: "Modern full-stack development with Next.js, React, Node.js, PostgreSQL, and deployment strategies.",
    category: "Roadmaps",
    source: "roadmap.sh",
    url: "https://roadmap.sh/full-stack",
    dateAdded: "2024-02-01",
    tags: ["Full Stack", "TypeScript", "Web Development"]
  },

  // Project Ideas
  {
    id: "pi-1",
    title: "Real-Time Collaboration Platform",
    description: "Build a collaborative workspace with WebSockets, operational transforms, and conflict resolution.",
    category: "Project Ideas",
    source: "Personal Notes",
    url: "#",
    dateAdded: "2024-03-01",
    tags: ["WebSockets", "Real-time", "Collaboration"]
  },
  {
    id: "pi-2",
    title: "Serverless E-Commerce Backend",
    description: "Microservices architecture using AWS Lambda, DynamoDB, SQS, and payment gateway integration.",
    category: "Project Ideas",
    source: "Personal Notes",
    url: "#",
    dateAdded: "2024-02-15",
    tags: ["Serverless", "E-commerce", "AWS"]
  },
  {
    id: "pi-3",
    title: "Dev Tools CLI Suite",
    description: "Collection of CLI tools for developers: code scaffolding, API testing, deployment automation.",
    category: "Project Ideas",
    source: "Personal Notes",
    url: "#",
    dateAdded: "2024-03-05",
    tags: ["CLI", "DevTools", "Automation"]
  },
  {
    id: "pi-4",
    title: "Distributed Task Scheduler",
    description: "Build a scalable task scheduler with Go, Redis, and Kubernetes for processing background jobs.",
    category: "Project Ideas",
    source: "Personal Notes",
    url: "#",
    dateAdded: "2024-01-25",
    tags: ["Distributed Systems", "Go", "Background Jobs"]
  },

  // Tools & Links
  {
    id: "tl-1",
    title: "Excalidraw",
    description: "Virtual whiteboard for sketching hand-drawn like diagrams and system architecture designs.",
    category: "Tools & Links",
    source: "Design Tool",
    url: "https://excalidraw.com",
    dateAdded: "2024-01-10",
    tags: ["Design", "Diagrams", "Architecture"]
  },
  {
    id: "tl-2",
    title: "Postman",
    description: "API development environment for testing, documenting, and monitoring REST and GraphQL APIs.",
    category: "Tools & Links",
    source: "API Tool",
    url: "https://postman.com",
    dateAdded: "2024-01-12",
    tags: ["API", "Testing", "Development"]
  },
  {
    id: "tl-3",
    title: "DevDocs",
    description: "Fast, offline, and free documentation browser for 100+ programming languages and frameworks.",
    category: "Tools & Links",
    source: "Documentation",
    url: "https://devdocs.io",
    dateAdded: "2024-01-08",
    tags: ["Documentation", "Reference", "Learning"]
  },
  {
    id: "tl-4",
    title: "Ray.so",
    description: "Create beautiful code screenshots with syntax highlighting for sharing on social media.",
    category: "Tools & Links",
    source: "Developer Tool",
    url: "https://ray.so",
    dateAdded: "2024-02-05",
    tags: ["Code", "Screenshots", "Social Media"]
  },
  {
    id: "tl-5",
    title: "JSON Formatter & Validator",
    description: "Online tool for formatting, validating, and beautifying JSON data with syntax highlighting.",
    category: "Tools & Links",
    source: "Utility",
    url: "https://jsonformatter.org",
    dateAdded: "2024-01-18",
    tags: ["JSON", "Formatting", "Development"]
  }
];

// Helper function to get resources by category
export const getResourcesByCategory = (category: Resource["category"]): Resource[] => {
  return knowledgebaseData.filter(resource => resource.category === category);
};

// Helper function to get pinned resources
export const getPinnedResources = (): Resource[] => {
  return knowledgebaseData.filter(resource => resource.isPinned);
};

// Helper function to search resources
export const searchResources = (query: string): Resource[] => {
  const lowerQuery = query.toLowerCase();
  return knowledgebaseData.filter(resource =>
    resource.title.toLowerCase().includes(lowerQuery) ||
    resource.description.toLowerCase().includes(lowerQuery) ||
    resource.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

// Get all unique tags
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  knowledgebaseData.forEach(resource => {
    resource.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};

// Categories for filtering
export const categories: Resource["category"][] = [
  "Learning Resources",
  "Roadmaps",
  "Project Ideas",
  "Tools & Links"
];
