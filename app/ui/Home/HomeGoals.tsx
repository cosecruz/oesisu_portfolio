"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Target, Rocket, Brain, Users, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.12
    }
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

interface Goal {
  icon: LucideIcon;
  title: string;
  description: string;
  color: keyof typeof colorClasses;
  glow: string;
}

const goals: Goal[] = [
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

const colorClasses = {
  blue: "bg-blue-400/10 border-blue-400/20 text-blue-400",
  purple: "bg-purple-400/10 border-purple-400/20 text-purple-400",
  green: "bg-green-400/10 border-green-400/20 text-green-400",
  amber: "bg-amber-400/10 border-amber-400/20 text-amber-400",
} as const;

export default function HomeGoals() {
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-violet-500/5 via-blue-500/5 to-purple-500/5 blur-3xl rounded-full" />

        <div className="relative space-y-10">
          {/* Header */}
          <motion.div variants={cardVariants} className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 backdrop-blur-sm">
              <Target className="w-5 h-5 text-violet-400" strokeWidth={2} />
              <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">
                Future Goals
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white/95 tracking-tight">
              What&apos;s Next on My Journey
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Constantly pushing boundaries and setting ambitious goals to grow as an engineer and leader
            </p>
          </motion.div>

          {/* Goals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-500 overflow-hidden group">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${goal.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <CardContent className="relative p-6 sm:p-8 space-y-4">
                    <div className={`inline-flex p-4 rounded-2xl ${colorClasses[goal.color]} border transition-all duration-300 group-hover:scale-110`}>
                      <goal.icon className="w-7 h-7" strokeWidth={2} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white/95 group-hover:text-white transition-colors">
                        {goal.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/60 leading-relaxed group-hover:text-white/70 transition-colors">
                        {goal.description}
                      </p>
                    </div>

                    {/* Progress indicator (decorative) */}
                    <div className="pt-4">
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(index + 1) * 20}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                          className={`h-full bg-gradient-to-r ${goal.glow.replace('/20', '/60')}`}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            variants={cardVariants}
            className="text-center pt-6"
          >
            <p className="text-sm text-white/50 italic">
              &quot;The best way to predict the future is to create it&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
