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
    <div className="group relative h-[500px] w-[400px] md:h-[600px] md:w-[700px] flex-shrink-0 overflow-hidden rounded-[3.5rem] bg-card border border-border transition-all hover:border-primary/50">
      {/* Background Image with Theme-Overlay */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 p-12 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-primary font-mono text-xs font-bold tracking-[0.3em] uppercase mb-2 block">
              {role} — {year}
            </span>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
          <div className="px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-md text-[10px] font-black uppercase">
            Annet Tech Ltd.
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Key Achievements/Metrics */}
          {metrics.map((metric, i) => (
            <div key={i} className="px-6 py-4 bg-background/60 backdrop-blur-xl border border-border rounded-3xl">
              <p className="text-primary font-black text-xl mb-1">{metric.split(':')[0]}</p>
              <p className="text-[10px] uppercase font-bold opacity-50 tracking-widest">{metric.split(':')[1]}</p>
            </div>
          ))}
          
          <button className="mt-4 px-10 py-4 bg-primary text-black font-black rounded-2xl hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1">
            VIEW CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
}