"use client";

import { motion } from "motion/react";
import { Cake } from "@/components/cake";
import { Balloons } from "@/components/balloons";
import { Button } from "@/components/ui/button";
import { useConfetti } from "@/components/use-confetti";
import { Gift, PartyPopper, Sparkles } from "lucide-react";
import { SCHEDULE } from "@/config";

function getRecipientName(): string {
  const now = new Date();
  const vnTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }));
  const month = vnTime.getMonth() + 1;
  const day = vnTime.getDate();

  const matches = SCHEDULE.filter((s) => s.month === month && s.day === day);
  if (matches.length === 0) return "";
  return matches.map((m) => m.name).join(" & ");
}

const RECIPIENT = getRecipientName();
const MESSAGE =
  "Chúc mừng sinh nhật! Chúc bạn một ngày thật rực rỡ, ngập tràn tiếng cười và những điều ngọt ngào nhất.";

const STARBURSTS = [
  { top: "10%", left: "6%", delay: 0, size: 100, color: "#ffc93c" },
  { top: "12%", left: "86%", delay: 0.5, size: 120, color: "#ff4d8d" },
  { top: "62%", left: "5%", delay: 0.3, size: 110, color: "#2ec4b6" },
  { top: "56%", left: "90%", delay: 0.8, size: 90, color: "#8a63d2" },
  { top: "36%", left: "93%", delay: 0.2, size: 70, color: "#ffc93c" },
];

function Starburst({
  top,
  left,
  size,
  color,
  delay,
}: {
  top: string;
  left: string;
  size: number;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute -z-10"
      style={{ top, left, width: size, height: size }}
      animate={{ rotate: 360, scale: [1, 1.08, 1] }}
      transition={{
        rotate: { duration: 22, repeat: Infinity, ease: "linear" },
        scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay },
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon
          points="50,0 56,32 88,8 72,42 100,50 72,58 88,92 56,68 50,100 44,68 12,92 28,58 0,50 28,42 12,8 44,32"
          fill={color}
          stroke="var(--foreground)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export function BirthdayScene() {
  const { fireBurst, fireworks, bigCelebration } = useConfetti();

  return (
    <main className="relative flex h-dvh flex-col items-center justify-center overflow-hidden px-4 py-3 text-center sm:px-6 sm:py-5">
      {/* backdrop */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 18% 12%, #ffe3c9 0%, transparent 42%), radial-gradient(circle at 82% 16%, #ffe0ef 0%, transparent 42%), radial-gradient(circle at 50% 92%, #d6f6ef 0%, transparent 46%)",
        }}
      />

      {STARBURSTS.map((s, i) => (
        <Starburst key={i} {...s} />
      ))}

      <Balloons />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center gap-3 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-2xl border-2 border-foreground bg-secondary px-4 py-1.5 font-hand text-sm text-secondary-foreground shadow-[4px_4px_0_0_var(--foreground)] sm:px-5 sm:text-lg"
        >
          <PartyPopper className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
          Hôm nay là một ngày đặc biệt!
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="font-display text-5xl font-extrabold leading-none tracking-tight text-foreground sm:text-7xl md:text-8xl"
        >
          <span className="text-primary [text-shadow:3px_3px_0_var(--foreground)]">
            HAPPY
          </span>
          <br />
          <span className="text-accent [text-shadow:3px_3px_0_var(--foreground)]">
            BIRTHDAY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
        >
          {RECIPIENT && (
            <>
              <span className="text-secondary [text-shadow:3px_3px_0_var(--foreground)]">
                {RECIPIENT}
              </span>{" "}
            </>
          )}
          🎂
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.45, ease: "easeOut" }}
          className="mt-2 sm:mt-3"
        >
          <Cake />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="max-w-md text-balance font-hand text-base leading-snug text-foreground/75 sm:max-w-xl sm:text-2xl"
        >
          {MESSAGE}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:gap-3"
        >
          <Button
            size="lg"
            className="h-10 w-full text-sm sm:h-12 sm:w-auto sm:text-base"
            onClick={bigCelebration}
          >
            <Gift className="size-4 sm:size-5" aria-hidden="true" />
            Thổi nến & bắn pháo
          </Button>
          <div className="flex w-full gap-2 sm:w-auto sm:gap-3">
            <Button
              size="lg"
              variant="secondary"
              className="h-10 flex-1 text-sm sm:h-12 sm:flex-none sm:text-base"
              onClick={fireworks}
            >
              <PartyPopper className="size-4 sm:size-5" aria-hidden="true" />
              Pháo hoa
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-10 flex-1 text-sm sm:h-12 sm:flex-none sm:text-base"
              onClick={fireBurst}
            >
              <Sparkles className="size-4 sm:size-5" aria-hidden="true" />
              Nổ pháo nhỏ
            </Button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.4 }}
          className="font-hand text-xs text-foreground/60 sm:text-lg"
        >
          From <span className="text-primary">DST Solution</span> with{" "}
          <span className="text-primary">♥</span>
        </motion.p>
      </div>
    </main>
  );
}
