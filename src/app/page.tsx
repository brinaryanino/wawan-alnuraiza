"use client";

import React, { useState, useEffect } from "react";
import { weddingConfig } from "@/config/wedding";
import { useAudio } from "@/hooks/useAudio";
import { OpeningCover } from "@/components/invitation/OpeningCover";
import { Introduction } from "@/components/invitation/Introduction";
import { QuranVerse } from "@/components/invitation/QuranVerse";
import { CoupleProfiles } from "@/components/invitation/CoupleProfiles";
import { Countdown } from "@/components/invitation/Countdown";
import { WeddingEvents } from "@/components/invitation/WeddingEvents";
import { Location } from "@/components/invitation/Location";
import { WeddingGift } from "@/components/invitation/WeddingGift";
import { RSVP } from "@/components/invitation/RSVP";
import { Closing } from "@/components/invitation/Closing";
import { MusicControl } from "@/components/ui/MusicControl";
import { BotanicalCorner, HangingFloralGarland } from "@/components/ui/FloralDecoration";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState<string>("");

  const { isPlaying, play, toggle } = useAudio(
    weddingConfig.music.src,
    weddingConfig.music.enabled
  );

  // Extract `to` query parameter for personalized guest greeting (e.g. ?to=Bapak+Fajar)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const to = params.get("to") || params.get("u") || params.get("guest") || params.get("kepada");
      if (to) {
        // Replace underscores with spaces if any, and clean whitespace
        const formatted = decodeURIComponent(to).replace(/_/g, " ").trim();
        if (formatted) {
          setGuestName(formatted);
        }
      }
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Play music only after explicit user interaction
    if (weddingConfig.music.enabled) {
      play();
    }
    // Scroll top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start bg-[#FAF9F4] paper-texture overflow-x-hidden selection:bg-[#B7A66B]/30">
      {/* Opening Fullscreen Cover */}
      <OpeningCover
        isOpen={isOpen}
        onOpen={handleOpenInvitation}
        guestName={guestName}
      />

      {/* Main Invitation Content Container - Mobile-first editorial canvas */}
      <div className="relative w-full max-w-[480px] min-h-screen bg-[#FAF9F4] shadow-[0_0_50px_rgba(105,116,71,0.06)] border-x border-[#B7A66B]/20 flex flex-col pb-16">
        {/* Top Decorative Garland and Corners */}
        <div className="relative w-full overflow-hidden select-none">
          <BotanicalCorner position="top-left" size={140} />
          <BotanicalCorner position="top-right" size={140} />
          <HangingFloralGarland className="pt-2" />
        </div>

        {/* Narrative Sections */}
        <Introduction />
        <QuranVerse />
        <CoupleProfiles />
        <Countdown />
        <WeddingEvents />
        <Location />
        <WeddingGift />
        <RSVP initialGuestName={guestName} />
        <Closing />

        {/* Floating Music Control */}
        {isOpen && weddingConfig.music.enabled && (
          <MusicControl
            isPlaying={isPlaying}
            onToggle={toggle}
            title={weddingConfig.music.title}
          />
        )}
      </div>
    </main>
  );
}
