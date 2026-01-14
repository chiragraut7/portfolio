"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("amber");

  const themes = [
    { id: "amber", color: "#ffc300", label: "Amber" },
    { id: "blue", color: "#2255a4", label: "Royal" },
    { id: "orange", color: "#ff4d00", label: "Vibrant" },
    { id: "light", color: "#ffffff", label: "Clean" },
  ];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("selected-theme", theme);
  }, [theme]);

  return (
    <div className="flex gap-2 bg-card/80 p-2 rounded-2xl border border-border backdrop-blur-md">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`relative w-8 h-8 rounded-full border-2 transition-all ${
            theme === t.id ? "border-white scale-110 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
          }`}
          style={{ backgroundColor: t.color === "#ffffff" ? "#e2e8f0" : t.color }}
          title={t.label}
        >
          {theme === t.id && (
            <motion.div 
              layoutId="activeTheme"
              className="absolute -inset-2 rounded-full border border-primary/30"
            />
          )}
        </button>
      ))}
    </div>
  );
}