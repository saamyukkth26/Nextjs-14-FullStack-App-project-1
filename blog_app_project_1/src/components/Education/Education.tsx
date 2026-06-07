"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, certifications } from "@/lib/data";

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#0071e3] text-sm font-semibold tracking-widest uppercase mb-3">
            Education & Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Credentials that<br />
            <span className="text-[#86868b]">back the work.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-widest mb-8">
              Education
            </p>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative p-7 rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 overflow-hidden group"
                >
                  {/* Glow */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: edu.color }}
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${edu.color}, ${edu.color}99)` }}
                    >
                      V
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-base">{edu.institution}</h3>
                      <p className="text-[#86868b] text-sm mt-1">
                        {edu.degree}
                      </p>
                      <p className="text-[#6e6e73] text-xs mt-0.5">{edu.specialization}</p>
                      <div className="flex items-center gap-4 mt-4 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-[#6e6e73]">CGPA</span>
                          <span className="text-sm font-bold text-white">{edu.cgpa}</span>
                        </div>
                        <div className="w-px h-4 bg-white/10" />
                        <span className="text-xs text-[#6e6e73]">{edu.period}</span>
                        <div className="w-px h-4 bg-white/10" />
                        <span className="text-xs text-[#6e6e73]">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-widest mb-8">
              Certifications
            </p>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 group overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
                    style={{ background: cert.color }}
                  />

                  <div className="pl-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-white group-hover:text-[#2997ff] transition-colors leading-snug">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-[#86868b] mt-1">
                          {cert.issuer} &bull; {cert.date}
                        </p>
                      </div>
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0"
                        style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                      >
                        🏆
                      </div>
                    </div>
                    <p className="text-xs text-[#6e6e73] mt-2 leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-medium rounded-full"
                          style={{
                            background: `${cert.color}15`,
                            color: cert.color,
                            border: `1px solid ${cert.color}30`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
