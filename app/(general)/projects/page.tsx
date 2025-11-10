/**
 * Projects Page - Refactored & CMS-Ready
 *
 * DATA SOURCE: app/data/projects.data.ts
 * TYPES: types/projects.ts
 *
 * API Integration Example:
 * ```typescript
 * const projectsData = await fetch('/api/projects').then(r => r.json());
 * ```
 *
 * API Endpoints Needed:
 * - GET /api/projects -> Returns ProjectsPageContent
 * - GET /api/projects/:id -> Returns PortfolioProject
 * - POST /api/projects -> Create project (admin)
 * - PUT /api/projects/:id -> Update project (admin)
 */

"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Code, Filter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ConnectSection from "@/app/ui/ConnectSection";
import { getProjectsByCategory, projectsData } from "@/app/lib/projects.data";
import ProjectCard from "@/app/ui/Project/ProjectCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { hero, categories, cta } = projectsData;

  const filteredProjects = useMemo(() => {
    return getProjectsByCategory(selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="flex flex-col min-h-screen pb-20">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div variants={fadeInVariants} className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 backdrop-blur-sm">
              <Code className="w-5 h-5 text-violet-400" strokeWidth={2} />
              <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">
                {hero.badge}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent tracking-tight leading-tight">
              {hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              {hero.subtitle}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Buttons */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <motion.div variants={fadeInVariants} className="flex items-center gap-2 flex-wrap justify-center">
          <Filter className="w-5 h-5 text-white/50" strokeWidth={2} />
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-violet-500/20 text-violet-300 border border-violet-400/30"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-white/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            variants={fadeInVariants}
            className="text-center py-16"
          >
            <Code className="w-16 h-16 text-white/20 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white/70 mb-2">No projects found</h3>
            <p className="text-white/50">Try selecting a different category</p>
          </motion.div>
        )}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="p-10 rounded-3xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-violet-400/20 backdrop-blur-xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white/95 mb-4">
            {cta.title}
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            {cta.description}
          </p>
          <Button size="lg" className="bg-violet-500 hover:bg-violet-600" asChild>
            <Link href={cta.buttonLink}>
              {cta.buttonText}
            </Link>
          </Button>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <ConnectSection />
    </main>
  );
}
