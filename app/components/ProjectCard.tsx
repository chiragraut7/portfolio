"use client";
import { motion } from 'framer-motion';

interface ProjectProps {
  title: string;
  role: string;
  year: string;
  metrics: string[];
  image: string;
}

export default function AnnetProjectCard({ title, role, year, metrics, image }: ProjectProps) {
  return (
    <div className="group relative h-[500px] w-[400px] md:h-[600px] md:w-[700px] flex-shrink-0 overflow-hidden rounded-[3.5rem] bg-card border border-border transition-all hover:border-primary/50shadow-lg">
      {/* Background Image with Theme-Overlay */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
        {/* Gradient now smoothly blends using theme background variable */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
              {role} — {year}
            </span>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>
          {/* Badge using theme variables */}
          <div className="px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-md text-[10px] font-black uppercase text-foreground/60">
            Annet Tech Ltd.
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-end">
          {/* Key Achievements/Metrics */}
          <div className="flex flex-wrap gap-4 flex-1">
            {metrics.map((metric, i) => (
              <div key={i} className="px-6 py-4 bg-background/60 backdrop-blur-xl border border-border rounded-3xl transition-colors">
                <p className="text-primary font-black text-xl mb-1">{metric.split(':')[0]}</p>
                <p className="text-[10px] uppercase font-bold text-foreground/40 tracking-widest leading-none">{metric.split(':')[1]}</p>
              </div>
            ))}
          </div>
          
          {/* Theme-aware CTA Button */}
          <button className="px-10 py-5 bg-primary text-background font-black rounded-2xl hover:bg-accent hover:shadow-[0_10px_30px_rgba(var(--color-primary-rgb),0.3)] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-xs">
            VIEW CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
}