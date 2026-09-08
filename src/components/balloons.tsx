"use client";

import { motion } from "motion/react";

type BalloonSpec = {
  color: string;
  delay: number;
  left: string;
  size: number;
  duration: number;
  rotate: number;
};

const BALLOONS: BalloonSpec[] = [
  { color: "#ff4d8d", delay: 0, left: "4%", size: 96, duration: 11, rotate: -6 },
  { color: "#ffc93c", delay: 1.1, left: "16%", size: 128, duration: 13, rotate: 5 },
  { color: "#2ec4b6", delay: 0.5, left: "29%", size: 82, duration: 10, rotate: 7 },
  { color: "#8a63d2", delay: 2, left: "42%", size: 112, duration: 12.5, rotate: -5 },
  { color: "#ff4d8d", delay: 1.6, left: "55%", size: 92, duration: 11.5, rotate: 4 },
  { color: "#ffc93c", delay: 0.3, left: "68%", size: 124, duration: 13.5, rotate: -7 },
  { color: "#2ec4b6", delay: 2.3, left: "80%", size: 84, duration: 10.5, rotate: 6 },
  { color: "#8a63d2", delay: 0.9, left: "91%", size: 108, duration: 12, rotate: -4 },
];

function Balloon({ color, delay, left, size, duration, rotate }: BalloonSpec) {
  return (
    <motion.div
      className="pointer-events-none absolute bottom-[-200px]"
      style={{ left }}
      initial={{ y: 0 }}
      animate={{ y: "-130vh", x: [0, 26, -20, 14, 0] }}
      transition={{
        y: { duration, delay, repeat: Infinity, ease: "linear" },
        x: { duration: duration / 2, delay, repeat: Infinity, ease: "easeInOut" },
      }}
      aria-hidden="true"
    >
      <div
        className="relative"
        style={{ width: size, height: size * 1.25, rotate: `${rotate}deg` }}
      >
        <div
          className="absolute inset-0 rounded-[50%_50%_50%_50%/42%_42%_58%_58%] border-[3px] border-foreground"
          style={{
            background: `radial-gradient(circle at 30% 25%, rgba(255,255,255,0.6) 0 12%, transparent 40%), ${color}`,
            boxShadow: "inset -8px -14px 24px rgba(0,0,0,0.14)",
          }}
        />
        <div
          className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-[3px] border-foreground"
          style={{ background: color }}
        />
        <div className="absolute bottom-[-52px] left-1/2 h-12 w-[3px] -translate-x-1/2 bg-foreground" />
      </div>
    </motion.div>
  );
}

export function Balloons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {BALLOONS.map((b) => (
        <Balloon key={`${b.left}-${b.color}`} {...b} />
      ))}
    </div>
  );
}
