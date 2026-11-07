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

            {/* Guest invitation card and Open button */}
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

              {/* Luxury Personalized Guest Card */}
              <div className="relative mx-auto max-w-[310px] sm:max-w-xs rounded-xl bg-[#FAF9F4]/90 backdrop-blur-md p-3.5 sm:p-4 border border-[#B7A66B]/50 shadow-[0_4px_20px_rgba(183,166,107,0.15)] text-center">
                {/* Inner subtle vintage dashed border */}
                <div className="absolute inset-1 rounded-lg border border-dashed border-[#B7A66B]/30 pointer-events-none" />

                <span className="text-[10px] sm:text-[11px] text-[#697447] uppercase tracking-[0.22em] font-medium block">
                  Kepada Yth.
                </span>
                <span className="text-[11px] text-[#898775] block tracking-wide mt-0.5">
                  Bapak/Ibu/Saudara/i
                </span>

                <div className="my-1.5 py-0.5 border-y border-[#B7A66B]/25">
                  <p className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl font-semibold text-[#4F5938] tracking-wide line-clamp-2 px-1">
                    {guestName ? guestName : "Tamu Undangan"}
                  </p>
                </div>

                <span className="text-[10px] text-[#898775] italic tracking-wider block font-light">
                  di Tempat
                </span>
              </div>

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

