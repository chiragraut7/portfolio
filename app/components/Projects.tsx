"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll, AnimatePresence } from "framer-motion";
import { FiX, FiArrowUpRight } from "react-icons/fi";

// --- 1. TYPES & INTERFACES ---
interface Skill {
  label: string;
  val: number;
}

interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  details: string;
  tags: string[];
  skills: Skill[];
}

interface CardProps {
  project: Project;
  index: number;
  progress: any;
  onOpen: (p: Project) => void;
  total: number;
}

// --- 2. DATA (Add as many as you like) ---
const annetWorks: Project[] = [
  {
    id: 1,
    title: "ENTERPRISE WEB PORTAL",
    role: "PROJECT MANAGER",
    year: "2024",
    details: "Led a cross-functional team of 15 to modernize the enterprise legacy system.",
    tags: ["React", "Node.js", "AWS"],
    skills: [{ label: "Leadership", val: 95 }, { label: "Agile", val: 90 }]
  },
  {
    id: 2,
    title: "FINTECH APP REDESIGN",
    role: "LEAD UI/UX",
    year: "2023",
    details: "Architected the end-to-end user journey for high-traffic transactions.",
    tags: ["Figma", "UI/UX"],
    skills: [{ label: "Design", val: 98 }, { label: "Research", val: 85 }]
  },
  {
    id: 3,
    title: "GLOBAL CMS SYSTEM",
    role: "STRATEGY LEAD",
    year: "2022",
    details: "Managed deployment across 5 regions ensuring local data sovereignty.",
    tags: ["SharePoint", "CMS"],
    skills: [{ label: "Strategy", val: 92 }, { label: "Ops", val: 88 }]
  }
];

// --- 3. SUB-COMPONENTS ---

const SkillCircle = ({ percentage, label }: { percentage: number; label: string }) => {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="flex flex-col items-center gap-3 bg-white/[0.02] p-4 rounded-3xl border border-white/5">
      <div className="relative w-14 h-14">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="28" cy="28" r={radius} stroke="currentColor" strokeWidth="3" fill="transparent" className="text-white/5" />
          <motion.circle
            cx="28" cy="28" r={radius} stroke="var(--color-primary)" strokeWidth="3" fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-[10px] text-white">{percentage}%</div>
      </div>
      <span className="text-[8px] font-black uppercase tracking-widest text-white/30 text-center">{label}</span>
    </div>
  );
};

const CaseStudyOverlay = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-[#0a0f1a]/95 backdrop-blur-2xl"
    >
      <button onClick={onClose} className="absolute top-8 right-8 text-white text-3xl z-[210] bg-white/5 p-4 rounded-full hover:bg-primary transition-all">
        <FiX />
      </button>

      <motion.div 
        layoutId={`card-bg-${project.id}`} 
        className="w-full max-w-5xl bg-[#111827] rounded-[3rem] border border-white/10 overflow-hidden flex flex-col md:flex-row h-full max-h-[80vh] relative shadow-2xl"
      >
        <div className="flex-1 p-8 md:p-16 overflow-y-auto">
          <motion.div layoutId={`card-header-${project.id}`}>
             <p className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase mb-4">{project.role} — {project.year}</p>
          </motion.div>
          <motion.h2 layoutId={`card-title-${project.id}`} className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase italic">
            {project.title}
          </motion.h2>
          <p className="text-white/50 mb-10 max-w-xl text-base">{project.details}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.skills.map((s, i) => (
              <SkillCircle key={i} percentage={s.val} label={s.label} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, progress, onOpen, total }: CardProps) => {
  const unit = 1 / total;
  const start = index * unit;
  const end = Math.min(start + unit * 1.5, 1); 

  const x = useTransform(progress, [start, end], ["100vw", "0vw"]);
  const scrollScale = useTransform(progress, [start, end], [0.9, 1]);
  const opacity = useTransform(progress, [start, start + unit * 0.2], [0, 1]);

  // --- DYNAMIC MARGIN CALCULATION ---
  // This squishes the cards closer together as more are added to fit the screen
  const overlapAmount = Math.min(22, 10 + (total * 1.2)); 

  return (
    <motion.div
      style={{ 
        x: index === 0 ? 0 : x, 
        scale: index === 0 ? 1 : scrollScale, 
        opacity: index === 0 ? 1 : opacity,
        zIndex: index + 10,
        marginLeft: index !== 0 ? `-${overlapAmount}vw` : "0"
      }}
      className="relative h-[45vh] md:h-[50vh] w-[50vw] md:w-[35vw] flex-shrink-0"
    >
      <motion.div
        layoutId={`card-bg-${project.id}`} 
        onClick={() => onOpen(project)}
        className="h-full w-full bg-[#111827] rounded-[2.5rem] border border-white/10 p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group cursor-pointer hover:border-primary/40 transition-all duration-500"
      >
        <div className="relative z-10">
          <motion.div layoutId={`card-header-${project.id}`} className="flex justify-between items-center mb-6">
            <p className="text-[9px] font-black tracking-[0.4em] text-primary uppercase">{project.role}</p>
          </motion.div>
          
          <motion.h3 layoutId={`card-title-${project.id}`} className="text-2xl md:text-4xl font-black tracking-tighter leading-[0.95] uppercase italic text-white group-hover:text-primary transition-colors">
            {project.title.split(' ').map((word: string, idx: number) => (
              <span key={idx} className="block last:text-transparent" style={idx === project.title.split(' ').length - 1 ? { WebkitTextStroke: "1px rgba(255,255,255,0.3)" } : {}}>{word}</span>
            ))}
          </motion.h3>
        </div>

        <div className="relative z-10 flex items-center justify-between">
          <span className="text-[9px] font-black text-white/20 tracking-[0.2em] uppercase">Open Case</span>
          <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-xl text-white group-hover:bg-primary group-hover:text-black transition-all">
            <FiArrowUpRight />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- 4. MAIN EXPORT ---
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const textX = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);

  return (
    <section 
      ref={targetRef} 
      // Section height adjusts based on count to keep scroll speed consistent
      style={{ height: `${annetWorks.length * 70}vh` }} 
      className="relative bg-[#0a0f1a]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background Outline Text */}
        <div className="absolute inset-0 flex items-center justify-start pointer-events-none z-0">
          <motion.h2 
            style={{ x: textX, WebkitTextStroke: "1px rgba(255,255,255,0.03)" }} 
            className="text-[28vw] font-black tracking-tighter whitespace-nowrap text-transparent uppercase italic"
          >
            ANNET PORTFOLIO —
          </motion.h2>
        </div>

        {/* --- DYNAMIC STARTING POSITION --- 
            We use md:px-[35vw] to center the initial stack on screen. 
        */}
        <div className="relative z-10 flex w-full px-[10vw] justify-start"> 
          {annetWorks.map((project: Project, i: number) => (
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