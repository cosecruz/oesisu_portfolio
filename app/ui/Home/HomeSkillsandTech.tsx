"use client";

import React from "react";
import { Icon } from "@iconify/react";
import MiniShowcase from "../MiniShowcase";
import { motion } from "framer-motion";

const skillCategories = [
  {
    id: "languages",
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
    id: "frameworks",
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Express", icon: "logos:express" },
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "Vue.js", icon: "logos:vue" },
      { name: "Nuxt.js", icon: "logos:nuxt-icon" },
      { name: "FastAPI", icon: "logos:fastapi-icon" },
      { name: "Django", icon: "logos:django-icon" },
    ],
  },
  {
    id: "cloud-devops",
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
      //compute , serverless,
    ],
  },
  {
    id: "databases",
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
    id: "principles",
    title: "Engineering Principles & Practices",
    items: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "Microservices", icon: "logos:microservices" },
      { name: "System Design", icon: "carbon:ibm-cloud-pak-manta-automate" },
      { name: "Testing", icon: "logos:jest" },
      { name: "CI/CD", icon: "logos:circleci" },
      { name: "Teamwork", icon: "fluent:people-team-24-filled" },
      { name: "Leadership", icon: "mdi:account-tie" },
      { name: "Ownership", icon: "mdi:account-check" },
    ],
  },
];

export default function HomeSkillsandTech() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full mx-auto p-6 sm:p-8 md:p-10
                 bg-card/80 rounded-3xl border border-main/40
                 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.25)]
                 overflow-hidden"
    >
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl
                     font-semibold mb-8 bg-gradient-to-r
                     from-violet-400 to-blue-400 bg-clip-text text-transparent">
        Skills & Technologies
      </h2>

      <MiniShowcase layers={skillCategories} />
    </motion.section>
  );
}
