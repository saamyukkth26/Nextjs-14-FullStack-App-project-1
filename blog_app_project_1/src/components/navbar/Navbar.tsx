"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useTheme } from "@/lib/ThemeContext";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["hero", "about", "experience", "projects", "education", "contact"];
      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button onClick={() => scrollTo("#hero")} className="group flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm transition-all duration-200"
                style={{
                  background: "var(--btn-glass)",
                  border: "1px solid var(--btn-glass-border)",
                  color: "var(--text)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                S
              </div>
              <span className="font-semibold text-sm hidden sm:block" style={{ color: "var(--text)" }}>
                Saamyukkth
              </span>
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="relative px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200"
                    style={{ color: isActive ? "var(--text)" : "var(--text-2)" }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-sm"
                        style={{ background: "var(--btn-glass)", border: "1px solid var(--border)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right side: theme toggle + hire me */}
            <div className="hidden md:flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="btn-glass w-9 h-9 !p-0 flex items-center justify-center rounded-md"
                style={{ borderRadius: "6px" }}
              >
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -30 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </button>

              {/* Hire Me */}
              <a href={`mailto:${personalInfo.email}`} className="btn-glass" style={{ borderRadius: "6px" }}>
                Hire Me
              </a>
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="btn-glass w-9 h-9 !p-0 flex items-center justify-center"
                style={{ borderRadius: "6px" }}
              >
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="w-9 h-9 flex flex-col items-center justify-center gap-1.5"
                aria-label="Toggle menu"
              >
                <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-5 h-px block" style={{ background: "var(--text)" }} />
                <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-5 h-px block" style={{ background: "var(--text)" }} />
                <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-5 h-px block" style={{ background: "var(--text)" }} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{
              background: "var(--nav-bg)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium rounded-sm transition-colors"
                  style={{ color: "var(--text)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--btn-glass)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-3 pb-1 border-t mt-1" style={{ borderColor: "var(--border)" }}>
                <a href={`mailto:${personalInfo.email}`} className="btn-glass w-full justify-center" style={{ borderRadius: "6px" }}>
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
