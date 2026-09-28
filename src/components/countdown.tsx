"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { getNextBirthdays } from "@/config";

function BirthdayCountdown({
  name,
  daysLeft,
  month,
  day,
  index,
}: {
  name: string;
  daysLeft: number;
  month: number;
  day: number;
  index: number;
}) {
  const pad = (n: number) => String(n).padStart(2, "0");
  const dateStr = `${pad(day)}/${pad(month)}`;

  const colors = ["text-primary", "text-accent", "text-secondary"];
  const colorClass = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="flex items-center gap-3 rounded-xl border-2 border-foreground bg-white/80 px-4 py-3 shadow-[4px_4px_0_0_var(--foreground)] sm:gap-4 sm:px-5 sm:py-4"
    >
      <div className="flex flex-col items-center min-w-[60px]">
        <span className={`font-display text-2xl font-extrabold ${colorClass} [text-shadow:2px_2px_0_var(--foreground)] sm:text-4xl`}>
          {daysLeft}
        </span>
        <span className="font-hand text-xs text-foreground/60 sm:text-sm">ngày</span>
      </div>

      <div className="h-10 w-[2px] bg-foreground/20" />

      <div className="flex flex-col items-start text-left">
        <span className="font-display text-lg font-extrabold text-foreground sm:text-2xl">
          {name}
        </span>
        <span className="font-hand text-sm text-foreground/60 sm:text-base">
          {dateStr}
        </span>
      </div>
    </motion.div>
  );
}

export function Countdown() {
  const [nexts, setNexts] = useState(getNextBirthdays());
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
      setNexts(getNextBirthdays());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  if (nexts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-6 flex flex-col items-center gap-4"
    >
      <div className="inline-flex items-center gap-2 rounded-2xl border-2 border-foreground bg-secondary px-4 py-2 font-hand text-sm text-secondary-foreground shadow-[4px_4px_0_0_var(--foreground)] sm:text-lg">
        <Clock className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
        3 sinh nhật tiếp theo
      </div>

      <div className="flex flex-col gap-3 w-full max-w-md sm:gap-4">
        {nexts.map((b, i) => (
          <BirthdayCountdown key={`${b.name}-${b.day}`} {...b} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
