"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { BotanicalCorner, BotanicalDivider } from "@/components/ui/FloralDecoration";
import { OrnamentalOvalFrame } from "@/components/ui/OrnamentalFrame";

export function Closing() {
  return (
    <section className="relative px-5 py-14 sm:py-20 text-center max-w-xl mx-auto overflow-hidden">
      {/* Botanical Corner Elements at the bottom */}
      <BotanicalCorner position="bottom-left" size={140} />
      <BotanicalCorner position="bottom-right" size={140} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="space-y-6 relative z-20"
      >
        {/* Couple Main Photo in Oval Frame */}
        <div className="mb-6">
          <OrnamentalOvalFrame
            src={weddingConfig.couple.coverPhoto}
            alt={weddingConfig.couple.displayName}
            className="w-full max-w-[240px]"
          />
        </div>

        {/* Closing Thank You Text */}
        <p className="text-xs sm:text-sm text-[#555345] leading-relaxed font-light font-[family-name:var(--font-montserrat)] max-w-md mx-auto px-4">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
        </p>

        <p className="text-xs sm:text-sm text-[#898775] font-light max-w-md mx-auto italic">
          Terima kasih atas doa dan perhatian yang diberikan.
        </p>

        <BotanicalDivider />

        <div className="pt-2">
          <span className="text-[11px] tracking-[0.3em] uppercase text-[#697447] font-medium block mb-1">
            Kami yang berbahagia
          </span>
          <p className="font-[family-name:var(--font-great-vibes)] text-4xl sm:text-5xl text-[#4F5938] tracking-wide">
            {weddingConfig.couple.displayName}
          </p>
        </div>

        {/* Bottom Credits / Copyright */}
        <div className="pt-10 text-[10px] text-[#898775]/70 tracking-widest uppercase">
          Digital Wedding Invitation •
        </div>
      </motion.div>
    </section>
  );
}

