"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiLayers, FiLayout, FiTarget } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-background px-6 pt-24 overflow-hidden">
      {/* Dynamic Background Noise/Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center">
        
        {/* LEFT COLUMN: Typography & Action (7 Cols) */}
        <div className="lg:col-span-7 space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
              Based in India • Open to Global Roles
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter uppercase italic text-foreground"
          >
            CHIRAG <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1.5px var(--color-border)" }}>RAUT</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-foreground/60 max-w-xl leading-relaxed font-medium"
          >
            A Strategic Design Leader with 14+ years of experience blending 
            <span className="text-foreground"> Project Management</span> with 
            <span className="text-primary"> High-Fidelity UI/UX</span>. I build systems that scale.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-primary text-background font-black rounded-xl hover:scale-105 transition-all shadow-xl flex items-center gap-3">
              VIEW PROJECTS <FiArrowRight />
            </button>
            <button className="px-8 py-4 bg-card border border-border text-foreground font-bold rounded-xl hover:bg-foreground/5 transition-all flex items-center gap-3">
              DOWNLOAD CV <FiDownload />
            </button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Visual Bento (5 Cols) */}
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            {/* The Photo Frame */}
            <div className="relative rounded-[3rem] overflow-hidden border border-border bg-card p-2 shadow-2xl group">
              <div className="rounded-[2.5rem] overflow-hidden relative">
                <img 
                  src="/profile.png" 
                  alt="Chirag Raut" 
                  className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating Stat inside the Bento */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/60 backdrop-blur-xl border border-border rounded-3xl">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primary font-black text-3xl italic">14+ YRS</p>
                    <p className="text-[9px] uppercase font-bold tracking-widest opacity-50 text-foreground">Experience Scale</p>
                  </div>
                  <div className="h-10 w-[1px] bg-border" />
                  <div>
                    <p className="text-foreground font-black text-3xl italic">50+</p>
                    <p className="text-[9px] uppercase font-bold tracking-widest opacity-50 text-foreground">Projects Delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Background Decorative Rings */}
          <div className="absolute -top-10 -right-10 w-64 h-64 border border-primary/10 rounded-full animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-border/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}