"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experience } from "@/lib/data";

function CompanyLogo({ company, color }: { company: string; color: string }) {
  return (
    <div
      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0"
      style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}
    >
      {company[0]}
    </div>
  );
}

function ProjectCard({ project, index }: { project: (typeof experience)[0]["projects"][0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 group"
    >
      <h5 className="text-sm font-semibold text-white mb-2 group-hover:text-[#2997ff] transition-colors">
        {project.name}
      </h5>
      <p className="text-xs text-[#6e6e73] leading-relaxed mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-[#0071e3]/10 text-[#2997ff] border border-[#0071e3]/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#0071e3] text-sm font-semibold tracking-widest uppercase mb-3">Work Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Where I&apos;ve worked<br />
            <span className="text-[#86868b]">and what I built.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#0071e3]/60 via-[#0071e3]/20 to-transparent hidden md:block" />

          <div className="space-y-6">
            {experience.map((job, idx) => (
              <motion.div
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-[#0071e3] bg-black hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#0071e3]" />
                </div>

                {/* Card */}
                <div
                  className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                    expandedIdx === idx
                      ? "border-white/10 bg-white/[0.03]"
                      : "border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.025]"
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                    className="w-full text-left p-6 flex items-center gap-4"
                  >
                    <CompanyLogo company={job.company} color={job.color} />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <h3 className="text-lg font-bold text-white">{job.role}</h3>
                          <p className="text-[#86868b] text-sm mt-0.5">
                            {job.company} &bull; {job.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0071e3]/10 text-[#2997ff] border border-[#0071e3]/20">
                            {job.type}
                          </span>
                          <span className="text-sm text-[#6e6e73] whitespace-nowrap">{job.period}</span>
                          <motion.span
                            animate={{ rotate: expandedIdx === idx ? 180 : 0 }}
                            className="text-[#86868b] ml-2"
                          >
                            ▼
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded projects */}
                  <AnimatePresence>
                    {expandedIdx === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-white/[0.06] pt-6">
                          <p className="text-xs font-semibold text-[#86868b] uppercase tracking-wider mb-4">
                            Key Projects ({job.projects.length})
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {job.projects.map((project, pIdx) => (
                              <ProjectCard key={project.name} project={project} index={pIdx} />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
