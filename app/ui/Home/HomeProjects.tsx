"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import MiniCarousel from "../MiniCarousel";
import { CarouselType } from "@/app/lib/definitions";
import { v4 as uuidv4 } from "uuid";

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

const items: CarouselType[] = [
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

export default function HomeProjects() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6"
    >
      <div className="relative p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl rounded-full" />

        <div className="relative space-y-8">
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-blue-400/10 border border-blue-400/20">
                <Rocket className="w-6 h-6 text-blue-400" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white/95 tracking-tight">
                  Projects
                </h2>
                <p className="text-sm text-white/50 mt-1">Things I&apos;ve built</p>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Link
                href="/me#projects"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-400/10 hover:bg-blue-400/20 border border-blue-400/20 hover:border-blue-400/30 text-blue-300 hover:text-blue-200 text-sm font-medium transition-all duration-300"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={itemVariants}>
            <MiniCarousel items={items} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
