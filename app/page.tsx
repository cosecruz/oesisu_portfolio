"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import RoleShowcase from "./ui/Home/RoleShowcase";
import ExpBlock from "./ui/Home/ExpBlock";
import HomeExp from "./ui/Home/HomeExp";
import HomeProjects from "./ui/Home/HomeProjects";
import HomeSkillsandTech from "./ui/Home/HomeSkillsandTech";
import HomeAchievements from "./ui/Home/HomeAchievements";
import HomeGoals from "./ui/Home/HomeGoals";
import HomeSponsors from "./ui/Home/HomeSponsors";
import HomeContacts from "./ui/Home/HomeContacts";

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
  return (
    <main className="flex flex-col min-h-screen space-y-20 md:space-y-28 pb-16">
      {/* Hero Section - Enhanced */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="relative pt-12 pb-8"
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-transparent pointer-events-none rounded-3xl" />

        <div className="relative flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto px-4">
          {/* Left: Text Content */}
          <motion.div variants={fadeInVariants} className="flex-1 text-center lg:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-300">Available for opportunities</span>
            </motion.div>

            <div>
              <p className="text-sm sm:text-base text-white/60 font-light mb-2">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent leading-tight tracking-tight">
                OBIECHI EBUKA SAMUEL
              </h1>
              <p className="text-lg sm:text-xl font-mono text-violet-300 mt-3 tracking-wide">
                @OESISU
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
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300 border-0"
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
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-blue-500/40 blur-3xl rounded-full" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-violet-400/30 shadow-2xl shadow-violet-500/20">
                <Image
                  src="/assets/Images/sisuavatar.png"
                  alt="Oesisu"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Quote Section - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4"
      >
        <blockquote className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl">
          <div className="absolute top-4 left-4 text-6xl text-violet-400/20 font-serif">&quot;</div>
          <p className="relative text-center text-base sm:text-lg italic text-white/80 leading-relaxed">
            I&apos;m a developer driven by curiosity and creativity — I love breaking down complexity into clarity.
          </p>
          <div className="absolute bottom-4 right-4 text-6xl text-violet-400/20 font-serif rotate-180">&quot;</div>
        </blockquote>
      </motion.div>

      {/* Experience Stats Block */}
      <ExpBlock />

      {/* Divider Quote */}
      <Quote text="It's not magic — it took years of learning." />

      {/* Experience Section */}
      <HomeExp />

      {/* Projects Section */}
      <HomeProjects />

      {/* Skills & Tech Section */}
      <HomeSkillsandTech />

      {/* Divider Quote */}
      <Quote text="Told you it wasn't a walk in the park, so let's look at what was gained" />

      {/* Achievements Section */}
      <HomeAchievements />

      {/* Divider Quote */}
      <Quote text="Cool, so what's next you ask" />

      {/* Goals Section */}
      <HomeGoals />

      {/* Divider Quote */}
      <Quote text="Don't forget the shout outs, that's why you are where you are" />

      {/* Sponsors Section */}
      <HomeSponsors />

      {/* Divider Quote */}
      <Quote text="And one last tiny detail before you go" />

      {/* Contacts Section */}
      <HomeContacts />
    </main>
  );
}

// Enhanced Quote Component
function Quote({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-4"
    >
      <div className="relative p-6 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
        <p className="text-sm sm:text-base text-center italic text-white/70 leading-relaxed">
          &quot;{text}&quot;
        </p>
      </div>
    </motion.div>
  );
}
