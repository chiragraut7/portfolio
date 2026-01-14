"use client";
import { motion } from "framer-motion";

const SkillCircle = ({ percentage, label }: { percentage: number; label: string }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  return (
    // Replaced bg-white/5 with bg-card and border-white/5 with border-border
    <div className="flex flex-col items-center gap-3 bg-card p-6 rounded-3xl border border-border group hover:bg-foreground/[0.03] transition-all duration-500 shadow-lg">
      <div className="relative w-24 h-24">
        {/* Background Track */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            // Replaced text-white/5 with text-border for visibility in light/dark themes
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-border"
          />
          {/* Animated Progress Path */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke="var(--color-primary)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            strokeLinecap="round"
          />
        </svg>
        {/* Centered Percentage - Changed text-white to text-foreground */}
        <div className="absolute inset-0 flex items-center justify-center font-black text-xl text-foreground">
          {percentage}%
        </div>
      </div>
      {/* Label - Changed text-white/40 to text-foreground/40 */}
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 group-hover:text-primary transition-colors duration-300">
        {label}
      </span>
    </div>
  );
};