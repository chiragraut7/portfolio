"use client";
import { motion } from "framer-motion";
import { FiCode, FiFigma, FiCpu, FiTrendingUp } from "react-icons/fi";

const skillGroups = [
  {
    category: "Design Strategy",
    icon: <FiFigma />,
    projectCount: "45+",
    size: "md:col-span-2",
    items: [
      { name: "Visual Design", level: 3 },
      { name: "Wireframing", level: 3 },
      { name: "Prototyping", level: 3 },
      { name: "Figma", level: 3 },
      { name: "Adobe XD", level: 3 },
      { name: "Design Systems", level: 3 },
    ]
  },
  {
    category: "Workflow",
    icon: <FiTrendingUp />,
    projectCount: "Global",
    size: "md:col-span-1",
    items: [
      { name: "Agile", level: 3 },
      { name: "Git", level: 3 },
      { name: "ChatGPT/Gemini", level: 3 },
    ]
  },
  {
    category: "Frontend Architecture",
    icon: <FiCode />,
    projectCount: "30+",
    size: "md:col-span-3",
    items: [
      { name: "Next.js", level: 3 },
      { name: "React.js", level: 3 },
      { name: "TypeScript", level: 3 },
      { name: "Tailwind CSS", level: 3 },
      { name: "SCSS", level: 3 },
      { name: "JavaScript", level: 3 },
      { name: "AngularJS", level: 2 },
      { name: "HTML5/CSS3", level: 3 },
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-32 bg-[#0a0f1a] px-6 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-primary font-mono text-[10px] tracking-[0.5em] uppercase">Tech Stack</h2>
            <p className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
              The <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>Arsenal</span>
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
            <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Experience Scale</p>
            <p className="text-white font-bold text-sm">14+ Years of Enterprise Delivery</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`${group.size} group relative bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] overflow-hidden hover:border-primary/30 transition-all duration-500`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl border border-primary/20 group-hover:scale-110 transition-transform">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-black uppercase tracking-tighter text-lg">{group.category}</h3>
                    <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest">{group.projectCount} Projects</p>
                  </div>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className={`px-4 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider border transition-all ${
                      skill.level === 3 
                      ? "bg-white/5 border-white/10 text-white shadow-[0_0_15px_-5px_rgba(255,255,255,0.1)] hover:border-primary/50" 
                      : "bg-transparent border-white/5 text-white/30"
                    }`}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>

              {/* Decorative Background Icon */}
              <div className="absolute -bottom-6 -right-6 text-white/[0.02] text-9xl pointer-events-none group-hover:text-primary/[0.03] transition-colors">
                {group.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}