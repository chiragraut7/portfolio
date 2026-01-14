"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const careerData = [
  {
    year: "2019 — 2026",
    role: "Senior Project Manager",
    company: "Annet Technology Ltd.",
    impact: [
      "Reduced operational overhead by 40% via AI-integrated workflows.",
      "Led 15+ cross-functional experts to deliver 12 enterprise portals.",
      "Managed stakeholder relations across 5 global regions seamlessly."
    ],
    skills: ["Stakeholder Mgmt", "Agile Leadership", "Product Strategy"],
    align: "left"
  },
  {
    year: "2015 — 2019",
    role: "Lead UI/UX Designer",
    company: "Annet Technology Ltd.",
    impact: [
      "Scaled a unified Design System across 50+ enterprise projects.",
      "Cut design-to-development handoff latency by 25%.",
      "Architected UX for high-traffic apps with 200k+ active users."
    ],
    skills: ["Design Systems", "User Research", "Prototyping"],
    align: "right"
  },
  {
    year: "2010 — 2015",
    role: "Digital Designer",
    company: "Creative Solutions",
    impact: [
      "Redesigned digital identities for 20+ global tier-1 brands.",
      "Boosted user engagement by 15% through mobile-first UI strategy.",
      "Bridged visual design with early-stage frontend implementation."
    ],
    skills: ["Visual Design", "Frontend Basics", "Branding"],
    align: "left"
  }
];

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    // Changed bg-[#0a0f1a] to bg-background
    <section ref={containerRef} className="py-32 bg-background relative px-6 overflow-hidden transition-colors duration-500">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24 space-y-4">
          <h2 className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase font-bold">The Timeline</h2>
          <p className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic text-foreground leading-none">
            Professional <br />
            {/* Stroke now uses theme border variable */}
            <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-border)" }}>Evolution</span>
          </p>
        </div>

        <div className="relative">
          {/* Animated Vertical Line - Uses border color for subtle look */}
          <motion.div 
            style={{ scaleY }}
            className="absolute left-0 md:left-1/2 top-0 w-[1px] h-full bg-border origin-top hidden md:block"
          />

          <div className="space-y-12 md:space-y-0">
            {careerData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full md:mb-12 ${
                  item.align === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node (Static Circle) - Uses background color to "cut" the line */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background border border-primary z-20 shadow-[0_0_15px_rgba(var(--color-primary-rgb),0.5)]" />

                {/* Content Card - Changed bg to bg-card and border to border-border */}
                <div className="w-full md:w-[47%] bg-card border border-border p-8 md:p-12 rounded-[3rem] hover:border-primary/30 transition-all duration-500 group relative overflow-hiddenshadow-lg">
                  
                  {/* Static Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-primary font-mono text-[10px] tracking-widest uppercase font-bold">{item.year}</span>
                      <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[10px] text-foreground/20 group-hover:border-primary/50 group-hover:text-primary transition-colors">
                        0{i + 1}
                      </div>
                    </div>

                    <h3 className="text-3xl font-black text-foreground mb-1 uppercase tracking-tighter italic leading-none">{item.role}</h3>
                    <h4 className="text-foreground/30 font-bold text-xs mb-8 uppercase tracking-widest">{item.company}</h4>
                    
                    <ul className="space-y-4 mb-10">
                      {item.impact.map((point, idx) => (
                        <li key={idx} className="flex gap-4 items-start text-sm leading-relaxed text-foreground/50 group-hover:text-foreground/70 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, idx) => (
                        <span key={idx} className="px-4 py-1.5 bg-foreground/5 rounded-full text-[9px] font-bold text-foreground/30 border border-border uppercase tracking-tighter transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block md:w-[47%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}