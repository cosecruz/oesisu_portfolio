"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { MessageCircle, Bot, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ChatPage() {
  return (
    <main className="flex flex-col min-h-screen pb-20">
      {/* Hero */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative pt-20 pb-16 px-6 sm:px-8 lg:px-12 text-center"
      >
        <motion.div variants={fadeUp} className="space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 backdrop-blur-sm">
            <MessageCircle className="w-5 h-5 text-violet-400" />
            <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">
              Chat & Interaction
            </span>
          </div>

          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent leading-tight">
            Talk to Me or My AI Assistant
          </h1>

          <p className="text-white/60 text-lg leading-relaxed font-light">
            This section will soon host two powerful features: an interactive AI assistant and a direct chat system for personalized communication.
          </p>
        </motion.div>
      </motion.section>

      {/* Chat Options */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* AI Chat */}
        <motion.div variants={fadeUp}>
          <Card className="bg-white/[0.03] border border-white/10 hover:border-violet-400/30 transition-all duration-500 backdrop-blur-lg p-6 text-left h-full">
            <CardContent className="space-y-5">
              <div className="flex items-center gap-3">
                <Bot className="w-6 h-6 text-violet-400" />
                <h2 className="text-xl font-semibold text-white/90">AI Chat Assistant</h2>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                In future updates, this will be a conversational AI powered by my own trained model.
                It will help users learn about my work, explore my projects, and even get development guidance.
              </p>
              <Button
                size="sm"
                disabled
                className="bg-violet-500/20 border border-violet-400/30 text-violet-300 cursor-not-allowed"
              >
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Direct Message */}
        <motion.div variants={fadeUp}>
          <Card className="bg-white/[0.03] border border-white/10 hover:border-blue-400/30 transition-all duration-500 backdrop-blur-lg p-6 text-left h-full">
            <CardContent className="space-y-5">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-semibold text-white/90">Message Me Directly</h2>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">
                Users will be able to send me direct messages or inquiries through a form here.
                Messages will be stored and viewable in the admin panel for response.
              </p>
              <form className="space-y-4 pt-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 text-white/80 focus:outline-none focus:ring-2 focus:ring-blue-400/30"
                ></textarea>
                <Button
                  size="sm"
                  type="submit"
                  className="w-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-300 flex items-center justify-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </main>
  );
}
