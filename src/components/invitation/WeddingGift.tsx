"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gift, CreditCard } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CopyButton } from "@/components/ui/CopyButton";

export function WeddingGift() {
  const { gift } = weddingConfig;

  // Gracefully hide if gift is disabled or has no accounts
  if (!gift.enabled || !gift.accounts || gift.accounts.length === 0) {
    return null;
  }

  return (
    <section className="relative px-5 py-12 sm:py-16 max-w-xl mx-auto">
      <SectionHeading
        subtitle="Tanda Kasih"
        title="Wedding Gift"
        description="Bagi keluarga dan sahabat yang ingin memberikan tanda kasih, dapat melalui informasi berikut:"
      />

      <div className="flex flex-col gap-5 sm:gap-6 mt-6">
        {gift.accounts.map((account, index) => (
          <motion.div
            key={account.accountNumber}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative bg-[#FAF9F4] p-6 rounded-2xl border border-[#B7A66B]/40 shadow-[0_4px_18px_rgba(183,166,107,0.12)] text-center flex flex-col items-center"
          >
            {/* Top Bank Badge */}
            <div className="flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#F4F2E9] border border-[#B7A66B]/30">
              <CreditCard className="w-4 h-4 text-[#697447]" />
              <span className="text-xs font-semibold text-[#4F5938] tracking-wider uppercase">
                {account.bankName}
              </span>
            </div>

            {/* Account Number */}
            <p className="font-[family-name:var(--font-cormorant)] text-2xl sm:text-3xl font-semibold tracking-wider text-[#4F5938] my-1">
              {account.accountNumber}
            </p>

            {/* Account Holder */}
            <p className="text-xs sm:text-sm text-[#898775] font-light mb-4">
              a.n. <span className="font-medium text-[#555345]">{account.accountHolder}</span>
            </p>

            {/* Copy Button */}
            <CopyButton textToCopy={account.accountNumber} label="Salin Nomor Rekening" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

