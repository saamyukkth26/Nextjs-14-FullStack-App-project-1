"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, personalInfo } from "@/lib/data";


const STAT_ITEMS = [
  { value: "8.65", label: "CGPA at VIT", suffix: "" },
  { value: "7", label: "AI/ML Projects", suffix: "+" },
  { value: "2", label: "Certifications", suffix: "+" },
  { value: "1", label: "Year Experience", suffix: "+" },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#0071e3] text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Building the future<br />
            <span className="text-[#86868b]">one model at a time.</span>
          </h2>
        </motion.div>

        {/* Bio + Stats grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-lg text-[#86868b] leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-[#86868b] leading-relaxed mb-8">
              From engineering RAG-based conversational AI systems to building multi-agent orchestration platforms, I thrive in the space where cutting-edge research meets production engineering. Currently at <span className="text-white font-medium">Prodapt</span>, delivering AI-powered solutions at enterprise scale.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                GitHub
              </a>
              <a href={`mailto:${personalInfo.email}`} className="btn">
                ✉ Email Me
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {STAT_ITEMS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition-colors group"
              >
                <div className="text-4xl font-bold text-white mb-1 group-hover:text-[#2997ff] transition-colors">
                  {stat.value}<span className="text-[#0071e3]">{stat.suffix}</span>
                </div>
                <div className="text-sm text-[#86868b]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-10">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], catIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + catIdx * 0.08 }}
                className="p-6 rounded-2xl border border-white/[0.15] bg-white/[0.06] backdrop-blur-md hover:bg-white/[0.10] hover:border-white/[0.25] transition-all duration-300"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 24px rgba(0,0,0,0.3)" }}
              >
                <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-black/40 text-[#86868b] border border-white/[0.08] hover:text-white hover:border-white/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
