"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "@/lib/data";

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: personalInfo.linkedin,
    description: "Connect with me professionally",
    color: "#0A66C2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: personalInfo.github,
    description: "Check out my open source work",
    color: "#ffffff",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
    description: personalInfo.email,
    color: "#0071e3",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    name: "Phone",
    href: `tel:${personalInfo.phone}`,
    description: personalInfo.phone,
    color: "#30d158",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" />
      </svg>
    ),
  },
];

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] rounded-full bg-blue-600/8 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#0071e3] text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s build<br />
            <span className="text-[#86868b]">something together.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg text-[#86868b] leading-relaxed mb-8">
              I&apos;m open to full-time roles, freelance projects, and collaborations in AI/ML, GenAI, and full-stack engineering. If you have an interesting problem to solve, let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0071e3] text-white font-semibold text-base hover:bg-[#2997ff] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,113,227,0.4)]"
              >
                Say Hello
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-[#86868b] font-medium text-base hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                {copied ? "✓ Copied!" : "Copy Email"}
              </button>
            </div>

            {/* Location badge */}
            <div className="flex items-center gap-2 text-[#6e6e73] text-sm">
              <span>📍</span>
              <span>{personalInfo.location}</span>
              <span className="w-1 h-1 rounded-full bg-[#6e6e73]" />
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to remote
              </span>
            </div>
          </motion.div>

          {/* Right — Social cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {SOCIAL_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="group p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110"
                  style={{ color: link.color, background: `${link.color}15`, border: `1px solid ${link.color}30` }}
                >
                  {link.icon}
                </div>
                <div className="font-semibold text-white text-sm mb-0.5">{link.name}</div>
                <div className="text-xs text-[#6e6e73] truncate">{link.description}</div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0071e3] flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <span className="text-[#6e6e73] text-sm">Saamyukkth Suresh</span>
          </div>
          <p className="text-[#6e6e73] text-sm">
            Built with Next.js 14, Framer Motion & Three.js &mdash; {new Date().getFullYear()}
          </p>
          <div className="flex gap-4">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#6e6e73] hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#6e6e73] hover:text-white transition-colors text-sm">GitHub</a>
            <a href={`mailto:${personalInfo.email}`} className="text-[#6e6e73] hover:text-white transition-colors text-sm">Email</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
