"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Download, Sparkles, Code, Rocket, Target, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import RoleShowcase from "./ui/Home/RoleShowcase";
import ExpBlock from "./ui/Home/ExpBlock";
import HomeExp from "./ui/Home/HomeExp";
import HomeProjects from "./ui/Home/HomeProjects";
import HomeSkillsandTech from "./ui/Home/HomeSkillsandTech";
import HomeAchievements from "./ui/Home/HomeAchievements";
import HomeGoals from "./ui/Home/HomeGoals";
import HomeSponsors from "./ui/Home/HomeSponsors";
import ConnectSection from "./ui/ConnectSection";
import {HomeData} from "./lib/home.data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

export default function Home() {
  const {intro} = HomeData
  return (
    <main className="flex flex-col min-h-screen space-y-20 md:space-y-28 pb-16">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="relative pt-12 pb-8"
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 via-blue-500/5 to-transparent pointer-events-none rounded-3xl" />

        <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto px-4">
          {/* Left: Text Content */}
          <motion.div variants={fadeInVariants} className="flex-1 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">Available for opportunities</span>
            </motion.div>

            <div>
              <p className="text-sm sm:text-base text-white/60 font-light mb-2">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold bg-linear-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent leading-tight tracking-tight">
                {intro.fullname.toUpperCase()}
              </h1>
              <p className="text-lg sm:text-xl font-mono text-violet-300 mt-3 tracking-wide">
                {`@${intro.alias?.toUpperCase()}`}
              </p>
            </div>

            <div className="pt-4">
              <RoleShowcase />
            </div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  className="bg-linear-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300 border-0"
                  asChild
                >
                  <Link href="/me">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:border-violet-400/50 text-white hover:bg-violet-400/10 backdrop-blur-sm font-semibold transition-all duration-300"
                  asChild
                >
                  <Link href="/resume">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            variants={imageVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-linear-to-br from-violet-500/40 to-blue-500/40 blur-3xl rounded-full" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-violet-400/30 shadow-2xl shadow-violet-500/20">
                <Image
                  src={intro.avatar}
                  alt={intro.fullname}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4"
      >
        <blockquote className="relative p-8 sm:p-10 rounded-2xl bg-linear-to-br from-white/5 to-white/2 backdrop-blur-xl border border-white/10 shadow-xl">
          <div className="absolute top-4 left-4 text-6xl text-violet-400/20 font-serif">&quot;</div>
          <p className="relative text-center text-base sm:text-lg italic text-white/80 leading-relaxed">
            {intro.quote}
          </p>
          <div className="absolute bottom-4 right-4 text-6xl text-violet-400/20 font-serif rotate-180">&quot;</div>
        </blockquote>
      </motion.div>

      {/* Quick Navigation Cards */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickNavCard
            icon={Code}
            title="Projects"
            description="Explore my latest work"
            href="/projects"
            gradient="from-blue-500/20 to-cyan-500/20"
            iconColor="text-cyan-400"
          />
          <QuickNavCard
            icon={Rocket}
            title="Goals"
            description="My future aspirations"
            href="/goals"
            gradient="from-violet-500/20 to-purple-500/20"
            iconColor="text-purple-400"
          />
          <QuickNavCard
            icon={Target}
            title="Skills"
            description="Technical expertise"
            href="/me#skills"
            gradient="from-green-500/20 to-emerald-500/20"
            iconColor="text-emerald-400"
          />
          <QuickNavCard
            icon={Mail}
            title="Contact"
            description="Let's connect"
            href="/contacts"
            gradient="from-pink-500/20 to-rose-500/20"
            iconColor="text-rose-400"
          />
        </div>
      </motion.section>

      {/* Experience Stats Block */}
      <ExpBlock />

      {/* Divider Quote */}
      <Quote text="It's not magic — it took years of learning and dedication." />

      {/* Experience Section */}
      <HomeExp />

      {/* Projects Section */}
      <HomeProjects />

      {/* Skills & Tech Section */}
      <HomeSkillsandTech />

      {/* Divider Quote */}
      <Quote text="Building scalable systems and solving complex problems is what drives me." />

      {/* Achievements Section */}
      <HomeAchievements />

      {/* Divider Quote */}
      <Quote text="The journey continues — here's what's next." />

      {/* Goals Section */}
      <HomeGoals />

      {/* Divider Quote */}
      <Quote text="Grateful for those who've supported me along the way." />

      {/* Sponsors Section */}
      <HomeSponsors />

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 text-center"
      >
        <div className="p-10 rounded-3xl bg-linear-to-br from-violet-500/10 to-blue-500/10 border border-violet-400/20 backdrop-blur-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white/95 mb-4">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Open to new opportunities and exciting projects
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-violet-500 hover:bg-violet-600" asChild>
              <Link href="/contacts">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10" asChild>
              <Link href="/projects">
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Connect Section */}
      <ConnectSection />
    </main>
  );
}

// Quick Navigation Card Component
interface QuickNavCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  gradient: string;
  iconColor: string;
}

function QuickNavCard({ icon: Icon, title, description, href, gradient, iconColor }: QuickNavCardProps) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="group relative p-6 rounded-2xl bg-white/2 backdrop-blur-xl border border-white/10 hover:border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
      >
        <div className={`absolute inset-0 bg-linear-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative space-y-4">
          <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={2} />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white/95 group-hover:text-white transition-colors mb-1">
              {title}
            </h3>
            <p className="text-sm text-white/60 group-hover:text-white/70 transition-colors">
              {description}
            </p>
          </div>

          <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-2 transition-all duration-300" strokeWidth={2} />
        </div>
      </motion.div>
    </Link>
  );
}

// Enhanced Quote Component
function Quote({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-3xl mx-auto px-4"
    >
      <div className="relative p-6 rounded-xl bg-white/2 border border-white/10 backdrop-blur-sm">
        <p className="text-sm sm:text-base text-center italic text-white/70 leading-relaxed">
          &quot;{text}&quot;
        </p>
      </div>
    </motion.div>
  );
}
