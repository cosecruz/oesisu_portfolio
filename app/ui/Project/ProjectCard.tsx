import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PortfolioProject } from "@/app/lib/types/projects";

interface ProjectCardProps {
  project: PortfolioProject;
}

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

const statusColors = {
  "Completed": "bg-green-500/20 text-green-300 border-green-400/30",
  "In Progress": "bg-blue-500/20 text-blue-300 border-blue-400/30",
  "POC": "bg-amber-500/20 text-amber-300 border-amber-400/30",
  "Maintenance": "bg-purple-500/20 text-purple-300 border-purple-400/30"
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={cardVariants}>
      <Card className="group h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <CardContent className="p-8 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10`}>
              <project.icon className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
            <div className="flex gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>
          </div>

          {/* Title & Category */}
          <div>
            <h3 className="text-2xl font-bold text-white/95 group-hover:text-white transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-violet-400">{project.category}</p>
          </div>

          {/* Description */}
          <p className="text-white/70 leading-relaxed">
            {project.description}
          </p>

          {/* Details - Show first 2 */}
          <ul className="space-y-2">
            {project.details.slice(0, 2).map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                <span className="text-violet-400 mt-1">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div>
            <p className="text-xs text-white/40 uppercase tracking-wider font-semibold mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 6 && (
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/50">
                  +{project.techStack.length - 6} more
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            {project.demo && (
              <Button
                size="sm"
                className="flex-1 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 border border-violet-400/30"
                asChild
              >
                <Link href={project.demo}>
                  <ExternalLink className="w-4 h-4 mr-2" strokeWidth={2} />
                  Demo
                </Link>
              </Button>
            )}
            {project.github && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 border-white/20 hover:bg-white/10"
                asChild
              >
                <Link href={project.github}>
                  <SiGithub className="w-4 h-4 mr-2" />
                  Code
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
