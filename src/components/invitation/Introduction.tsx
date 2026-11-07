"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { BotanicalDivider } from "@/components/ui/FloralDecoration";

export function Introduction() {
  return (
    <section className="relative px-6 py-12 sm:py-16 text-center max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-[#697447] font-medium block">
          Undangan Pernikahan
        </span>

        <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-cormorant)] text-[#4F5938] font-normal tracking-wide">
          Assalamu’alaikum Warahmatullahi Wabarakatuh
        </h3>

        <BotanicalDivider />

        <p className="text-xs sm:text-sm text-[#555345] leading-relaxed font-light font-[family-name:var(--font-montserrat)] px-2">
          Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri hari bahagia pernikahan kami:
        </p>

        <div className="pt-2">
          <p className="font-[family-name:var(--font-great-vibes)] text-4xl sm:text-5xl text-[#697447] tracking-wide py-1">
            {weddingConfig.couple.displayName}
          </p>
        </div>
      </motion.div>
    </section>
  );
}

