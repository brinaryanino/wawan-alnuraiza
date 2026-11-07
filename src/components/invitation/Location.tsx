"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Location() {
  const { venueName, address, mapsUrl, embedMapUrl } = weddingConfig.location;

  // Gracefully hide section if location is not configured
  if (!venueName && !address && !mapsUrl) {
    return null;
  }

  return (
    <section className="relative px-5 py-12 sm:py-16 max-w-2xl mx-auto">
      <SectionHeading
        subtitle="Petunjuk Arah"
        title="Lokasi Acara"
        description="Silakan klik tombol di bawah untuk membuka panduan rute melalui Google Maps menuju lokasi acara."
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="bg-[#FAF9F4] p-6 sm:p-8 rounded-2xl border border-[#B7A66B]/40 shadow-[0_4px_24px_rgba(183,166,107,0.12)] text-center flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-full bg-[#697447]/10 border border-[#697447]/30 flex items-center justify-center text-[#697447] mb-4">
          <MapPin className="w-6 h-6" />
        </div>

        {venueName && (
          <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-cormorant)] text-[#4F5938] font-semibold mb-2">
            {venueName}
          </h3>
        )}

        {address && (
          <p className="text-xs sm:text-sm text-[#898775] leading-relaxed max-w-md mx-auto mb-6 font-light">
            {address}
          </p>
        )}

        {embedMapUrl && (
          <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-[#B7A66B]/30 mb-6 bg-[#EFECE3]">
            <iframe
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Pernikahan"
            />
          </div>
        )}

        {mapsUrl && (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#697447] text-white text-xs sm:text-sm tracking-wider uppercase font-medium shadow-[0_4px_16px_rgba(105,116,71,0.25)] hover:bg-[#4F5938] transition-all active:scale-95 border border-[#B7A66B]/40"
          >
            <Navigation className="w-4 h-4" />
            <span>Buka Google Maps</span>
          </a>
        )}
      </motion.div>
    </section>
  );
}

