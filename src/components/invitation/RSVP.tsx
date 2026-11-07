"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, HeartHandshake, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { weddingConfig } from "@/config/wedding";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface WishItem {
  name: string;
  attendance: "hadir" | "tidak_hadir";
  guests: string;
  message: string;
  timestamp: string;
}

export function RSVP() {
  const { rsvp } = weddingConfig;

  const [formData, setFormData] = useState({
    name: "",
    attendance: "hadir",
    guests: "1",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [wishes, setWishes] = useState<WishItem[]>([
    {
      name: "Sahabat & Keluarga",
      attendance: "hadir",
      guests: "2",
      message: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fii khoir. Selamat menempuh hidup baru Wawan & Alnuraiza!",
      timestamp: "Baru saja",
    },
  ]);

  if (!rsvp.enabled) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Silakan masukkan nama Anda.");
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Silakan tuliskan ucapan atau doa untuk kedua mempelai.");
      return;
    }

    setIsSubmitting(true);

    try {
      // If endpoint is configured, forward submission to backend (Google Apps Script / Webhook)
      if (rsvp.endpoint && rsvp.endpoint.trim() !== "") {
        const response = await fetch(rsvp.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error("Gagal mengirim ke server. Silakan coba lagi.");
        }
      }

      // Add to local state display
      const newWish: WishItem = {
        name: formData.name,
        attendance: formData.attendance as "hadir" | "tidak_hadir",
        guests: formData.guests,
        message: formData.message,
        timestamp: "Baru saja",
      };

      setWishes((prev) => [newWish, ...prev]);
      setSubmitted(true);

      // Trigger celebratory confetti effect
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ["#697447", "#B7A66B", "#FAF9F4", "#AEB69A"],
        });
      } catch {
        // safe ignore if confetti fails
      }

      // Reset form fields
      setFormData({
        name: "",
        attendance: "hadir",
        guests: "1",
        message: "",
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Terjadi kendala saat mengirim. Silakan periksa koneksi Anda.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative px-5 py-12 sm:py-16 max-w-xl mx-auto">
      <SectionHeading
        subtitle="Reservasi & Ucapan"
        title="RSVP & Doa Restu"
        description="Konfirmasikan kehadiran Anda dan kirimkan doa hangat untuk kedua mempelai."
      />

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8 }}
        className="bg-[#FAF9F4] p-6 sm:p-8 rounded-2xl border border-[#B7A66B]/40 shadow-[0_4px_24px_rgba(183,166,107,0.12)]"
      >
        {submitted && (
          <div className="mb-6 p-4 rounded-xl bg-[#697447]/10 border border-[#697447]/30 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#697447] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#4F5938]">
              <p className="font-semibold">Terima Kasih!</p>
              <p className="font-light mt-0.5">Konfirmasi dan ucapan doa Anda telah berhasil kami terima.</p>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <p className="text-xs text-red-700">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-medium text-[#4F5938] mb-1.5">
              Nama Lengkap <span className="text-[#B7A66B]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Contoh: Fajar Kurniawan"
              className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F4F2E9]/70 border border-[#B7A66B]/35 text-[#555345] placeholder-[#898775]/60 focus:outline-none focus:border-[#697447] focus:ring-1 focus:ring-[#697447] transition-all"
            />
          </div>

          {/* Attendance Selection */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-medium text-[#4F5938] mb-1.5">
              Konfirmasi Kehadiran <span className="text-[#B7A66B]">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs sm:text-sm transition-all ${
                  formData.attendance === "hadir"
                    ? "bg-[#697447] text-white border-[#697447] shadow-sm font-medium"
                    : "bg-[#F4F2E9]/70 text-[#555345] border-[#B7A66B]/35 hover:bg-[#F4F2E9]"
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="hadir"
                  checked={formData.attendance === "hadir"}
                  onChange={() => setFormData({ ...formData, attendance: "hadir" })}
                  className="sr-only"
                />
                <span>Hadir</span>
              </label>

              <label
                className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs sm:text-sm transition-all ${
                  formData.attendance === "tidak_hadir"
                    ? "bg-[#697447] text-white border-[#697447] shadow-sm font-medium"
                    : "bg-[#F4F2E9]/70 text-[#555345] border-[#B7A66B]/35 hover:bg-[#F4F2E9]"
                }`}
              >
                <input
                  type="radio"
                  name="attendance"
                  value="tidak_hadir"
                  checked={formData.attendance === "tidak_hadir"}
                  onChange={() => setFormData({ ...formData, attendance: "tidak_hadir" })}
                  className="sr-only"
                />
                <span>Tidak Dapat Hadir</span>
              </label>
            </div>
          </div>

          {/* Number of Guests (only if attending) */}
          {formData.attendance === "hadir" && (
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-[#4F5938] mb-1.5">
                Jumlah Tamu
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F4F2E9]/70 border border-[#B7A66B]/35 text-[#555345] focus:outline-none focus:border-[#697447] focus:ring-1 focus:ring-[#697447] transition-all"
              >
                <option value="1">1 Orang</option>
                <option value="2">2 Orang</option>
                <option value="3">3 Orang</option>
                <option value="4">4 Orang</option>
              </select>
            </div>
          )}

          {/* Wishes and Prayer */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-medium text-[#4F5938] mb-1.5">
              Ucapan &amp; Doa <span className="text-[#B7A66B]">*</span>
            </label>
            <textarea
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tuliskan ucapan selamat dan doa restu Anda..."
              className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F4F2E9]/70 border border-[#B7A66B]/35 text-[#555345] placeholder-[#898775]/60 focus:outline-none focus:border-[#697447] focus:ring-1 focus:ring-[#697447] transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#697447] text-white text-xs sm:text-sm tracking-wider uppercase font-medium shadow-[0_4px_16px_rgba(105,116,71,0.25)] hover:bg-[#4F5938] transition-all duration-300 active:scale-[0.98] border border-[#B7A66B]/40 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Mengirimkan...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim Konfirmasi</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Wishes List */}
        {wishes.length > 0 && (
          <div className="mt-8 pt-6 border-t border-[#B7A66B]/25">
            <div className="flex items-center gap-2 mb-4 text-[#4F5938]">
              <HeartHandshake className="w-4 h-4 text-[#697447]" />
              <h4 className="text-xs uppercase tracking-wider font-semibold">
                Ucapan Doa ({wishes.length})
              </h4>
            </div>

            <div className="max-h-64 overflow-y-auto space-y-3 pr-1 text-left">
              {wishes.map((item, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#F4F2E9]/60 border border-[#B7A66B]/20 text-xs text-[#555345]"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[#4F5938]">{item.name}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        item.attendance === "hadir"
                          ? "bg-[#697447]/15 text-[#697447]"
                          : "bg-stone-200 text-stone-600"
                      }`}
                    >
                      {item.attendance === "hadir" ? "Hadir" : "Tidak Hadir"}
                    </span>
                  </div>
                  <p className="font-light leading-relaxed text-[#555345] italic">
                    &ldquo;{item.message}&rdquo;
                  </p>
                  <span className="text-[10px] text-[#898775] mt-1.5 block">
                    {item.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

