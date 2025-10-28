// app/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RoleShowcase from "./ui/Home/RoleShowcase";
import ExpBlock from "./ui/Home/ExpBlock";
import HomeExp from "./ui/Home/HomeExp";
import HomeProjects from "./ui/Home/HomeProjects";
import HomeSkillsandTech from "./ui/Home/HomeSkillsandTech";
import HomeAchievements from "./ui/Home/HomeAchievements";
import HomeGoals from "./ui/Home/HomeGoals";
import HomeSponsors from "./ui/Home/HomeSponsors";
import HomeContacts from "./ui/Home/HomeContacts";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen space-y-12 xs:space-y-16 md:space-y-20 pb-10">
      {/* Hero */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 max-w-7xl mx-auto px-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm xs:text-base text-muted">Hi, I&apos;m</p>
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            OBIECHI EBUKA SAMUEL
          </h1>
          <p className="text-lg xs:text-xl font-mono text-violet-300 mt-2">@OESISU</p>
          <div className="mt-6">
            <RoleShowcase />
          </div>
        </div>
        <motion.div
          className="relative w-40 h-40 xs:w-48 xs:h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-violet-400 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/assets/Images/sisuavatar.png"
            alt="Oesisu"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Quote */}
      <p className="text-center text-sm xs:text-base italic text-muted max-w-3xl mx-auto px-4">
        “I’m a developer driven by curiosity and creativity — I love breaking down complexity into clarity.”
      </p>

       {/* <p className="text-sm sm:text-base italic text-theme-primary/90 leading-relaxed">
          &quot;I’m a developer driven by curiosity and creativity — I love the process of breaking down complexity into clarity, learning deeply, and crafting solutions that truly work. For me, every challenge is an opportunity to turn ideas into meaningful, functional reality.&quot;
        </p> */}

      {/* Sections */}
      <ExpBlock />
      <CallToAction />
      <Quote text="It’s not magic — it took years of learning." />
      <HomeExp />
      <HomeProjects />
      <HomeSkillsandTech />
      <Quote text="Told you it wasn’t a walk in the park, so let’s look at what was gained" />
      <HomeAchievements />
      <Quote text="Cool, so what’s next you ask" />
      <HomeGoals />
      <Quote text="Don’t forget the shout outs, that’s why you are where you are" />
      <HomeSponsors />
      <Quote text="And one last tiny detail before you go" />
      <HomeContacts />
    </main>
  );
}

function CallToAction() {
  return (
    <section className="text-center space-x-4 text-sm xs:text-base">
      <button className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition">
        Want to know more?
      </button>
      <span className="text-violet-400">/</span>
      <button className="px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition">
        Reach out?
      </button>
    </section>
  );
}

function Quote({ text }: { text: string }) {
  return (
    <p className="text-sm xs:text-base italic text-muted text-center max-w-3xl mx-auto px-4">
      “{text}”
    </p>
  );
}
