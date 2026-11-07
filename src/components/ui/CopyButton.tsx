"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
  className?: string;
}

export function CopyButton({ textToCopy, label = "Salin Nomor", className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 border",
        copied
          ? "bg-[#697447] text-white border-[#697447] shadow-sm"
          : "bg-[#FAF9F4] text-[#4F5938] border-[#B7A66B]/50 hover:bg-[#F4F2E9] hover:border-[#B7A66B] active:scale-95",
        className
      )}
      aria-label={label}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          <span>Tersalin!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

