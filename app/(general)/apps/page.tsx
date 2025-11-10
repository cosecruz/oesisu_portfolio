"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Rocket, ExternalLink, Download, Star, Clock, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { appsData, appTypes } from "@/app/lib/apps.data";
import type { App } from "@/app/lib/apps.data";

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

// Status Badge Component
const StatusBadge: React.FC<{ status: App["status"] }> = ({ status }) => {
  const config = {
    "Live": { color: "bg-green-500/20 text-green-300 border-green-400/30", icon: CheckCircle },
    "Beta": { color: "bg-blue-500/20 text-blue-300 border-blue-400/30", icon: Clock },
    "Coming Soon": { color: "bg-amber-500/20 text-amber-300 border-amber-400/30", icon: AlertCircle },
    "Maintenance": { color: "bg-red-500/20 text-red-300 border-red-400/30", icon: AlertCircle },
  };

  const { color, icon: Icon } = config[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${color}`}>
      <Icon className="w-3 h-3" strokeWidth={2} />
      {status}
    </span>
  );
};

// Pricing Badge Component
const PricingBadge: React.FC<{ pricing: App["pricing"] }> = ({ pricing }) => {
  const colors = {
    "Free": "bg-green-500/10 text-green-400 border-green-400/20",
    "Freemium": "bg-blue-500/10 text-blue-400 border-blue-400/20",
    "Premium": "bg-violet-500/10 text-violet-400 border-violet-400/20",
    "Enterprise": "bg-amber-500/10 text-amber-400 border-amber-400/20",
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${colors[pricing]}`}>
      {pricing}
    </span>
  );
};

// App Card Component
interface AppCardProps {
  app: App;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <motion.div variants={cardVariants}>
      <Card className="group h-full bg-white/2 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <CardContent className="p-0">
          {/* App Image */}
          <div className="relative h-48 bg-linear-to-br from-slate-800/50 to-slate-900/50 overflow-hidden">
            {app.image ? (
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Rocket className="w-16 h-16 text-white/20" strokeWidth={1.5} />
              </div>
            )}

            {/* Overlay badges */}
            <div className="absolute top-3 left-3">
              <StatusBadge status={app.status} />
            </div>

            {app.isFeatured && (
              <div className="absolute top-3 right-3">
                <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-400/30 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-amber-400" strokeWidth={2} fill="currentColor" />
                </div>
              </div>
            )}
          </div>

          {/* App Info */}
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white/95 group-hover:text-white transition-colors mb-1">
                  {app.title}
                </h3>
                <p className="text-xs text-violet-400 font-medium">{app.category}</p>
              </div>
              <PricingBadge pricing={app.pricing} />
            </div>

            <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
              {app.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {app.technologies.slice(0, 4).map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60"
                >
                  {tech}
                </span>
              ))}
              {app.technologies.length > 4 && (
                <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/50">
                  +{app.technologies.length - 4}
                </span>
              )}
            </div>

            {/* Features */}
            {app.features && app.features.length > 0 && (
              <ul className="space-y-1 pt-2">
                {app.features.slice(0, 2).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-white/60">
                    <span className="text-violet-400 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4">
              {app.url && app.status === "Live" && (
                <Button
                  size="sm"
                  className="flex-1 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 border border-violet-400/30"
                  asChild
                >
                  <Link href={app.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" strokeWidth={2} />
                    Launch
                  </Link>
                </Button>
              )}

              {app.downloadUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-white/20 hover:bg-white/10"
                  asChild
                >
                  <Link href={app.downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" strokeWidth={2} />
                    Download
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main Apps Page
export default function AppsPage() {
  const [selectedType, setSelectedType] = useState<string>("All");

  // Filter apps
  const filteredApps = useMemo(() => {
    if (selectedType === "All") return appsData;
    return appsData.filter(app => app.type === selectedType);
  }, [selectedType]);

  // Get featured apps
  const featuredApps = useMemo(() => {
    return appsData.filter(app => app.isFeatured);
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
        <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-blue-500/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div variants={fadeInVariants} className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 backdrop-blur-sm">
              <Rocket className="w-5 h-5 text-violet-400" strokeWidth={2} />
              <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">
                Apps & Products
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-linear-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent tracking-tight leading-tight">
              My Apps & Services
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              A collection of live applications, tools, and experimental projects I&apos;ve built to solve real-world problems and explore new technologies.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Tabs */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <motion.div variants={fadeInVariants} className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setSelectedType("All")}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedType === "All"
                ? "bg-violet-500/20 text-violet-300 border border-violet-400/30"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-white/10"
            }`}
          >
            All Apps ({appsData.length})
          </button>
          {appTypes.map(type => {
            const count = appsData.filter(app => app.type === type).length;
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedType === type
                    ? "bg-violet-500/20 text-violet-300 border border-violet-400/30"
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-white/10"
                }`}
              >
                {type} ({count})
              </button>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Featured Apps */}
      {featuredApps.length > 0 && selectedType === "All" && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
        >
          <motion.div variants={fadeInVariants} className="flex items-center gap-3 mb-6">
            <Star className="w-5 h-5 text-amber-400" strokeWidth={2} fill="currentColor" />
            <h2 className="text-2xl font-bold text-white/95">Featured Apps</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </motion.section>
      )}

      {/* Apps Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <motion.div variants={fadeInVariants} className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white/95">
            {selectedType === "All" ? "All Apps" : `${selectedType} Apps`}
          </h2>
          <span className="text-sm text-white/50">
            {filteredApps.length} {filteredApps.length === 1 ? "app" : "apps"}
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
