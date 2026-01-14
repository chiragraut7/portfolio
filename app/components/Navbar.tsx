"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeSwitcher";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handles shadow intensity on scroll and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect which section is in view
      const sections = ["home", "about", "projects", "experience", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] px-6 transition-all duration-500 ${
        scrolled ? "pt-4" : "pt-8"
      }`}
    >
      <nav className={`max-w-5xl mx-auto flex items-center justify-between transition-all duration-500 border rounded-[2rem] p-2 ${
        scrolled 
          ? "bg-card/80 backdrop-blur-xl border-border shadow-2xl" 
          : "bg-transparent border-transparent"
      }`}>
        
        {/* Branding with Animated Dot */}
        <div className="pl-6 flex items-center">
          <a href="#home" className="text-2xl font-black tracking-tighter group">
            C<span className="text-primary transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_#ff4d00]">.</span>RAUT
          </a>
        </div>

        {/* Desktop Links with Active Indicator */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
                activeSection === link.id ? "text-primary" : "text-gray-500 hover:text-foreground"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Multi-Theme Compatible Actions */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            className="hidden md:block px-6 py-3 bg-secondary text-white text-[10px] font-black rounded-xl hover:bg-accent hover:shadow-[0_0_20px_rgba(255,77,0,0.4)] transition-all uppercase tracking-widest"
          >
            Hire Me 
          </motion.a>
          
          <div className="h-8 w-[1px] bg-border mx-2 hidden md:block" />
          
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}