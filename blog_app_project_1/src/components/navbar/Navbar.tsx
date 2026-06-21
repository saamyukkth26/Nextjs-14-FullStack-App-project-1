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
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

            {/* Logo */}
            <button onClick={() => scrollTo("#hero")} style={{ display: "flex", alignItems: "center", gap: "8px", background: "none", border: "none", cursor: "pointer" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "4px",
                background: "var(--btn-bg)", border: "1px solid var(--btn-border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: "700", fontSize: "13px", color: "var(--text-primary)",
              }}>
                S
              </div>
              <span style={{ fontWeight: "600", fontSize: "14px", color: "var(--text-primary)" }}>
                Saamyukkth
              </span>
            </button>

            {/* Desktop nav links */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden md:flex">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    style={{
                      position: "relative",
                      padding: "6px 14px",
                      borderRadius: "4px",
                      border: isActive ? "1px solid var(--border-strong)" : "1px solid transparent",
                      background: isActive ? "var(--btn-bg)" : "transparent",
                      color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.18s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "var(--btn-bg)";
                        e.currentTarget.style.color = "var(--text-primary)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Right: theme toggle + hire me */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* Theme toggle with label */}
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                style={{
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: "6px 12px", borderRadius: "4px",
                  border: "1px solid var(--btn-border)",
                  background: "var(--btn-bg)",
                  color: "var(--text-primary)",
                  fontSize: "13px", fontWeight: "500",
                  cursor: "pointer", backdropFilter: "blur(12px)",
                  transition: "all 0.18s ease",
                  boxShadow: "var(--btn-shadow)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--btn-bg-hover)";
                  e.currentTarget.style.borderColor = "var(--btn-border-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--btn-bg)";
                  e.currentTarget.style.borderColor = "var(--btn-border)";
                }}
              >
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {theme === "dark" ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  )}
                </motion.span>
                <span className="hidden sm:inline">
                  {theme === "dark" ? "Light" : "Dark"}
                </span>
              </button>

              {/* Hire Me */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn hidden md:inline-flex"
              >
                Hire Me
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="md:hidden"
                style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", flexDirection: "column", gap: "5px", alignItems: "center", justifyContent: "center" }}
                aria-label="Toggle menu"
              >
                <motion.span animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} style={{ display: "block", width: "20px", height: "1.5px", background: "var(--text-primary)", transformOrigin: "center" }} />
                <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} style={{ display: "block", width: "20px", height: "1.5px", background: "var(--text-primary)" }} />
                <motion.span animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} style={{ display: "block", width: "20px", height: "1.5px", background: "var(--text-primary)", transformOrigin: "center" }} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "fixed", top: "64px", left: 0, right: 0, zIndex: 40,
              background: "var(--nav-bg)", backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
            }}
            className="md:hidden"
          >
            <div style={{ padding: "12px 24px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    textAlign: "left", padding: "10px 14px", borderRadius: "4px",
                    border: "none", background: "none",
                    color: "var(--text-primary)", fontSize: "14px", fontWeight: "500", cursor: "pointer",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <div style={{ paddingTop: "12px", marginTop: "4px", borderTop: "1px solid var(--border)" }}>
                <a href={`mailto:${personalInfo.email}`} className="btn" style={{ width: "100%", justifyContent: "center" }}>
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
