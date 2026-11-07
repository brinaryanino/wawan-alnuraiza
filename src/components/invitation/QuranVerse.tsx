"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { BotanicalDivider } from "@/components/ui/FloralDecoration";

export function QuranVerse() {
  const { surah, arabic, translation } = weddingConfig.quranVerse;

  return (
    <section className="relative px-5 py-10 sm:py-14 my-4">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#F4F2E9]/70 backdrop-blur-sm p-6 sm:p-9 rounded-2xl border border-[#B7A66B]/35 shadow-[0_4px_20px_rgba(183,166,107,0.1)] text-center"
        >
          {/* Subtle gold top crest ornament */}
          <div className="w-8 h-8 mx-auto -mt-10 mb-4 rounded-full bg-[#FAF9F4] border border-[#B7A66B]/50 flex items-center justify-center text-[#B7A66B] shadow-sm">
            <span className="text-sm">❦</span>
          </div>

          {/* Arabic Script */}
          <p
            dir="rtl"
            className="font-[family-name:var(--font-amiri)] text-xl sm:text-2xl lg:text-3xl leading-[2.2] sm:leading-[2.4] text-[#4F5938] mb-6 font-normal"
          >
            {arabic}
          </p>

          <BotanicalDivider className="my-3 opacity-75" />

          {/* Indonesian Translation */}
          <blockquote className="text-xs sm:text-[13px] text-[#555345] leading-relaxed italic font-light font-[family-name:var(--font-montserrat)] px-1 sm:px-4">
            &ldquo;{translation}&rdquo;
          </blockquote>

          {/* Surah Citation */}
          <p className="mt-4 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-medium text-[#697447]">
            — {surah} —
          </p>
        </motion.div>
      </div>
    </section>
  );
}

