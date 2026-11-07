"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { OrnamentalOvalFrame } from "@/components/ui/OrnamentalFrame";
import { BotanicalDivider } from "@/components/ui/FloralDecoration";

export function CoupleProfiles() {
  const { groom, bride } = weddingConfig;

  return (
    <section className="relative px-5 py-12 sm:py-16 max-w-2xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.25em] text-[#697447] font-medium block mb-1">
          Mempelai
        </span>
        <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-cormorant)] text-[#4F5938] font-normal tracking-wide">
          Pasangan Mempelai
        </h2>
        <BotanicalDivider />
      </div>

      <div className="flex flex-col gap-12 sm:gap-14">
        {/* Groom Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <OrnamentalOvalFrame
            src={groom.photo}
            alt={groom.name}
            className="w-full max-w-[280px]"
          />

          <div className="space-y-1 pt-1">
            <span className="text-xs tracking-[0.3em] uppercase text-[#697447] font-medium">
              Mempelai Pria
            </span>
            <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-cormorant)] text-[#4F5938] font-normal tracking-wide">
              {groom.name}
            </h3>
            <p className="font-[family-name:var(--font-great-vibes)] text-3xl sm:text-4xl text-[#B7A66B]">
              {groom.displayName}
            </p>
          </div>
        </motion.div>

        {/* Elegant Ampersand Divider */}
        <div className="flex items-center justify-center my-1 select-none">
          <span className="font-[family-name:var(--font-great-vibes)] text-4xl sm:text-5xl text-[#B7A66B]/80 px-4">
            &amp;
          </span>
        </div>

        {/* Bride Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <OrnamentalOvalFrame
            src={bride.photo}
            alt={bride.name}
            className="w-full max-w-[280px]"
          />

          <div className="space-y-1 pt-1">
            <span className="text-xs tracking-[0.3em] uppercase text-[#697447] font-medium">
              Mempelai Wanita
            </span>
            <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-cormorant)] text-[#4F5938] font-normal tracking-wide">
              {bride.name}
            </h3>
            <p className="font-[family-name:var(--font-great-vibes)] text-3xl sm:text-4xl text-[#B7A66B]">
              {bride.displayName}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

