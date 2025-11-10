/**
 * Contacts Page - Refactored & CMS-Ready
 *
 * DATA SOURCE: app/data/contacts.data.ts
 * TYPES: types/contacts.ts
 *
 * API Integration Example:
 * ```typescript
 * // Replace static import with API fetch
 * const contactsData = await fetch('/api/contacts').then(r => r.json());
 *
 * // Form submission handler
 * const response = await fetch('/api/contacts/submit', {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify(formData)
 * });
 * ```
 *
 * API Endpoints Needed:
 * - GET /api/contacts -> Returns ContactPageContent
 * - POST /api/contacts/submit -> Accepts ContactFormData
 */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ContactFormData } from "@/app/lib/types/contacts";
import { contactsData } from "@/app/lib/contacts.data";
import ContactInfoCard from "@/app/ui/Contact/ContactInfoCard";
import SocialLinkCard from "@/app/ui/Contact/SocialLinkCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual API call
    // const response = await fetch('/api/contacts/submit', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const { hero, contactInfo, socialLinks, form, responseTime } = contactsData;

  return (
    <main className="flex flex-col min-h-screen pb-20">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div variants={fadeInVariants} className="text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-violet-500/10 border border-violet-400/20 backdrop-blur-sm">
              <Mail className="w-5 h-5 text-violet-400" strokeWidth={2} />
              <span className="text-sm font-semibold text-violet-300 uppercase tracking-wider">
                {hero.badge}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-blue-500 bg-clip-text text-transparent tracking-tight leading-tight">
              {hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light">
              {hero.subtitle}
              <br className="hidden sm:block" />
              {hero.description}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Sidebar */}
          <motion.div variants={fadeInVariants} className="lg:col-span-1 space-y-6">
            {/* Contact Details */}
            <ContactInfoCard
              email={contactInfo.email}
              phone={contactInfo.phone}
              location={contactInfo.location}
            />

            {/* Social Links */}
            <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-bold text-white/95">Connect With Me</h2>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <SocialLinkCard key={link.id} link={link} />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Card */}
            {contactInfo.availability.status === "available" && (
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl border border-green-400/20 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                    <h3 className="text-lg font-bold text-white/95">Available for Work</h3>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {contactInfo.availability.message}
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={cardVariants} className="lg:col-span-2">
            <Card className="bg-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white/95 mb-6">{form.title}</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-white/70 font-medium">
                        {form.fields.name.label} {form.fields.name.required && "*"}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required={form.fields.name.required}
                        placeholder={form.fields.name.placeholder}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-400/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-white/70 font-medium">
                        {form.fields.email.label} {form.fields.email.required && "*"}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required={form.fields.email.required}
                        placeholder={form.fields.email.placeholder}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-400/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-white/70 font-medium">
                      {form.fields.subject.label} {form.fields.subject.required && "*"}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required={form.fields.subject.required}
                      placeholder={form.fields.subject.placeholder}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-400/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-white/70 font-medium">
                      {form.fields.message.label} {form.fields.message.required && "*"}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required={form.fields.message.required}
                      placeholder={form.fields.message.placeholder}
                      rows={form.fields.message.rows}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-violet-400/50 resize-none"
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          {form.submitButton.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" strokeWidth={2} />
                          {form.submitButton.idle}
                        </>
                      )}
                    </Button>
                  </motion.div>

                  <p className="text-xs text-white/40 text-center">
                    {form.disclaimerText}
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Response Time */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 text-center">
          <p className="text-white/60 text-sm">
            <strong className="text-white/90">Average Response Time:</strong> {responseTime.average}
            <span className="mx-2">•</span>
            <strong className="text-white/90">Timezone:</strong> {responseTime.timezone}
          </p>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </main>
  );
}
