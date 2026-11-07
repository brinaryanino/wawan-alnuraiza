"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventDetail } from "@/types/wedding";

function EventCard({ event, index }: { event: EventDetail; index: number }) {
  // Gracefully hide card if both venue and date are missing
  if (!event.venue && !event.date && !event.startTime) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative bg-[#FAF9F4] p-6 sm:p-8 rounded-2xl border border-[#B7A66B]/40 shadow-[0_4px_20px_rgba(183,166,107,0.12)] text-center flex flex-col items-center"
    >
      {/* Decorative Vintage Ribbon Badge */}
      <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#697447]/10 border border-[#697447]/30">
        <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-semibold text-[#697447]">
          {event.title}
        </span>
      </div>

      {/* Date */}
      {event.date && (
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4F5938] font-medium my-1">
          <Calendar className="w-4 h-4 text-[#B7A66B]" />
          <span>{event.date}</span>
        </div>
      )}

      {/* Time */}
      {(event.startTime || event.endTime) && (
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#555345] my-1">
          <Clock className="w-4 h-4 text-[#B7A66B]" />
          <span>
            {event.startTime} {event.endTime ? `— ${event.endTime}` : ""}
          </span>
        </div>
      )}

      {/* Venue & Address */}
      {event.venue && (
        <div className="mt-4 pt-3 border-t border-[#B7A66B]/25 w-full space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-sm sm:text-base font-semibold text-[#4F5938] font-[family-name:var(--font-cormorant)]">
            <MapPin className="w-4 h-4 text-[#697447] shrink-0" />
            <span>{event.venue}</span>
          </div>
          {event.address && (
            <p className="text-xs text-[#898775] leading-relaxed max-w-sm mx-auto font-light">
              {event.address}
            </p>
          )}
        </div>
      )}

      {/* Google Maps Button */}
      {event.mapsUrl && (
        <div className="mt-5 pt-2">
          <a
            href={event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-medium rounded-full bg-[#FAF9F4] text-[#4F5938] border border-[#B7A66B] hover:bg-[#F4F2E9] hover:border-[#697447] transition-all shadow-sm active:scale-95"
          >
            <span>Lihat Lokasi</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </motion.div>
  );
}

export function WeddingEvents() {
  const { akad, reception } = weddingConfig.event;

  // Check if either event has any configured data
  const hasAkad = Boolean(akad.venue || akad.date || akad.startTime);
  const hasReception = Boolean(reception.venue || reception.date || reception.startTime);

  if (!hasAkad && !hasReception) {
    return null;
  }

  return (
    <section className="relative px-5 py-12 sm:py-16 max-w-2xl mx-auto">
      <SectionHeading
        subtitle="Rangkaian Acara"
        title="Agenda Pernikahan"
        description="Merupakan kehormatan bagi kami atas kehadiran dan doa restu Anda pada hari bahagia kami."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6">
        {hasAkad && <EventCard event={akad} index={0} />}
        {hasReception && <EventCard event={reception} index={1} />}
      </div>
    </section>
  );
}

