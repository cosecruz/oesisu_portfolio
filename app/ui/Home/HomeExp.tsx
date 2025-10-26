"use client";

import { motion, useInView, Variants, Transition } from 'framer-motion';
import React, { useRef } from 'react';
import SmallCarrousel, { SmallCarrouselType } from '../SmallCarrousel';

// Define animation variants with TypeScript types
const sectionVariants: Variants = {
  hidden: { opacity: 0.4, y: 20 },
  visible: {
    opacity: 0.85, // Semi-opaque section
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    } as Transition,
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' } as Transition,
  },
};

const carouselVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: 'spring', stiffness: 100 } as Transition,
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 } as Transition,
  },
};

function HomeExp() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const items: SmallCarrouselType[] = [
    { tag: 'UI', title: 'Portfolio Website', label: 'Personal', from: '2023', to: 'Present' },
    { tag: 'API', title: 'Auth Service', label: 'Backend', from: '2022', to: '2023' },
    { tag: 'DB', title: 'Postgres Setup', label: 'Database', from: '2021', to: '2022' },
    { tag: 'Micro', title: 'Event System', label: 'Microservices', from: '2022', to: '2023' },
    { tag: 'AI', title: 'Content Assistant', label: 'AI/ML', from: '2023', to: 'Present' },
    { tag: 'Tool', title: 'Deployment Workflow', label: 'DevOps', from: '2022', to: '2023' },
  ];

  return (
    <motion.section
      ref={ref}
      className="min-h-[24rem] p-6 sm:p-8 bg-gradient-to-br from-violet-500/80 to-indigo-600/80 backdrop-blur-md rounded-3xl flex flex-col space-y-6 shadow-xl max-w-7xl mx-auto"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      role="region"
      aria-label="Featured Experience Section"
    >
      <motion.p
        className="text-base sm:text-lg italic text-white/90 leading-relaxed font-serif tracking-wide"
        variants={textVariants}
      >
        &quot;It’s not magic, took me ages to get here&quot;
      </motion.p>

      <motion.div
        className="border border-white/20 rounded-2xl overflow-hidden bg-white/10 shadow-inner"
        variants={carouselVariants}
        whileHover="hover"
      >
        <SmallCarrousel items={items} />
      </motion.div>
    </motion.section>
  );
}

export default HomeExp;
