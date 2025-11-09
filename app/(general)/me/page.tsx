"use client";

import React, { JSX, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Coffee,
  Book,
  Music,
  Camera,
  Code,
  Rocket
} from "lucide-react";
import ConnectSection from "@/app/ui/ConnectSection";
import DetailSection, { DetailItem } from "@/app/ui/DetailSection";

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

/**
 * CMS DATA - Replace with API calls in production
 * Example: const data = await fetch('/api/me').then(r => r.json())
 */

const bioData = {
  intro: "I'm a passionate software engineer who thrives at the intersection of creativity and technology.",
  philosophy: "I believe great software isn't just about functionality—it's about crafting experiences.",
  journey: "My journey began with curiosity and evolved into a relentless pursuit of excellence.",
  tags: ["Full Stack", "Cloud Native", "DevOps", "System Design"],
  images: ["/assets/Images/sisuavatar.png"]
};

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" }
];

const educationData: DetailItem[] = [
  {
    id: "edu-1",
    title: "Bachelor of Software Engineering",
    organization: "University Putra Malaysia",
    startDate: "2018",
    endDate: "2022",
    description: "Comprehensive software engineering program focusing on modern development practices.",
    highlights: ["Dean's List 6 semesters", "Led cloud microservices project"],
    tags: ["Software Engineering", "Cloud Computing"]
  }
];

const experienceData: DetailItem[] = [
  {
    id: "exp-1",
    title: "Senior Software Engineer",
    organization: "Thee",
    startDate: "2025",
    endDate: "Present",
    description: "Leading development of cloud-native applications and microservices architecture.",
    highlights: ["Architected scalable microservices", "Mentored 5 junior developers"],
    tags: ["AWS", "Microservices", "TypeScript", "Leadership"]
  }
];

const projectsData: DetailItem[] = [
  {
    id: "proj-1",
    title: "Ije - Microservices Platform",
    subtitle: "Authentication & Core Services",
    startDate: "2025",
    endDate: "Present",
    description: "Building scalable backend microservices with AWS Lambda and API Gateway.",
    tags: ["AWS", "Lambda", "TypeScript", "Microservices"]
  }
];

const achievementsData: DetailItem[] = [
  {
    id: "ach-1",
    title: "AWS Certified Developer Associate",
    organization: "Amazon Web Services",
    startDate: "2024",
    endDate: "2027",
    description: "Validated expertise in developing and maintaining AWS applications.",
    tags: ["AWS", "Cloud", "Certification"]
  }
];

const hobbies = [
  { icon: Book, name: "Reading", description: "Tech blogs, sci-fi novels" },
  { icon: Music, name: "Music", description: "Lo-fi beats while coding" },
  { icon: Camera, name: "Photography", description: "Urban landscapes" },
  { icon: Coffee, name: "Coffee", description: "Exploring brewing methods" },
];

const lifeValues = [
  { title: "Continuous Learning", description: "Always growing, always improving" },
  { title: "Creative Problem Solving", description: "Elegant solutions to complex challenges" },
  { title: "Work-Life Balance", description: "Building great things while living fully" },
  { title: "Community", description: "Sharing knowledge and lifting others" },
];

export default function MePage(): JSX.Element {
  const searchParams = useSearchParams();

  // Scroll to section if coming from home page link
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [searchParams]);

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInVariants} className="space-y-6">
              <div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent tracking-tight leading-tight mb-4">
                  About Me
                </h1>
                <p className="text-xl sm:text-2xl text-white/60 font-light">
                  Software Engineer · Problem Solver · Lifelong Learner
                </p>
              </div>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                {bioData.intro}
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {bioData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInVariants} className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  <Image
                    src={bioData.images[0]}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl mt-8"
                >
                  <Image
                    src={bioData.images[0]}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Philosophy */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div variants={cardVariants}>
          <Card className="bg-gradient-to-br from-violet-500/5 to-blue-500/5 backdrop-blur-xl border border-violet-400/20 shadow-2xl">
            <CardContent className="p-8 sm:p-12 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-violet-400/10 border border-violet-400/20">
                  <Code className="w-6 h-6 text-violet-400" strokeWidth={2} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white/95">My Philosophy</h2>
              </div>
              <p className="text-lg text-white/70 leading-relaxed">{bioData.philosophy}</p>
              <p className="text-lg text-white/70 leading-relaxed">{bioData.journey}</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Quotes */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.h2
          variants={fadeInVariants}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
        >
          Words That Inspire Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-white/2 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-500">
                <CardContent className="p-6 sm:p-8 flex flex-col justify-between h-full">
                  <p className="text-white/80 italic text-base sm:text-lg leading-relaxed mb-6">
                    &quot;{quote.text}&quot;
                  </p>
                  <p className="text-sm text-violet-400 font-semibold">— {quote.author}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education - CMS Powered */}
      <DetailSection
        id="education"
        title="Education"
        icon={GraduationCap}
        iconColor="blue"
        items={educationData}
        layout="timeline"
        maxWidth="xl"
      />

      {/* Experience - CMS Powered */}
      <DetailSection
        id="experience"
        title="Professional Experience"
        icon={Briefcase}
        iconColor="violet"
        items={experienceData}
        layout="timeline"
        maxWidth="xl"
      />

      {/* Projects - CMS Powered */}
      <DetailSection
        id="projects"
        title="Featured Projects"
        icon={Rocket}
        iconColor="blue"
        items={projectsData}
        layout="timeline"
        maxWidth="xl"
      />

      {/* Achievements - CMS Powered */}
      <DetailSection
        id="achievements"
        title="Achievements & Certifications"
        icon={Award}
        iconColor="violet"
        items={achievementsData}
        layout="grid"
        maxWidth="xl"
      />

      {/* Life Values */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div variants={fadeInVariants} className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-blue-400/10 border border-blue-400/20">
            <Heart className="w-8 h-8 text-blue-400" strokeWidth={2} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/95">What I Value</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lifeValues.map((value, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-blue-400/30 transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white/95 mb-3">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Hobbies */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <motion.div variants={fadeInVariants} className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-xl bg-violet-400/10 border border-violet-400/20">
            <Coffee className="w-8 h-8 text-violet-400" strokeWidth={2} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white/95">Beyond Code</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-gradient-to-br from-violet-500/5 to-blue-500/5 backdrop-blur-xl border border-violet-400/20 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-2xl bg-violet-400/10 border border-violet-400/20">
                    <hobby.icon className="w-8 h-8 text-violet-400" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg font-semibold text-white/95">{hobby.name}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{hobby.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Separator */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Connect */}
      <ConnectSection />
    </main>
  );
}
