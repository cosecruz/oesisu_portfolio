"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { BookOpen, Search, ExternalLink, Pin, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { knowledgebaseData, categories } from "@/app/lib/knowledgebase.data";
import type { Resource } from "@/app/lib/knowledgebase.data";

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

// Resource Card Component
interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <motion.div variants={cardVariants}>
      <Link
        href={resource.url}
        target={resource.url.startsWith('http') ? "_blank" : undefined}
        rel={resource.url.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        <Card className="group h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
          {resource.isPinned && (
            <div className="absolute top-4 right-4 z-10">
              <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-400/30">
                <Pin className="w-4 h-4 text-amber-400" strokeWidth={2} fill="currentColor" />
              </div>
            </div>
          )}

          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white/95 group-hover:text-white transition-colors line-clamp-2">
                {resource.title}
              </h3>
              <p className="text-xs text-violet-400 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                {resource.category}
              </p>
            </div>

            <p className="text-sm text-white/70 leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors">
              {resource.description}
            </p>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-white/50">{resource.source}</span>
              <div className="flex items-center gap-2 text-violet-400 group-hover:translate-x-2 transition-transform">
                <span className="text-xs font-medium">View</span>
                <ExternalLink className="w-4 h-4" strokeWidth={2} />
              </div>
            </div>

            {resource.tags && resource.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {resource.tags.slice(0, 3).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2 text-xs text-white/40 pt-2">
              <Calendar className="w-3 h-3" strokeWidth={2} />
              <span>Added {new Date(resource.dateAdded).toLocaleDateString()}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

// Main Knowledge Base Page
export default function KnowledgeBasePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter resources
  const filteredResources = useMemo(() => {
    let filtered = knowledgebaseData;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(resource => resource.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(query) ||
        resource.description.toLowerCase().includes(query) ||
        resource.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  // Get pinned resources
  const pinnedResources = useMemo(() => {
    return knowledgebaseData.filter(r => r.isPinned);
  }, []);

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
              <BookOpen className="w-5 h-5 text-violet-400" strokeWidth={2} />
              <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">
                Knowledge Base
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent tracking-tight leading-tight">
              My Learning Library
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              A curated collection of resources, roadmaps, project ideas, and tools that fuel my growth as a software engineer.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Search & Filters */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="space-y-6">
          {/* Search Bar */}
          <motion.div variants={fadeInVariants} className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" strokeWidth={2} />
            <Input
              type="text"
              placeholder="Search resources, tags, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-400/50 rounded-xl"
            />
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={fadeInVariants} className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedCategory === "All"
                  ? "bg-violet-500/20 text-violet-300 border border-violet-400/30"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-white/10"
              }`}
            >
              All ({knowledgebaseData.length})
            </button>
            {categories.map(category => {
              const count = knowledgebaseData.filter(r => r.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-violet-500/20 text-violet-300 border border-violet-400/30"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-white/10"
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Pinned Resources */}
      {pinnedResources.length > 0 && selectedCategory === "All" && !searchQuery && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
        >
          <motion.div variants={fadeInVariants} className="flex items-center gap-3 mb-6">
            <Pin className="w-5 h-5 text-amber-400" strokeWidth={2} fill="currentColor" />
            <h2 className="text-2xl font-bold text-white/95">Pinned Resources</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </motion.section>
      )}

      {/* Resources Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        {filteredResources.length > 0 ? (
          <>
            <motion.div variants={fadeInVariants} className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white/95">
                {selectedCategory === "All" ? "All Resources" : selectedCategory}
              </h2>
              <span className="text-sm text-white/50">
                {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </>
        ) : (
          <motion.div
            variants={fadeInVariants}
            className="text-center py-16"
          >
            <BookOpen className="w-16 h-16 text-white/20 mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-white/70 mb-2">No resources found</h3>
            <p className="text-white/50">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </motion.section>
    </main>
  );
}
