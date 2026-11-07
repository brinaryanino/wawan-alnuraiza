import React from "react";
import { cn } from "@/lib/utils";

interface FloralCornerProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  size?: number;
}

export function BotanicalCorner({ position, className, size = 180 }: FloralCornerProps) {
  const getRotation = () => {
    switch (position) {
      case "top-left":
        return "";
      case "top-right":
        return "scale-x-[-1]";
      case "bottom-left":
        return "scale-y-[-1]";
      case "bottom-right":
        return "scale-[-1]";
    }
  };

  return (
    <div
      className={cn(
        "pointer-events-none absolute z-10 transition-opacity duration-700 select-none",
        position === "top-left" && "top-0 left-0",
        position === "top-right" && "top-0 right-0",
        position === "bottom-left" && "bottom-0 left-0",
        position === "bottom-right" && "bottom-0 right-0",
        getRotation(),
        className
      )}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-90 drop-shadow-[0_2px_8px_rgba(105,116,71,0.08)]"
      >
        <defs>
          <linearGradient id={`goldGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4B67E" />
            <stop offset="50%" stopColor="#B7A66B" />
            <stop offset="100%" stopColor="#8C7D48" />
          </linearGradient>
          <linearGradient id={`leafGrad-${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#AEB69A" />
            <stop offset="70%" stopColor="#697447" />
            <stop offset="100%" stopColor="#4F5938" />
          </linearGradient>
          <radialGradient id={`rosePetal-${position}`} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FAF7EE" />
            <stop offset="100%" stopColor="#E8E2D0" />
          </radialGradient>
        </defs>

        {/* Delicate golden scroll flourish */}
        <path
          d="M 5 15 C 40 15, 80 35, 110 70 C 135 100, 155 140, 160 190"
          stroke={`url(#goldGrad-${position})`}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 15 5 C 15 40, 35 80, 70 110 C 100 135, 140 155, 190 160"
          stroke={`url(#goldGrad-${position})`}
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Swirl accents */}
        <circle cx="160" cy="190" r="2.5" fill="#B7A66B" />
        <circle cx="190" cy="160" r="2.5" fill="#B7A66B" />
        <circle cx="6" cy="6" r="3" fill="#B7A66B" />

        {/* Olive & Sage foliage sprigs */}
        <path
          d="M 40 40 Q 65 25 80 38 Q 65 52 40 40 Z"
          fill={`url(#leafGrad-${position})`}
          opacity="0.85"
        />
        <path
          d="M 70 70 Q 95 55 110 68 Q 95 82 70 70 Z"
          fill={`url(#leafGrad-${position})`}
          opacity="0.9"
        />
        <path
          d="M 40 40 Q 25 65 38 80 Q 52 65 40 40 Z"
          fill={`url(#leafGrad-${position})`}
          opacity="0.85"
        />
        <path
          d="M 70 70 Q 55 95 68 110 Q 82 95 70 70 Z"
          fill={`url(#leafGrad-${position})`}
          opacity="0.9"
        />

        {/* Soft Eucalyptus round leaves */}
        <circle cx="95" cy="45" r="9" fill="#AEB69A" opacity="0.65" />
        <circle cx="45" cy="95" r="9" fill="#AEB69A" opacity="0.65" />
        <circle cx="125" cy="85" r="7.5" fill="#AEB69A" opacity="0.6" />
        <circle cx="85" cy="125" r="7.5" fill="#AEB69A" opacity="0.6" />

        {/* Elegant White Rose & Hydrangea Cluster */}
        <g transform="translate(18, 18)">
          {/* Outer white hydrangea petals */}
          <circle cx="28" cy="28" r="24" fill={`url(#rosePetal-${position})`} stroke="#E2DAC4" strokeWidth="0.75" />
          <circle cx="20" cy="20" r="14" fill={`url(#rosePetal-${position})`} stroke="#DED3BA" strokeWidth="0.75" />
          <circle cx="36" cy="22" r="13" fill={`url(#rosePetal-${position})`} stroke="#DED3BA" strokeWidth="0.75" />
          <circle cx="24" cy="36" r="13" fill={`url(#rosePetal-${position})`} stroke="#DED3BA" strokeWidth="0.75" />
          <circle cx="36" cy="34" r="12" fill={`url(#rosePetal-${position})`} stroke="#DED3BA" strokeWidth="0.75" />
          {/* Center rosebud spiral */}
          <path
            d="M 28 23 C 32 23 34 26 33 29 C 32 32 28 33 25 31 C 23 29 24 26 27 26"
            stroke="#B7A66B"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}

export function HangingFloralGarland({ className }: { className?: string }) {
  return (
    <div className={cn("w-full pointer-events-none select-none overflow-hidden flex justify-center", className)}>
      <svg
        viewBox="0 0 400 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[420px] h-auto drop-shadow-[0_2px_6px_rgba(183,166,107,0.15)]"
      >
        <defs>
          <linearGradient id="garlandStem" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FAF9F4" stopOpacity="0" />
            <stop offset="25%" stopColor="#B7A66B" />
            <stop offset="50%" stopColor="#C4B67E" />
            <stop offset="75%" stopColor="#B7A66B" />
            <stop offset="100%" stopColor="#FAF9F4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Hanging drapery garland curve */}
        <path
          d="M 10 0 Q 100 35 200 35 Q 300 35 390 0"
          stroke="url(#garlandStem)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 50 0 Q 130 25 200 25 Q 270 25 350 0"
          stroke="#AEB69A"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          fill="none"
        />

        {/* Hanging leaf drops */}
        {[80, 120, 160, 200, 240, 280, 320].map((x, i) => {
          const depth = i === 3 ? 55 : i === 2 || i === 4 ? 45 : 32;
          return (
            <g key={x}>
              <line x1={x} y1="20" x2={x} y2={depth} stroke="#B7A66B" strokeWidth="0.75" />
              <circle cx={x} cy={depth} r="3" fill="#FAF7EE" stroke="#B7A66B" strokeWidth="1" />
              <path
                d={`M ${x} ${depth - 8} Q ${x + 6} ${depth - 4} ${x} ${depth} Q ${x - 6} ${depth - 4} ${x} ${depth - 8} Z`}
                fill="#697447"
                opacity="0.8"
              />
            </g>
          );
        })}

        {/* Center Floral Crest */}
        <circle cx="200" cy="35" r="10" fill="#FFFFFF" stroke="#B7A66B" strokeWidth="1.2" />
        <circle cx="200" cy="35" r="4" fill="#B7A66B" />
      </svg>
    </div>
  );
}

export function BotanicalDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3 my-4 select-none", className)}>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#B7A66B]/60" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#B7A66B]">
        <path
          d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
          fill="#B7A66B"
          opacity="0.75"
        />
        <circle cx="12" cy="10" r="1.5" fill="#FAF9F4" />
      </svg>
      <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#B7A66B]/60" />
    </div>
  );
}

