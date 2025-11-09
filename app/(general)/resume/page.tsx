"use client";

import React, { JSX, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Download, Eye, FileText, Mail, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ConnectSection from "@/app/ui/ConnectSection";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

export default function ResumePage(): JSX.Element {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const pdfUrl = "/assets/resume.pdf";

  const getGoogleViewerUrl = () => {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    return `https://docs.google.com/viewer?url=${encodeURIComponent(origin + pdfUrl)}&embedded=true`;
  };
  // const embeddedViewerUrl = `${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1&statusbar=1&messages=1&view=FitH`;

  const openViewerAndNewTab = (e: React.MouseEvent) => {
    if (!e.ctrlKey && !e.metaKey) {
      e.preventDefault();
      setIsViewerOpen(true);
    }
    // Always opens in new tab (even if modal opens)
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <main className="flex flex-col min-h-screen pb-20">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center gap-6 pt-20 pb-12 px-6"
        >
          <motion.div
            variants={fadeInVariants}
            whileHover={{ scale: 1.08, rotate: 8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 backdrop-blur-sm border border-blue-400/20"
          >
            <FileText className="w-10 h-10 text-blue-400" strokeWidth={1.8} />
          </motion.div>

          <motion.div variants={fadeInVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent tracking-tight leading-tight">
              My Resume
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed font-light">
              A comprehensive overview of my professional journey, skills, and achievements.
            </p>
          </motion.div>
        </motion.section>

        {/* Main Content Container */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

            {/* Resume Preview */}
            <motion.div variants={cardVariants} className="lg:col-span-8 order-2 lg:order-1">
              <Card className="group bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_70px_rgba(0,0,0,0.6)] hover:border-white/20 h-full">
                <CardHeader className="pb-3 space-y-1">
                  <CardTitle className="text-xl font-semibold text-white/95 tracking-tight flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Resume Preview
                  </CardTitle>
                  <p className="text-sm text-white/40 font-light">Click to view full version</p>
                </CardHeader>
                <CardContent className="p-3 sm:p-6">
                  <button onClick={() => setIsViewerOpen(true)} className="w-full">
                    <motion.div
                      className="relative w-full aspect-[8.5/11] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800/30 to-slate-900/40 shadow-inner cursor-pointer"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Image
                        src="/assets/Images/resume-preview.png"
                        alt="Resume Preview"
                        fill
                        className="object-contain p-3 sm:p-6 transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                          <Eye className="w-4 h-4" />
                          View in Browser
                        </div>
                      </div>
                    </motion.div>
                  </button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Action Sidebar */}
            <motion.div variants={cardVariants} className="lg:col-span-4 order-1 lg:order-2 space-y-4 lg:sticky lg:top-24 lg:self-start">
              <Card className="bg-white/2 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-white/95 tracking-tight">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 p-4">
                  <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      size="lg"
                      asChild
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 border-0 h-12"
                    >
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={openViewerAndNewTab}
                      >
                        <Eye className="mr-2 h-5 w-5" strokeWidth={2.5} />
                        View Full Resume
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-white/20 hover:border-blue-400/50 text-white hover:bg-blue-400/10 transition-all duration-300 backdrop-blur-sm font-semibold h-12 hover:text-blue-300"
                      asChild
                    >
                      <Link href="/assets/resume.pdf" download>
                        <Download className="mr-2 h-5 w-5" strokeWidth={2.5} />
                        Download PDF
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Custom Version Card - Kept exactly as you had it */}
              <Card className="bg-gradient-to-br from-violet-500/5 to-blue-500/5 backdrop-blur-xl border border-violet-400/20 shadow-lg overflow-hidden">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-violet-400/10 border border-violet-400/20">
                      <Mail className="w-5 h-5 text-violet-400" strokeWidth={2} />
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="text-sm font-semibold text-white/90">Need a Custom Version?</h3>
                      <p className="text-xs text-white/50 leading-relaxed">
                        Request a tailored resume for specific roles or requirements.
                      </p>
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-violet-300 hover:text-violet-200 hover:bg-violet-400/10 transition-all duration-300 font-medium h-10"
                      asChild
                    >
                      <Link href="mailto:youremail@example.com">
                        Request Custom Copy
                        <ExternalLink className="ml-auto h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Stats Card - Updated to Nov 2025 */}
              <Card className="bg-white/2 backdrop-blur-xl border border-white/10 shadow-lg">
                <CardContent className="p-5 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Format</p>
                      <p className="text-sm text-white/90 font-semibold">PDF</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Pages</p>
                      <p className="text-sm text-white/90 font-semibold">3 Pages</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Size</p>
                      <p className="text-sm text-white/90 font-semibold">172 KB</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-white/40 uppercase tracking-wider font-medium">Updated</p>
                      <p className="text-sm text-white/90 font-semibold">Nov 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
          <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <ConnectSection />
      </main>

      {/* MODAL: Full Resume Viewer (Google Docs - 100% reliable) */}
      {isViewerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsViewerOpen(false)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl h-[92vh] bg-white rounded-2xl shadow-4xl overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between p-4 bg-white/95 backdrop-blur-md border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">My Resume - Full View</h3>
              <div className="flex items-center gap-3">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <a href={pdfUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
                <button
                  onClick={() => setIsViewerOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-200 transition"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>

            <iframe
              src={getGoogleViewerUrl()}
              className="w-full flex-1 mt-16"
              allowFullScreen
              loading="lazy"
              title="Resume Viewer"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
