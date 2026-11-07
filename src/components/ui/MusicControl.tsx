"use client";

import React from "react";
import { Music, Disc } from "lucide-react";
import { cn } from "@/lib/utils";

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
  title?: string;
  className?: string;
}

export function MusicControl({ isPlaying, onToggle, title, className }: MusicControlProps) {
  return (
    <div
      className={cn(
        "fixed bottom-6 right-5 z-50 flex items-center gap-2",
        className
      )}
    >
      <button
        onClick={onToggle}
        type="button"
        className={cn(
          "relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#B7A66B]/60 shadow-[0_4px_16px_rgba(105,116,71,0.2)] transition-all duration-300 backdrop-blur-md",
          isPlaying
            ? "bg-[#697447]/90 text-white hover:bg-[#4F5938]"
            : "bg-[#FAF9F4]/90 text-[#4F5938] hover:bg-[#F4F2E9]"
        )}
        aria-label={isPlaying ? "Jeda Musik Latar" : "Putar Musik Latar"}
        title={title || (isPlaying ? "Jeda Musik" : "Putar Musik")}
      >
        {isPlaying ? (
          <Disc className="w-5 h-5 animate-[spin_4s_linear_infinite]" />
        ) : (
          <Music className="w-5 h-5" />
        )}

        {/* Pulsing ring indicator when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-[#B7A66B] animate-ping opacity-30 pointer-events-none" />
        )}
      </button>
    </div>
  );
}

