import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OrnamentalFrameProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: "oval" | "arch" | "circle";
  priority?: boolean;
  loading?: "eager" | "lazy";
}

export function OrnamentalOvalFrame({
  src,
  alt,
  className,
  priority = false,
  loading,
}: OrnamentalFrameProps) {
  return (
    <div className={cn("relative mx-auto flex items-center justify-center p-3 sm:p-4", className)}>
      {/* Outer Antique Gold Decorative Ring */}
      <div className="absolute inset-0 rounded-[50%] border border-[#B7A66B]/50 p-2 shadow-[0_4px_24px_rgba(183,166,107,0.18)]">
        <div className="h-full w-full rounded-[50%] border border-dashed border-[#B7A66B]/40" />
      </div>

      {/* Decorative Cardinal Flourishes (Top, Bottom, Left, Right) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 bg-[#FAF9F4] flex items-center justify-center z-10">
        <div className="w-2 h-2 rotate-45 border border-[#B7A66B] bg-[#B7A66B]/30" />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-3 h-3 bg-[#FAF9F4] flex items-center justify-center z-10">
        <div className="w-2 h-2 rotate-45 border border-[#B7A66B] bg-[#B7A66B]/30" />
      </div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-3 h-3 bg-[#FAF9F4] flex items-center justify-center z-10">
        <div className="w-2 h-2 rotate-45 border border-[#B7A66B] bg-[#B7A66B]/30" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-3 h-3 bg-[#FAF9F4] flex items-center justify-center z-10">
        <div className="w-2 h-2 rotate-45 border border-[#B7A66B] bg-[#B7A66B]/30" />
      </div>

      {/* Inner Image Container with Oval Mask */}
      <div className="relative w-[220px] h-[300px] sm:w-[250px] sm:h-[340px] rounded-[50%] overflow-hidden border-2 border-[#FAF9F4] shadow-inner bg-[#EFECE3]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 240px, 280px"
          priority={priority}
          loading={loading || (priority ? "eager" : undefined)}
          className="object-cover object-center filter saturate-[0.95] contrast-[1.03] transition-transform duration-700 hover:scale-105"
        />
        {/* Soft vignette gradient */}
        <div className="absolute inset-0 pointer-events-none rounded-[50%] ring-1 ring-inset ring-[#B7A66B]/30 shadow-[inset_0_0_20px_rgba(105,116,71,0.15)]" />
      </div>
    </div>
  );
}

