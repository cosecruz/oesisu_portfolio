'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import MiniCarousel from '../MiniCarousel';
import { CarouselType } from '@/app/lib/definitions';
import {v4 as uuidv4} from "uuid"

/**
 * Self-contained HomeProjects that demonstrates usage.
 * Re-declare items locally and pass to MiniCarousel.
 */
const HomeProjects: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

 const items: CarouselType[] = [
  {
    id: uuidv4(),
    tag: ["Frontend", "NextJS", "Maintenance"],
    title: "Portfolio Website",
    label: "Personal",
    from: "2023",
    to: "Present",
  },
  {
    id: uuidv4(),
    tag: ["API", "TypeScript", "In Dev"],
    title: "Ije Auth Service",
    label: "Backend Service for Ije",
    from: "2022",
    to: "2023",
  },
  {
    id: uuidv4(),
    tag: ["Microservices", "AWS", "System", "Ongoing"],
    title: "Ije",
    label: "Backend Services for Ije",
    from: "2025",
    to: "Present",
  },
  {
    id: uuidv4(),
    tag: ["AWS", "Lambda", "API Gateway", "AI Recommendation", "Completed"],
    title: "HE Mart",
    label: "E-commerce Platform",
    from: "2024",
    to: "2024",
  },

  {
    id: uuidv4(),
    tag: ["AWS", "Lambda", "API Gateway", "VueJS", "Completed"],
    title: "Zappit",
    label: "E-commerce Platform",
    from: "2024",
    to: "2025",
  },
  {
    id: uuidv4(),
    tag: ["AWS", "NodeJS", "VueJS", "Completed"],
    title: "TIMS",
    label: "Data Visualization",
    from: "2024",
    to: "2025",
  },
  {
    id: uuidv4(),
    tag: ["AWS", "AI/ML"],
    title: "MTR",
    label: "Fault Line Prediction and Data Visualization",
    from: "2024",
    to: "2025",
  },
  {
    id: uuidv4(),
    tag: ["AI", "ML"],
    title: "Content Assistant",
    label: "AI/ML",
    from: "2023",
    to: "Present",
  },
  {
    id: uuidv4(),
    tag: ["Tool", "DevOps"],
    title: "Deployment Workflow",
    label: "DevOps",
    from: "2025",
    to: "2025",
  },
];

  return (
    <section className="max-w-full mx-auto p-6 bg-card rounded-3xl shadow-lg border border-main/50">
      <h2 className="text-center text-lg font-light italic text-muted mb-6">Projects</h2>
      <MiniCarousel items={items} />
    </section>
  )
}

export default HomeProjects
