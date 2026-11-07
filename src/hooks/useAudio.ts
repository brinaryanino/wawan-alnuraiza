"use client";

import { useState, useEffect, useRef } from "react";

export function useAudio(src: string, enabled: boolean = true) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!enabled || !src) return;

    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    audio.addEventListener("play", () => setIsPlaying(true));
    audio.addEventListener("pause", () => setIsPlaying(false));
    audio.addEventListener("ended", () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, [src, enabled]);

  const play = () => {
    if (!audioRef.current && enabled && src) {
      const audio = new Audio(src);
      audio.loop = true;
      audio.preload = "auto";
      audioRef.current = audio;
    }

    if (audioRef.current && enabled) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err: unknown) => {
          // Gracefully suppress expected autoplay policies until subsequent interaction
          if (err instanceof DOMException && (err.name === "NotAllowedError" || err.name === "NotSupportedError")) {
            console.info("Audio waiting for user gesture or source ready.");
          } else {
            console.warn("Audio playback notice:", err);
          }
        });
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return { isPlaying, play, pause, toggle };
}

