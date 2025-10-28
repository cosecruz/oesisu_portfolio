'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import MiniCarousel from '../MiniCarousel';
import { CarouselType } from '@/app/lib/definitions';
import { v4 as uuidv4 } from 'uuid';

/**
 * Self-contained HomeExp that demonstrates usage.
 * Re-declare items locally and pass to MiniCarousel.
 */
const HomeExp: React.FC = () => {
  // const items: CarouselType[] = [
  //   { tag: 'UI', title: 'Portfolio Website', label: 'Personal', from: '2023', to: 'Present' },
  //   { tag: 'API', title: 'Auth Service', label: 'Backend', from: '2022', to: '2023' },
  //   { tag: 'DB', title: 'Postgres Setup', label: 'Database', from: '2021', to: '2022' },
  //   { tag: 'Micro', title: 'Event System', label: 'Microservices', from: '2022', to: '2023' },
  //   { tag: 'AI', title: 'Content Assistant', label: 'AI/ML', from: '2023', to: 'Present' },
  //   { tag: 'Tool', title: 'Deployment Workflow', label: 'DevOps', from: '2022', to: '2023' },
  // ]

  const items: CarouselType[] = [
    { id: uuidv4(), tag: ["Education", "Undergraduate"], title: "University Putra Malaysia", label: "Bachelor of Software Engineering", from: "2018", to: "2022" },
  { id: uuidv4(), tag: ["Intern","Work"], title: "eCloudValley", label: "Cloud Developer Intern", from: "2024", to: "2025" },
  { id: uuidv4(), tag: ["Work"], title: "Freelance", label: "Independent Contractor", from: "2018", to: "Now" },
  { id: uuidv4(), tag: ["Work"], title: "Thee", label: "Senior Software Engineer", from: "2025", to: "Now" },
  ]

  return (
   <section className="w-full mx-auto p-6 bg-card rounded-3xl shadow-lg border border-main/50">
      <h2 className="text-center text-lg font-light italic text-muted mb-6">Experience</h2>
      <MiniCarousel items={items} />
    </section>
  )
}

export default HomeExp
