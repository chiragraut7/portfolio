"use client";
import { motion } from "framer-motion";

const SkillCircle = ({ percentage, label }: { percentage: number; label: string }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col items-center gap-3 bg-white/5 p-6 rounded-3xl border border-white/5 group hover:bg-white/10 transition-all">
      <div className="relative w-24 h-24">
        {/* Background Track */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-white/5"
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
            animate={{ strokeDashoffset: circumference - (percentage / 100) * circumference }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-black text-xl text-white">
          {percentage}%
        </div>
      </div>
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-primary transition-colors">
        {label}
      </span>
    </div>
  );
};