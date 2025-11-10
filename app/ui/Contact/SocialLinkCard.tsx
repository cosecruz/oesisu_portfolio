import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Download } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import type { SocialLink } from "@/app/lib/types/contacts";

interface SocialLinkCardProps {
  link: SocialLink;
}

const iconMap = {
  linkedin: SiLinkedin,
  github: SiGithub,
  external: ExternalLink,
  download: Download,
  twitter: ExternalLink,
  instagram: ExternalLink
};

export default function SocialLinkCard({ link }: SocialLinkCardProps) {
  const IconComponent = iconMap[link.icon] || ExternalLink;
  const isDownload = link.icon === "download";

  return (
    <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
      <Link
        href={link.url}
        target={link.url.startsWith("http") ? "_blank" : undefined}
        rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
        download={isDownload ? true : undefined}
        className={`flex items-center gap-3 p-3 rounded-lg ${link.color} border transition-all duration-300 group ${link.hoverColor}`}
      >
        <IconComponent className="w-5 h-5" strokeWidth={2} />
        <span className="text-sm text-white/80 group-hover:text-white transition-colors">
          {link.label}
        </span>
        <ExternalLink
          className="w-4 h-4 text-white/40 ml-auto group-hover:text-white/60 transition-colors"
          strokeWidth={2}
        />
      </Link>
    </motion.div>
  );
}
