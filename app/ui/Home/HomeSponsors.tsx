import React, { useRef } from 'react'
import MiniShowcase from '../MiniShowcase';
import { inView, motion, useInView } from 'framer-motion';

const sponsors = [
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "GitHub", logo: "/logos/github.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
];

function HomeSponsors() {
   const ref = useRef<HTMLElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
          ref={ref}
          aria-label="Featured Experience Section"
          className="
            relative w-full max-w-7xl mx-auto
            p-5 sm:p-6 md:p-8
            rounded-3xl
            bg-white/5 backdrop-blur-xl border border-white/6
            shadow-[0_18px_50px_rgba(10,11,12,0.18)]
            flex flex-col items-center justify-start
            space-y-6 sm:space-y-8
            overflow-hidden
          "
          initial={{ opacity: 0, y: 28, scale: 0.995 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 70, damping: 16, duration: 0.9 }}
        >
      <MiniShowcase
         layers={[{ title: "Sponsors", items: sponsors, direction: "left", speed: 100 }]}
  variant="sponsor"
      />
        </motion.section>
  )
}

export default HomeSponsors
