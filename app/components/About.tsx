"use client";
import { motion } from 'framer-motion';
import { FiLayout, FiCode, FiSmartphone, FiShield } from 'react-icons/fi';

const bentoItems = [
  {
    title: "UI/UX Design",
    desc: "Figma, Adobe XD, Wireframing & Prototyping enterprise-scale platforms.",
    icon: <FiLayout />,
    span: "md:col-span-2", 
    // Changed to use the theme variable for gradient
    gradient: "from-primary/10 to-transparent"
  },
  {
    title: "Mobile-First",
    desc: "Cross-platform expert utilizing Ionic & Cordova for seamless reach.",
    icon: <FiSmartphone />,
    span: "md:col-span-1",
    gradient: "from-foreground/5 to-transparent"
  },
  {
    title: "Frontend Tech",
    desc: "Crafting performant interfaces with Next.js, React, and modern SCSS architecture.",
    icon: <FiCode />,
    span: "md:col-span-1",
    gradient: "from-foreground/5 to-transparent"
  },
  {
    title: "Frameworks",
    desc: "Architecture governance across Laravel, .NET, WordPress & SharePoint ecosystems.",
    icon: <FiShield />,
    span: "md:col-span-2",
    gradient: "from-primary/10 to-transparent"
  }
];

export default function About() {
  return (
    // Changed bg-[#0a0f1a] to bg-background
    <section id="about" className="py-24 px-6 bg-background relative overflow-hidden transition-colors duration-500">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 1. HERO ABOUT CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Changed bg-[#111827] to bg-card, border-white/5 to border-border, text-white to text-foreground
          className="bg-card p-10 md:p-16 rounded-[3rem] text-foreground relative overflow-hidden mb-6 relative bg-card/50 border border-border p-10 rounded-[2.5rem] overflow-hidden group transition-all duration-500 flex flex-col justify-between min-h-[240px] shadow-lg"
        >
          <div className="relative z-10">
            <h2 className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-6">Introduction</h2>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 uppercase italic leading-[0.85]">
              14+ Years of <br />
              {/* Stroke now uses the foreground color variable */}
              <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-border)" }}>Creative Mastery</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/50 max-w-3xl leading-relaxed font-medium transition-colors">
              Detail-oriented Graphics & UI/UX Designer specializing in enterprise-level solutions. 
              Bridging the gap between complex functionality and high-fidelity user interfaces.
            </p>
          </div>
          
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>

        {/* 2. ADJUSTED BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // Uses the actual primary variable for hover
              whileHover={{ borderColor: "var(--color-primary)" }}
              // Changed bg-white/[0.03] to bg-card/50, border-white/10 to border-border
              className={`${item.span} relative bg-card/50 border border-border p-10 rounded-[2.5rem] overflow-hidden group transition-all duration-500 flex flex-col justify-between min-h-[240px] shadow-lg`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 pointer-events-none`} />

              <div className="relative z-20">
                {/* Icon container uses primary color */}
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 border border-border flex items-center justify-center text-2xl text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3 uppercase tracking-tighter italic leading-none transition-colors">{item.title}</h3>
                <p className="text-foreground/40 text-sm leading-relaxed font-medium transition-colors">{item.desc}</p>
              </div>

              {/* Minimal Ghost Icon now uses foreground/primary transition */}
              <div className="absolute -bottom-4 -right-4 text-foreground/[0.03] text-7xl pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-500">
                {item.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}