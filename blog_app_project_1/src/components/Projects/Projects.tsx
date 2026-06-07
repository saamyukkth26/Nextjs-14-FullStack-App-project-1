"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-3xl border border-white/[0.06] bg-white/[0.02] overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
      style={{
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 60px rgba(0,0,0,0.5), 0 0 60px rgba(0,113,227,0.08)"
          : "none",
      }}
    >
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      {/* Thumbnail / Preview area */}
      <div className="relative h-48 overflow-hidden bg-black">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
        />
        {/* Project name as visual when no thumbnail */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div
              className={`text-5xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-2 opacity-30 group-hover:opacity-50 transition-opacity`}
            >
              {project.title.slice(0, 2).toUpperCase()}
            </div>
          </div>
        </div>

        {/* Live preview iframe if URL exists */}
        {project.liveUrl && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <iframe
              src={project.liveUrl}
              className="w-full h-full scale-[0.6] origin-top-left"
              style={{ width: "167%", height: "167%" }}
              loading="lazy"
              title={project.title}
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        )}

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0071e3]/20 border border-[#0071e3]/30 text-[10px] font-semibold text-[#2997ff] uppercase tracking-wide">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#2997ff] transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-[#6e6e73] leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-white/[0.06] text-[#86868b] border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2.5 py-0.5 text-[11px] rounded-full bg-white/[0.04] text-[#6e6e73]">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-white/[0.06]">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[#2997ff] hover:text-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <span>↗</span> Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-xs text-[#6e6e73]">
              Private / Internal
            </span>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[#86868b] hover:text-white transition-colors ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubMini /> Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function GitHubMini() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 bg-black overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-green-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#0071e3] text-sm font-semibold tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            What I&apos;ve shipped.<br />
            <span className="text-[#86868b]">Production AI systems.</span>
          </h2>
        </motion.div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="mb-8">
            <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-widest mb-6">
              Featured Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {featured.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Other projects */}
        {rest.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-[#6e6e73] uppercase tracking-widest mb-6 mt-12">
              More Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={featured.length + i}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
