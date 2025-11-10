"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, ChevronDown, ChevronUp } from "lucide-react";
import { technicalSkills, softSkills } from "@/app/lib/me.data";
import type { SkillCategory, SoftSkill } from "@/app/lib/me.data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

// Skill Progress Bar Component
interface SkillProgressBarProps {
  name: string;
  level: number;
  description?: string;
  delay?: number;
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({
  name,
  level,
  description,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="space-y-2 group"
    >
      {/* Skill Name & Level */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
            {name}
          </h4>
          {description && isHovered && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-white/50 mt-1"
            >
              {description}
            </motion.p>
          )}
        </div>
        <span className="text-xs font-bold text-violet-400 ml-4">
          {level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 rounded-full"
        />

        {/* Glow effect on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="absolute inset-0 bg-gradient-to-r from-violet-400/20 to-cyan-400/20 blur-sm"
          />
        )}
      </div>
    </motion.div>
  );
};

// Technical Skills Category Component
interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, index }) => {
  const [isExpanded, setIsExpanded] = useState(index < 2); // First 2 categories expanded by default

  return (
    <motion.div variants={cardVariants}>
      <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl hover:border-white/20 transition-all duration-500 overflow-hidden">
        <CardContent className="p-6">
          {/* Category Header */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between mb-4 group"
          >
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-white/95 group-hover:text-white transition-colors flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-violet-400 to-blue-400 rounded-full" />
                {category.name}
              </h3>
              <p className="text-xs text-white/50 mt-1">{category.description}</p>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4"
            >
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-white/60" strokeWidth={2} />
              ) : (
                <ChevronDown className="w-5 h-5 text-white/60" strokeWidth={2} />
              )}
            </motion.div>
          </button>

          {/* Skills List */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pt-2">
              {category.skills.map((skill, idx) => (
                <SkillProgressBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  description={skill.description}
                  delay={idx * 0.05}
                />
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Soft Skills Component
interface SoftSkillBadgeProps {
  skill: SoftSkill;
  index: number;
}

const SoftSkillBadge: React.FC<SoftSkillBadgeProps> = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <Card className="h-full bg-gradient-to-br from-violet-500/5 to-blue-500/5 backdrop-blur-xl border border-violet-400/20 shadow-lg hover:shadow-xl hover:border-violet-400/40 transition-all duration-500 overflow-hidden">
        {/* Hover glow */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10"
          />
        )}

        <CardContent className="relative p-4 sm:p-5 text-center space-y-2">
          <h4 className="text-sm sm:text-base font-semibold text-white/95">
            {skill.name}
          </h4>
          <p className="text-xs text-white/60 leading-relaxed">
            {skill.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main Skills Section Component
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={fadeInVariants} className="text-center space-y-4">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 backdrop-blur-sm">
            <Code className="w-5 h-5 text-violet-400" strokeWidth={2} />
            <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">
              Technical Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Skills & Technologies
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical proficiencies and the technologies I work with daily to build scalable, high-performance systems.
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="space-y-6">
          <motion.h3
            variants={fadeInVariants}
            className="text-2xl font-bold text-white/90 mb-6"
          >
            Technical Skills
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {technicalSkills.map((category, index) => (
              <SkillCategoryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="space-y-6 pt-8">
          <motion.div variants={fadeInVariants} className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white/90">
              Soft Skills & Professional Qualities
            </h3>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
              Beyond technical abilities, these are the qualities that drive effective collaboration and successful project delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <SoftSkillBadge
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Skills Summary Stats */}
        <motion.div
          variants={fadeInVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
        >
          <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-xl border border-violet-400/20">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-violet-400 mb-1">6+</p>
              <p className="text-sm text-white/70">Languages</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-400/20">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-blue-400 mb-1">15+</p>
              <p className="text-sm text-white/70">Frameworks</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/20">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-green-400 mb-1">10+</p>
              <p className="text-sm text-white/70">Cloud Tools</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-xl border border-amber-400/20">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-amber-400 mb-1">4+</p>
              <p className="text-sm text-white/70">Years Experience</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
