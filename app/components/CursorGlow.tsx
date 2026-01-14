"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Use springs for smooth movement
  const mouseX = useSpring(mousePos.x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(mousePos.y, { stiffness: 500, damping: 50 });

  return (
    <motion.div
      style={{
        left: mouseX,
        top: mouseY,
        // Using the theme variable for the glow color
        background: `radial-gradient(600px circle at center, var(--color-primary), transparent 80%)`,
      }}
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 z-[1] w-full h-full opacity-10 blur-[120px]"
    />
  );
}