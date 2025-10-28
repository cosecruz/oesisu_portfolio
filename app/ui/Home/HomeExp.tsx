'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import MiniCarousel from '../MiniCarousel';
import { CarouselType } from '@/app/lib/definitions';

/**
 * Self-contained HomeExp that demonstrates usage.
 * Re-declare items locally and pass to MiniCarousel.
 */
const HomeExp: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // const items: CarouselType[] = [
  //   { tag: 'UI', title: 'Portfolio Website', label: 'Personal', from: '2023', to: 'Present' },
  //   { tag: 'API', title: 'Auth Service', label: 'Backend', from: '2022', to: '2023' },
  //   { tag: 'DB', title: 'Postgres Setup', label: 'Database', from: '2021', to: '2022' },
  //   { tag: 'Micro', title: 'Event System', label: 'Microservices', from: '2022', to: '2023' },
  //   { tag: 'AI', title: 'Content Assistant', label: 'AI/ML', from: '2023', to: 'Present' },
  //   { tag: 'Tool', title: 'Deployment Workflow', label: 'DevOps', from: '2022', to: '2023' },
  // ]

  const items: CarouselType[] = [
    { tag: 'Education', title: 'University Putra Malaysia', label: 'Bachelor of Software Engineering', from: '2018', to: '2022' },
    { tag: 'Work', title: 'eCloudValley', label: 'Cloud Developer Intern', from: '2024', to: '2024' },
    { tag: '  Work', title: 'Freelance', label: '', from: '2018', to: 'now' },
    { tag: 'Work', title: 'Thee', label: 'Senior Software Engineer', from: '2025', to: 'now' },
  ]

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
      {/* Subtle animated sheen layer */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden"
        initial={{ opacity: 0.08 }}
        animate={{ opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        <div
          style={{
            background:
              'linear-gradient(120deg, rgba(255,255,255,0.06), rgba(255,255,255,0.0) 30%, rgba(255,255,255,0.03) 60%)',
            width: '160%',
            height: '160%',
            transform: 'translate(-20%, -20%) rotate(6deg)',
            filter: 'blur(36px)',
          }}
        />
      </motion.div>

      {/* Heading / Quote */}
      <motion.p
        className="
          relative z-10 text-center italic text-white/90
          text-base sm:text-lg md:text-xl
          font-light tracking-wide leading-relaxed px-2 sm:px-6 md:px-10 mb-1
        "
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
      >
        Experience
      </motion.p>

      {/* Carousel row */}
      <motion.div
        className="w-full flex justify-center items-start relative z-10"
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.22, ease: 'easeOut' }}
      >
        <div className="w-full max-w-[92vw] sm:max-w-[88vw] md:max-w-[80vw]">
          <MiniCarousel items={items} />
        </div>
      </motion.div>

      {/* Decorative subtle glow at bottom */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 transform -translate-x-1/2 bottom-3 w-2/3 h-[1px] rounded-full pointer-events-none"
        initial={{ opacity: 0.06 }}
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.12), rgba(255,255,255,0))',
        }}
      />
    </motion.section>
  )
}

export default HomeExp
