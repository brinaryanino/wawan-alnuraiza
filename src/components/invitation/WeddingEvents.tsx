"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
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
      className="relative w-full bg-[#FAF9F4] p-6 sm:p-7 rounded-2xl border border-[#B7A66B]/40 shadow-[0_4px_20px_rgba(183,166,107,0.12)] text-center flex flex-col items-center"
    >
      {/* Decorative Vintage Ribbon Badge */}
      <div className="inline-block px-4 py-1 mb-3 rounded-full bg-[#697447]/10 border border-[#697447]/30">
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
        <div className="mt-3 pt-3 border-t border-[#B7A66B]/25 w-full space-y-1">
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
    </motion.div>
  );
}

export function WeddingEvents() {
  const { akad, reception, items } = weddingConfig.event;

  // Use items array if defined, otherwise fallback to akad & reception
  const eventList: EventDetail[] = items && items.length > 0
    ? items.filter((ev) => Boolean(ev.venue || ev.date || ev.startTime))
    : [akad, reception].filter((ev): ev is EventDetail => Boolean(ev && (ev.venue || ev.date || ev.startTime)));

  if (eventList.length === 0) {
    return null;
  }

  return (
    <section className="relative px-5 py-12 sm:py-16 max-w-xl mx-auto">
      <SectionHeading
        subtitle="Rangkaian Acara"
        title="Agenda Pernikahan"
        description="Merupakan kehormatan bagi kami atas kehadiran dan doa restu Anda pada hari bahagia kami."
      />

      {/* Vertical Stack Layout (Atas-Bawah) */}
      <div className="flex flex-col gap-5 sm:gap-6 mt-6 max-w-md mx-auto w-full">
        {eventList.map((event, index) => (
          <EventCard key={event.title + index} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}

