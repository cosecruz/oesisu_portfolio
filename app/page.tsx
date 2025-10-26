"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RoleShowcase from "./ui/Home/RoleShowcase";
import ExpBlock from "./ui/Home/ExpBlock";
import HomeExp from "./ui/Home/HomeExp";

export default function Home() {
  return (
    <main className="flex flex-col h-full p-4 sm:p-6 lg:p-10 space-y-10 bg-linear-to-b from-[#19191a] to-[#282c33] text-theme-primary overflow-y-auto scroll-smooth">

      {/* === INTRO SECTION === */}
      <motion.section
        className="intro-section flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Greeting & Info */}
        <div className="flex flex-col text-center md:text-left items-center md:items-start justify-center flex-1">
          <p className="quote text-sm sm:text-base mb-1">👋 Hi there, I&apos;m</p>

          <h1 className="flex text-4xl sm:text-5xl md:text-6xl font-extrabold text-violet-400 mb-2 leading-tight tracking-tight">
            OBIECHI EBUKA SAMUEL
          </h1>

          {/* <p className="quote mb-1 text-sm sm:text-base">aka</p> */}
          {/* can contain links to my github and linkedin */}
          <span className="text-lg sm:text-xl font-mono text-violet-300 mb-4 flex items-center gap-1">
            <strong className="font-bold text-fuchsia-400">@</strong>OESISU
          </span>

          <div className="w-full">
            <RoleShowcase />
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center md:justify-end shrink-0">
          <motion.div
            className="relative rounded-full overflow-hidden border-4 border-violet-400 shadow-[0_0_20px_rgba(123,97,255,0.3)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ width: "clamp(150px, 25vw, 280px)", height: "clamp(150px, 25vw, 280px)" }}
          >
            <Image
              src="/sisuavatar.png"
              alt="Oesisu avatar"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </motion.section>

      {/* === PERSONAL QUOTE === */}
      <motion.section
        className="max-w-3xl mx-auto text-center px-3 sm:px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <p className="text-sm sm:text-base italic text-theme-primary/90 leading-relaxed">
          &quot;I’m a developer driven by curiosity and creativity — I love the process of breaking down complexity into clarity, learning deeply, and crafting solutions that truly work. For me, every challenge is an opportunity to turn ideas into meaningful, functional reality.&quot;
        </p>
      </motion.section>

      {/* === EXPERIENCE BLOCK === */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ExpBlock />
      </motion.section>

      {/* === REACH OUT === */}
      <motion.section
        className="text-center flex justify-center flex-wrap gap-2 p-3 text-base sm:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <button className="quote-button">
          Want to know more?
        </button>
        <span className="text-violet-400 font-semibold">/</span>
        <button className="quote-button ">
          Reach out?
        </button>
      </motion.section>

      {/* === THANK YOU === */}
      <motion.section
        className="text-center text-sm sm:text-base text-violet-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="italic">
          &quot;Glad you’re here — explore, connect, and see what resonates.&quot;
        </p>
      </motion.section>

      {/*  === Experience Section ===*/}
      <motion.section
        className=""
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <HomeExp />
      </motion.section>
    </main>
  );
}
