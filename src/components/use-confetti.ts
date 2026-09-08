"use client";

import { useCallback, useEffect } from "react";
import confetti from "canvas-confetti";

const COLORS = ["#ff4d8d", "#ffc93c", "#2ec4b6", "#8a63d2", "#ff8c42"];

function randomInRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function useConfetti() {
  const fireBurst = useCallback(() => {
    confetti({
      particleCount: 130,
      spread: 95,
      startVelocity: 45,
      origin: { y: 0.7 },
      colors: COLORS,
      zIndex: 1000,
      scalar: 1.1,
    });
  }, []);

  const fireworks = useCallback(() => {
    const duration = 2600;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 28,
      spread: 360,
      ticks: 60,
      zIndex: 1000,
      colors: COLORS,
    };

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return window.clearInterval(interval);

      const particleCount = 48 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() * 0.5 },
      });
    }, 260);
  }, []);

  const bigCelebration = useCallback(() => {
    confetti({
      particleCount: 180,
      spread: 120,
      origin: { y: 0.6 },
      colors: COLORS,
      zIndex: 1000,
      scalar: 1.2,
    });

    setTimeout(() => {
      confetti({
        particleCount: 90,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.7 },
        colors: COLORS,
        zIndex: 1000,
      });
      confetti({
        particleCount: 90,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.7 },
        colors: COLORS,
        zIndex: 1000,
      });
    }, 260);

    setTimeout(fireworks, 500);
  }, [fireworks]);

  useEffect(() => {
    bigCelebration();
    const timer = window.setInterval(fireBurst, 6000);
    return () => window.clearInterval(timer);
  }, [bigCelebration, fireBurst]);

  return { fireBurst, fireworks, bigCelebration };
}
