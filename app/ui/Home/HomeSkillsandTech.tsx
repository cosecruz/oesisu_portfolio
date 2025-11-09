"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import MiniShowcase from "../MiniShowcase";
import type { ShowcaseLayer } from "../MiniShowcase";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15
    }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const skillCategories: ShowcaseLayer[] = [
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
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "Vue.js", icon: "logos:vue" },
      { name: "Nuxt.js", icon: "logos:nuxt-icon" },
      { name: "FastAPI", icon: "logos:fastapi-icon" },
      { name: "Django", icon: "logos:django-icon" },
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

export default function HomeSkillsandTech() {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6"
    >
      <div className="relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-violet-500/5 blur-3xl rounded-full" />

        <div className="relative space-y-10">
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20">
                <Code className="w-6 h-6 text-cyan-400" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/95 tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Skills & Technologies
                </h2>
                <p className="text-sm text-white/50 mt-1">My technical toolkit</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Link
                href="/me#skills"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/20 hover:border-cyan-400/30 text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-all duration-300"
              >
                View All Skills
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Showcase */}
          <motion.div variants={itemVariants}>
            <MiniShowcase layers={skillCategories} pauseOnHover />
          </motion.div>
        </div>

        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </motion.section>
  );
}
