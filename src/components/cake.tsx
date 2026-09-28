"use client";

import { motion } from "motion/react";
import { getTodayMatch, THEMES } from "@/config";

const SPRINKLES = [
  { left: "12%", top: "72%", color: "#ffc93c", rotate: 18 },
  { left: "22%", top: "84%", color: "#2ec4b6", rotate: -34 },
  { left: "34%", top: "74%", color: "#ff4d8d", rotate: 52 },
  { left: "48%", top: "88%", color: "#8a63d2", rotate: -12 },
  { left: "58%", top: "73%", color: "#ffc93c", rotate: -48 },
  { left: "70%", top: "86%", color: "#ff4d8d", rotate: 26 },
  { left: "82%", top: "76%", color: "#2ec4b6", rotate: -20 },
];

function Candle({ color, delay }: { color: string; delay: number }) {
  return (
    <div className="relative -mb-1 flex flex-col items-center" aria-hidden="true">
      <motion.div
        className="mb-[-5px] h-4 w-3 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 65%, #fff6c8 0%, #ffd166 45%, #ff8c42 100%)",
          boxShadow: "0 0 14px 5px rgba(255,170,60,0.55)",
        }}
        animate={{ scale: [1, 1.15, 0.9, 1.08, 1], rotate: [0, -4, 4, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut", delay }}
      />
      <div
        className="h-10 w-2.5 rounded-sm border-2 border-foreground sm:h-12"
        style={{
          background: `repeating-linear-gradient(45deg, ${color} 0 4px, #fff7ea 4px 8px)`,
        }}
      />
    </div>
  );
}

export function Cake() {
  const match = getTodayMatch();
  const theme = match?.theme || THEMES.default;
  const candleColors = [theme.primary, theme.secondary, theme.accent, theme.primary, theme.secondary];

  return (
    <div className="relative mx-auto w-[min(280px,78vw)] sm:w-[320px]">
      <div className="relative z-20 flex justify-center gap-5 sm:gap-7">
        {candleColors.map((c, i) => (
          <Candle key={i} color={c} delay={i * 0.14} />
        ))}
      </div>

      <div className="relative z-10 -mt-1 h-[150px] overflow-hidden rounded-[30px] border-2 border-foreground sm:h-[170px]">
        <div
          className="absolute inset-x-0 top-0 h-[58px] sm:h-[66px]"
          style={{ background: theme.cakeFrosting }}
        />

        <div className="absolute inset-x-0 top-[42px] flex justify-around sm:top-[48px]">
          {[0, 1, 2, 3, 4, 5].map((d) => (
            <div
              key={d}
              className="h-6 w-6 rounded-b-full sm:h-7 sm:w-7"
              style={{ background: theme.primary }}
            />
          ))}
        </div>

        <div
          className="absolute inset-x-0 top-[58px] h-[14px] sm:top-[66px] sm:h-[16px]"
          style={{ background: "linear-gradient(180deg, #fffdf7 0%, #ffd9e8 100%)" }}
        />

        <div
          className="absolute inset-x-0 top-[72px] bottom-0 sm:top-[82px]"
          style={{ background: theme.cakeBody }}
        />

        {SPRINKLES.map((s, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-4 rounded-full"
            style={{
              left: s.left,
              top: s.top,
              background: s.color,
              transform: `rotate(${s.rotate}deg)`,
            }}
          />
        ))}

        <div className="absolute inset-x-0 top-0 h-8 rounded-t-[28px] bg-white/10" />
      </div>

      <motion.div
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px]"
        style={{
          background: `radial-gradient(closest-side, ${theme.primary}44, transparent)`,
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
