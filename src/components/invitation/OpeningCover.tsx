"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { BotanicalCorner, HangingFloralGarland } from "@/components/ui/FloralDecoration";
import { OrnamentalOvalFrame } from "@/components/ui/OrnamentalFrame";

interface OpeningCoverProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName?: string;
}

export function OpeningCover({ isOpen, onOpen, guestName }: OpeningCoverProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%", transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#FAF9F4] paper-texture overflow-hidden select-none px-4 py-8"
        >
          {/* Botanical Corner Elements */}
          <BotanicalCorner position="top-left" size={170} />
          <BotanicalCorner position="top-right" size={170} />
          <BotanicalCorner position="bottom-left" size={170} />
          <BotanicalCorner position="bottom-right" size={170} />

          {/* Top Hanging Floral Garland */}
          <div className="absolute top-0 left-0 right-0 z-20">
            <HangingFloralGarland />
          </div>

          {/* Luxury Double Border Frame */}
          <div className="absolute inset-4 sm:inset-6 border border-[#B7A66B]/40 rounded-xl pointer-events-none">
            <div className="absolute inset-1.5 border border-[#B7A66B]/20 rounded-lg" />
          </div>

          {/* Main Cover Card Content */}
          <div className="relative z-30 flex flex-col items-center justify-between max-w-[400px] w-full h-full max-h-[760px] text-center my-auto py-6 sm:py-8">
            {/* Top Introductory text */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-1"
            >
              <p className="text-[11px] sm:text-xs tracking-[0.35em] text-[#697447] uppercase font-medium">
                The Wedding of
              </p>
              <h1 className="text-3xl sm:text-4xl text-[#4F5938] font-[family-name:var(--font-cormorant)] tracking-wide font-normal">
                {weddingConfig.couple.displayName}
              </h1>
            </motion.div>

            {/* Couple Oval Portrait with Antique Gold Ornament */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="my-3 sm:my-4"
            >
              <OrnamentalOvalFrame
                src={weddingConfig.couple.coverPhoto}
                alt={weddingConfig.couple.displayName}
                priority
                loading="eager"
              />
            </motion.div>

            {/* Guest invitation note and Open button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full space-y-4 px-4"
            >
              {weddingConfig.event.dateDisplay && (
                <p className="text-xs sm:text-sm text-[#898775] tracking-widest uppercase font-light">
                  {weddingConfig.event.dateDisplay}
                </p>
              )}

              {guestName && (
                <div className="bg-[#FAF9F4]/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-[#B7A66B]/30 max-w-xs mx-auto">
                  <span className="text-[11px] text-[#898775] block uppercase tracking-wider">
                    Kepada Yth. Bapak/Ibu/Saudara/i:
                  </span>
                  <p className="text-sm font-semibold text-[#4F5938] tracking-wide mt-0.5">
                    {guestName}
                  </p>
                </div>
              )}

              {/* Elegant Buka Undangan Button */}
              <div className="pt-2">
                <button
                  onClick={onOpen}
                  type="button"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#697447] text-white text-xs sm:text-sm tracking-wider uppercase font-medium shadow-[0_4px_16px_rgba(105,116,71,0.25)] hover:bg-[#4F5938] hover:shadow-[0_6px_20px_rgba(79,89,56,0.35)] transition-all duration-300 active:scale-95 border border-[#B7A66B]/50 cursor-pointer"
                >
                  <MailOpen className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>Buka Undangan</span>
                </button>
                <p className="text-[10px] text-[#898775] mt-2 italic font-light">
                  *Ketuk untuk membuka dan mendengarkan alunan musik
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

