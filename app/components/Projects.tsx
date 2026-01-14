"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { FiX, FiArrowUpRight, FiGithub } from "react-icons/fi";

// --- 1. TYPES & DATA ---
interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  details: string;
  gitUrl?: string;
}

const annetWorks: Project[] = [
  { id: 1, title: "STRATEGIC UI PORTAL", role: "LEAD DESIGN", year: "2024", details: "Architecture for global enterprise.", gitUrl: "#" },
  { id: 2, title: "FINTECH ECOSYSTEM", role: "PRODUCT PM", year: "2023", details: "Modern banking reimagined.", gitUrl: "#" },
  { id: 3, title: "AI SEARCH ENGINE", role: "UX ARCHITECT", year: "2024", details: "Semantic data retrieval flows.", gitUrl: "#" },
  { id: 4, title: "RETAIL DASHBOARD", role: "DATA ANALYST", year: "2022", details: "Real-time inventory visualization.", gitUrl: "#" },
];

// --- 2. THEMED SUB-COMPONENTS ---

const CaseStudyOverlay = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-background/95 backdrop-blur-2xl"
  >
    <div className="bg-card p-8 md:p-16 rounded-[3rem] border border-border max-w-4xl w-full relativeshadow-lg">
      <button onClick={onClose} className="absolute top-8 right-8 text-foreground text-3xl hover:text-primary transition-colors">
        <FiX />
      </button>
      <p className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-4">{project.role} — {project.year}</p>
      <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 uppercase italic">{project.title}</h2>
      <p className="text-foreground/50 mb-10 text-lg">{project.details}</p>
      {project.gitUrl && (
        <a href={project.gitUrl} className="inline-flex items-center gap-2 px-6 py-3 bg-foreground/5 text-foreground rounded-full border border-border hover:bg-foreground/10 transition-all">
          <FiGithub /> Source Code
        </a>
      )}
    </div>
  </motion.div>
);

const ProjectCard = ({ project, index, progress, onOpen, total }: any) => {
  const unit = 1 / total;
  const start = index * unit;
  const end = Math.min(start + unit * 1.5, 1); 

  const x = useTransform(progress, [start, end], ["100vw", "0vw"]);
  const scale = useTransform(progress, [start, end], [0.85, 1]);
  const overlap = total > 4 ? 20 : 12;

  return (
    <motion.div
      style={{ 
        x: index === 0 ? 0 : x, 
        scale, 
        zIndex: index + 10,
        marginLeft: index === 0 ? 0 : `-${overlap}vw` 
      }}
      className="relative h-[45vh] md:h-[50vh] w-[85vw] md:w-[32vw] flex-shrink-0"
    >
      <div 
        onClick={() => onOpen(project)}
        className="h-full w-full bg-card rounded-[2.5rem] border border-border p-8 md:p-10 flex flex-col justify-betweenshadow-lg relative overflow-hidden group cursor-pointer"
      >
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <p className="text-[9px] font-black tracking-[0.4em] text-primary uppercase">{project.role}</p>
            <FiGithub className="text-foreground/20 group-hover:text-primary transition-colors" />
          </div>
          <h3 className="text-2xl md:text-4xl font-black tracking-tighter leading-[0.95] uppercase italic text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[9px] font-black text-foreground/20 tracking-[0.2em] uppercase">Artifact {project.id}</span>
          <div className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-background transition-all">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- 3. MAIN THEMED PAGE ---

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const textX = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);

  return (
    <section 
      ref={targetRef} 
      style={{ height: `${annetWorks.length * 80}vh` }} 
      className="relative bg-background overflow-clip transition-colors duration-500"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Dynamic Background Text using Theme Border Color */}
        <div className="absolute inset-0 flex items-center justify-start pointer-events-none">
          <motion.h2 
            style={{ x: textX, WebkitTextStroke: "1px var(--color-border)" }} 
            className="text-[28vw] font-black text-transparent whitespace-nowrap uppercase italic opacity-30"
          >
            ANNET WORKS —
          </motion.h2>
        </div>

        {/* Card Track */}
        <div className="relative z-10 flex w-full px-[10vw] md:px-[25vw]"> 
          {annetWorks.map((project, i) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              progress={scrollYProgress} 
              onOpen={setSelectedProject} 
              total={annetWorks.length} 
            />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {selectedProject && <CaseStudyOverlay project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
}