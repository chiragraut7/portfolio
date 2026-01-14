"use client";
import { motion } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import { FiUsers, FiCpu, FiMessageSquare, FiTrendingUp } from 'react-icons/fi';

const metrics = [
  {
    title: "Team Leadership",
    desc: "Orchestrating cross-functional synergy between designers and developers to maintain high-velocity output.",
    icon: <FiUsers />,
    size: "md:col-span-2",
  },
  {
    title: "Executive Strategy",
    desc: "Direct stakeholder negotiation and comprehensive UI/UX roadmapping.",
    icon: <FiTrendingUp />,
    size: "md:col-span-1",
  },
  {
    title: "Ecosystem Oversight",
    desc: "Architecture governance across .NET, SharePoint, and React-based enterprise environments.",
    icon: <FiCpu />,
    size: "md:col-span-1",
  },
  {
    title: "Agile Delivery",
    desc: "Streamlining delivery pipelines for enterprise-grade solutions with focus on scalability.",
    icon: <FiMessageSquare />,
    size: "md:col-span-2",
  }
];

export default function Leadership() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    // Replaced #0a0f1a with bg-background and border-white/5 with border-border
    <section className="py-32 px-6 bg-background relative overflow-hidden border-t border-border transition-colors duration-500">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase font-bold">Core Competency</h2>
            {/* Replaced text-white with text-foreground and fixed stroke opacity with theme variable */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic text-foreground leading-none">
              Strategic <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-border)" }}>Leadership</span>
            </h2>
          </div>
          <div className="text-right">
             <p className="text-foreground/40 text-[10px] font-black tracking-[0.3em] uppercase mb-1">Annet Technology Ltd</p>
             <p className="text-primary font-bold text-sm uppercase tracking-tighter italic">2016 — Present</p>
          </div>
        </div>

        {/* Bento Spotlight Grid */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 group/container"
        >
          {metrics.map((item, i) => (
            <div
              key={i}
              // Replaced bg-white/[0.03] with bg-card and border-white/10 with border-border
              className={`${item.size} relative bg-card border border-border p-10 rounded-[3rem] overflow-hidden group/card transition-all duration-500 min-h-[280px] flex flex-col justify-between hover:border-primary/30 shadow-xl`}
            >
              {/* Radial Spotlight Effect - Automatically pulls the primary theme color RGB */}
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover/container:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(var(--color-primary-rgb), 0.15), transparent 40%)`
                }}
              />

              <div className="relative z-20">
                {/* Icon wrapper uses bg-foreground/5 and border-border */}
                <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-border flex items-center justify-center text-3xl text-primary mb-8 group-hover/card:scale-110 group-hover/card:border-primary/50 transition-all duration-500">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-black text-foreground mb-4 uppercase tracking-tighter italic leading-none">
                  {item.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed max-w-[90%] font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Background Element - text-white/[0.02] to text-foreground/[0.02] */}
              <div className="absolute -bottom-10 -right-10 text-foreground/[0.02] text-[12rem] pointer-events-none group-hover/card:text-primary/[0.04] transition-colors duration-700">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Ambient Glow */}
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}