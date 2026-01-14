"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSend, FiCheckCircle, FiMail, FiMapPin, FiLinkedin, FiGithub } from "react-icons/fi";

// --- MAGNETIC WRAPPER COMPONENT ---
const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus("success");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden bg-background transition-colors duration-500">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-4">Connection</h2>
          <p className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.8] text-foreground">
            Let’s craft <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "1px var(--color-border)" }}>the future.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 rounded-[3.5rem] overflow-hidden border border-border shadow-lg bg-card transition-colors duration-500">
          
          {/* Left: Info Panel */}
          <div className="lg:col-span-2 bg-foreground/[0.03] p-12 lg:p-16 text-foreground flex flex-col justify-between relative overflow-hidden border-r border-border">
            <div className="relative z-10">
              <h3 className="text-2xl font-black tracking-tighter mb-8 uppercase italic">
                Chirag <span className="text-primary">Raut</span>
              </h3>
              <p className="text-foreground/50 mb-12 text-sm leading-relaxed max-w-[280px]">
                Available for strategic leadership roles, high-end product design, and complex frontend architectures.
              </p>
              
              <div className="space-y-8">
                <div className="group flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-primary border border-border group-hover:border-primary transition-colors duration-500"><FiMail /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-foreground/30 tracking-widest">Email Me</p>
                    <span className="text-sm font-bold">chirag.raut@email.com</span>
                  </div>
                </div>
                <div className="group flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center text-primary border border-border group-hover:border-primary transition-colors duration-500"><FiMapPin /></div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-foreground/30 tracking-widest">Location</p>
                    <span className="text-sm font-bold">Mumbai, Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-12 flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary transition-all duration-300"><FiLinkedin /></a>
               <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary transition-all duration-300"><FiGithub /></a>
            </div>

            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          </div>

          {/* Right: Form Panel */}
          <div className="lg:col-span-3 p-12 lg:p-16 bg-card relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -45 }} 
                    animate={{ scale: 1, rotate: 0 }} 
                    transition={{ type: "spring", damping: 12 }}
                    className="w-24 h-24 bg-primary text-background rounded-3xl flex items-center justify-center text-5xlshadow-lg"
                  >
                    <FiCheckCircle />
                  </motion.div>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-black uppercase tracking-tighter text-foreground">Message Received</h3>
                    <p className="text-foreground/40 font-medium">I'll reach out to you within 24 hours.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 ml-2">Your Name</label>
                      <input required placeholder="Chirag Raut" className="w-full bg-foreground/[0.03] border border-border p-5 rounded-2xl focus:border-primary text-foreground outline-none transition-all placeholder:text-foreground/10" type="text" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 ml-2">Email Address</label>
                      <input required placeholder="chirag@example.com" className="w-full bg-foreground/[0.03] border border-border p-5 rounded-2xl focus:border-primary text-foreground outline-none transition-all placeholder:text-foreground/10" type="email" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20 ml-2">Project Brief</label>
                    <textarea required placeholder="What are we building together?" rows={5} className="w-full bg-foreground/[0.03] border border-border p-5 rounded-2xl focus:border-primary text-foreground outline-none transition-all resize-none placeholder:text-foreground/10" />
                  </div>

                  <Magnetic>
                    <button 
                      disabled={status === "sending"}
                      className="group relative w-full py-6 bg-primary text-background font-black rounded-2xl overflow-hidden transition-all disabled:opacity-50 active:scale-95"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                        {status === "sending" ? "TRANSMITTING..." : <><FiSend /> Initiate Inquiry</>}
                      </span>
                      {/* Button Hover Glow */}
                      <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-10 transition-opacity" />
                    </button>
                  </Magnetic>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}