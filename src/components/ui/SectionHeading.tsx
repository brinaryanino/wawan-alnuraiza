import React from "react";
import { cn } from "@/lib/utils";
import { BotanicalDivider } from "./FloralDecoration";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
  center?: boolean;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  className,
  center = true,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-6 sm:mb-8",
        center ? "text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <span className="block text-xs uppercase tracking-[0.25em] text-[#697447] font-medium mb-1 font-[family-name:var(--font-montserrat)]">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal font-[family-name:var(--font-cormorant)] text-[#4F5938] tracking-wide leading-tight">
        {title}
      </h2>
      <BotanicalDivider className="my-2.5" />
      {description && (
        <p className="text-xs sm:text-sm text-[#898775] max-w-md mx-auto leading-relaxed font-light font-[family-name:var(--font-montserrat)]">
          {description}
        </p>
      )}
    </div>
  );
}

