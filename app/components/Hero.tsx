"use client";
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0a0f1a]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-6 block font-bold">
            Project Manager & UI/UX Specialist
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            CHIRAG <br /> 
            <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>
              RAUT
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-lg mb-12 leading-relaxed font-medium">
            Strategic design leader delivering enterprise-level digital ecosystems. 
            Transforming complex business logic into intuitive user experiences.
          </p>

          <div className="flex flex-wrap gap-5">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-primary text-black font-black rounded-2xl flex items-center gap-3 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(var(--color-primary-rgb),0.2)]"
            >
              LET'S TALK <FiArrowRight />
            </a>
            <a 
              href="/cv.pdf" 
              className="px-10 py-5 bg-white/5 text-white font-bold rounded-2xl border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-all"
            >
              GET CV <FiDownload />
            </a>
          </div>
        </motion.div>

        {/* Profile Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative justify-self-center lg:justify-self-end group"
        >
          {/* Main Image Container */}
          <div className="relative rounded-[4rem] overflow-hidden border border-white/10 p-3 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
            <div className="relative rounded-[3.2rem] overflow-hidden bg-[#111827]">
              <img 
                src="/images/profile.jpg" 
                alt="Chirag Raut" 
                className="w-[320px] h-[480px] md:w-[380px] md:h-[550px] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100" 
              />
            </div>
          </div>

          {/* Floating Experience Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(var(--color-primary-rgb),0.3)] text-black"
          >
            <div className="text-5xl font-black leading-none italic tracking-tighter">14+</div>
            <div className="text-[10px] uppercase font-black tracking-widest opacity-70 leading-none mt-2">
              Years of <br /> Mastery
            </div>
          </motion.div>

          {/* Subtle Back Glow */}
          <div className="absolute -inset-4 bg-primary/20 rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -z-10" />
        </motion.div>
      </div>
    </section>
  );
}