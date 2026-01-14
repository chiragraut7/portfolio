"use client";
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiInstagram, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background pt-24 pb-12 px-6 border-t border-border relative overflow-hidden">
      {/* Massive Background Text - Colors adapt via CSS variables */}
      <div className="absolute bottom-[-10%] left-0 right-0 pointer-events-none select-none overflow-hidden h-64 opacity-[0.03] dark:opacity-[0.07]">
        <h2 className="text-[15rem] md:text-[25rem] font-black leading-none whitespace-nowrap text-primary">
          CHIRAG RAUT
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-black mb-6 tracking-tighter uppercase italic">
              C<span className="text-primary">.</span>RAUT
            </h3>
            <p className="text-foreground/50 max-w-sm leading-relaxed mb-8 font-medium">
              A decade of enterprise-grade design and leadership. Specializing in UI/UX strategy and project management since 2010.
            </p>
            <div className="flex gap-4">
              {[FiLinkedin, FiGithub, FiInstagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -8, backgroundColor: 'var(--color-primary)', color: '#000' }}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center text-xl transition-all shadow-lg"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-8 text-accent">Quick Links</h4>
            <ul className="space-y-4 font-bold text-foreground/60 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Career Path</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Get Started</a></li>
            </ul>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-16 h-16 bg-primary text-black rounded-3xl flex items-center justify-center text-2xl shadow-2xl shadow-primary/20"
            >
              <FiArrowUp strokeWidth={3} />
            </motion.button>
            <div className="text-left md:text-right mt-12 md:mt-0">
              <p className="text-[10px] uppercase font-black tracking-[0.3em] opacity-40 mb-2">Location</p>
              <p className="font-black text-lg">Mumbai, India</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
          <p>© 2026 CHIRAG RAUT • SENIOR CREATIVE LEAD</p>
          <div className="flex gap-8">
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}