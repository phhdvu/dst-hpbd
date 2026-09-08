"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Gift, Heart, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const SALUTATION = "Gửi Minh Châu,";

const PARAGRAPHS = [
  "Chúc Minh Châu lên đường du học thật suôn sẻ nhaaa 🫶🏻 Sang một nơi mới chắc sẽ có nhiều thứ lạ lẫm, nhưng cứ tự tin và tận hưởng hết những trải nghiệm mới nhé. Mong Châu học hành thuận lợi, gặp được nhiều người tốt và có thật nhiều kỷ niệm vui ở bên đó. Nhớ giữ sức khỏe, đừng có mải vui rồi quên ăn quên ngủ =))",
  "Đi xa thì nhớ mọi người ở nhà một chút thôi, còn lại cứ mạnh dạn bước ra ngoài và làm những điều mình muốn nha. Chúc Châu có một hành trình thật đáng nhớ, sang đó rồi cũng phải thật rực rỡ đấy!",
  "Và năm nay sinh nhật không bên cạnh nhau nhưng có nhau trong tim là đượt gòi nhỉ. Cảm ơn m vì đã là bạn thân cụa tao dù mình siêu ít gặp.",
  "Luôn ủng hộ và bên Châu🥹",
];

const SIGNATURE = "— DST Solution";

export function LetterIntro({ onReveal }: { onReveal: () => void }) {
  const [opened, setOpened] = useState(false);

  return (
    <div className="relative flex h-dvh flex-col items-center justify-center overflow-hidden px-4 py-6 text-center">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 20% 15%, #ffe3c9 0%, transparent 45%), radial-gradient(circle at 82% 18%, #ffe0ef 0%, transparent 45%), radial-gradient(circle at 50% 90%, #d6f6ef 0%, transparent 48%)",
        }}
      />

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85, y: -20 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col items-center gap-8"
          >
            <button
              onClick={() => setOpened(true)}
              className="group relative block w-[min(340px,88vw)] cursor-pointer outline-none"
              aria-label="Mở thư"
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -0.7, 0.7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-[4/3] w-full"
              >
                {/* envelope shell */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-foreground bg-[#fff7ef] shadow-[7px_7px_0_0_var(--foreground)]">
                  {/* body */}
                  <div className="absolute inset-0 bg-[#ffe6f0]" />

                  {/* flap (triangle, tip at 40% height) */}
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 40%)",
                      background: "linear-gradient(180deg, #ff9fc0 0%, #ff7cab 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 50% 40%)",
                      boxShadow: "inset 0 -8px 14px rgba(214,69,129,0.28)",
                    }}
                  />

                  {/* pocket front (V point meets flap tip) */}
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: "polygon(50% 40%, 100% 60%, 100% 100%, 0 100%, 0 60%)",
                      background:
                        "linear-gradient(180deg, #ffc6de 0%, #ffb3d1 100%)",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      clipPath: "polygon(50% 40%, 100% 60%, 100% 100%, 0 100%, 0 60%)",
                      boxShadow: "inset 0 8px 16px rgba(214,69,129,0.16)",
                    }}
                  />

                  {/* airmail border */}
                  <div className="absolute inset-2 rounded-xl border-2 border-dashed border-foreground/15" />

                  {/* sender */}
                  <p className="absolute bottom-4 left-5 font-hand text-sm text-foreground/55">
                    From DST Solution 💌
                  </p>
                </div>

                {/* stamp */}
                <div className="absolute right-4 top-3 flex h-14 w-12 rotate-3 flex-col items-center justify-center rounded-sm border-2 border-foreground bg-white shadow-[2px_2px_0_0_var(--foreground)]">
                  <Sparkles className="size-4 text-primary" aria-hidden="true" />
                  <span className="mt-0.5 font-hand text-[10px] leading-none text-foreground/70">
                    Love
                  </span>
                </div>

                {/* wax seal */}
                <div className="absolute left-1/2 top-[64px] flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-2 border-foreground bg-[#ff4d8d] shadow-[4px_4px_0_0_var(--foreground)] transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <div className="absolute inset-1 rounded-full border-2 border-white/40" />
                  <Heart className="size-6 text-white" fill="white" />
                </div>
              </motion.div>
            </button>

            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="font-hand text-lg text-foreground/70"
            >
              <Mail className="mr-2 inline-block size-5" aria-hidden="true" />
              Chạm vào thư để mở nè 💌
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex w-[min(420px,92vw)] flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-[#fffdf7] shadow-[8px_8px_0_0_var(--foreground)]"
          >
            <div className="border-b-2 border-foreground/10 px-5 py-3 text-left">
              <p className="font-display text-2xl font-extrabold text-primary [text-shadow:1px_1px_0_var(--foreground)]">
                {SALUTATION}
              </p>
            </div>

            <div
              className="max-h-[46dvh] overflow-y-auto px-5 py-4 text-left font-hand text-lg leading-relaxed text-foreground/85"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 31px, rgba(34,26,46,0.08) 32px)",
                backgroundAttachment: "local",
              }}
            >
              {PARAGRAPHS.map((p, i) => (
                <p key={i} className="mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              <p className="mt-6 text-right font-hand text-xl text-foreground/80">
                {SIGNATURE}
              </p>
            </div>

            <div className="border-t-2 border-foreground/10 p-4">
              <Button size="lg" className="w-full" onClick={onReveal}>
                <Gift className="size-5" aria-hidden="true" />
                Nhận quà sinh nhật 🎁
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
