"use client";

import React from "react";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { useCountdown } from "@/hooks/useCountdown";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Countdown() {
  const { date, dateDisplay } = weddingConfig.event;
  const { days, hours, minutes, seconds, isCompleted, isValid } = useCountdown(date);

  // If wedding date is not configured or invalid, gracefully hide countdown without empty blocks
  if (!date || !isValid) {
    return null;
  }

  const timeUnits = [
    { label: "Hari", value: days },
    { label: "Jam", value: hours },
    { label: "Menit", value: minutes },
    { label: "Detik", value: seconds },
  ];

  return (
    <section className="relative px-5 py-12 sm:py-16 text-center max-w-xl mx-auto">
      <SectionHeading
        subtitle="Save The Date"
        title="Menghitung Hari"
        description={dateDisplay ? `Menuju hari bahagia kami pada ${dateDisplay}` : undefined}
      />

      {isCompleted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-[#F4F2E9]/80 rounded-2xl border border-[#B7A66B]/40 max-w-md mx-auto"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[#4F5938] font-normal">
            Alhamdulillah, Acara Telah Berlangsung
          </p>
          <p className="text-xs text-[#898775] mt-1 font-light">
            Terima kasih atas segala doa restu dan kebahagiaan yang telah Anda bagikan bersama kami.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
          {timeUnits.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#F4F2E9]/80 border border-[#B7A66B]/40 shadow-sm"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-4xl font-semibold text-[#4F5938]">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#697447] mt-1 font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

