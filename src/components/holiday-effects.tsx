"use client";

import { motion } from "motion/react";

interface HolidayParticles {
  emoji: string[];
  count: number;
}

function getHolidayEffect(month: number, day: number): HolidayParticles | null {
  if (month === 10 && day >= 25 && day <= 31) {
    return { emoji: ["🎃", "👻", "🕷️", "🕸️", "🍬"], count: 12 };
  }
  if (month === 12 && day >= 20 && day <= 26) {
    return { emoji: ["🎄", "⭐", "🎁", "❄️", "🔔"], count: 15 };
  }
  if (month === 12 && day >= 30) {
    return { emoji: ["🎆", "🎇", "✨", "🎊", "🥳"], count: 20 };
  }
  if (month === 1 && day <= 3) {
    return { emoji: ["🎆", "🎇", "✨", "🎊", "🥳"], count: 20 };
  }
  if (month === 2 && day >= 10 && day <= 15) {
    return { emoji: ["❤️", "💕", "💝", "🌹", "💗"], count: 12 };
  }
  if (month === 3 && day >= 6 && day <= 10) {
    return { emoji: ["💜", "🌸", "🌷", "💐", "✨"], count: 12 };
  }
  return null;
}

function Particle({ emoji, index, total }: { emoji: string; index: number; total: number }) {
  const left = (index / total) * 100;
  const delay = Math.random() * 3;
  const duration = 8 + Math.random() * 6;
  const size = 16 + Math.random() * 16;

  return (
    <motion.div
      className="pointer-events-none absolute top-0 text-foreground/60"
      style={{ left: `${left}%`, fontSize: size }}
      initial={{ y: "-10vh", opacity: 0, rotate: 0 }}
      animate={{
        y: "110vh",
        opacity: [0, 1, 1, 0],
        rotate: 360,
        x: [0, 20, -20, 10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      aria-hidden="true"
    >
      {emoji}
    </motion.div>
  );
}

export function HolidayEffects({ month, day }: { month: number; day: number }) {
  const effect = getHolidayEffect(month, day);
  if (!effect) return null;

  const particles = Array.from({ length: effect.count }, (_, i) => ({
    emoji: effect.emoji[i % effect.emoji.length],
    index: i,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <Particle key={i} emoji={p.emoji} index={p.index} total={effect.count} />
      ))}
    </div>
  );
}
