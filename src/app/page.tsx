"use client";

import { AnimatePresence, motion } from "motion/react";
import { BirthdayScene } from "@/components/birthday-scene";
import { Countdown } from "@/components/countdown";
import { getTodayMatch } from "@/config";
import { PartyPopper } from "lucide-react";

export default function Home() {
  const match = getTodayMatch();

  if (match) {
    return <BirthdayScene />;
  }

  return (
    <main className="relative flex h-dvh flex-col items-center justify-center overflow-hidden px-4 py-6 text-center">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 20% 15%, #ffe3c9 0%, transparent 45%), radial-gradient(circle at 82% 18%, #ffe0ef 0%, transparent 45%), radial-gradient(circle at 50% 90%, #d6f6ef 0%, transparent 48%)",
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key="no-birthday"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, -2, 2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-foreground bg-secondary shadow-[6px_6px_0_0_var(--foreground)]"
          >
            <PartyPopper className="size-12 text-secondary-foreground" />
          </motion.div>

          <div>
            <h1 className="font-display text-3xl font-extrabold text-foreground sm:text-5xl">
              Hôm nay chưa có ai sinh nhật 🎂
            </h1>
            <p className="mt-3 font-hand text-base text-foreground/60 sm:text-xl">
              Nhưng đừng lo, sắp tới thôi!
            </p>
          </div>

          <Countdown />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1 }}
            className="mt-4 font-hand text-xs text-foreground/50 sm:text-lg"
          >
            From <span className="text-primary">DST Solution</span> with{" "}
            <span className="text-primary">♥</span>
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
