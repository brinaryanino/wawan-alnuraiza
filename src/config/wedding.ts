import { WeddingConfig } from "@/types/wedding";

export const weddingConfig: WeddingConfig = {
  meta: {
    title: "Undangan Pernikahan — Wawan & Alnuraiza",
    description: "The Wedding of Wawan Satriawan & B. Alnuraiza Haslinda",
  },

  groom: {
    name: "Wawan Satriawan",
    displayName: "Wawan",
    photo: "/images/groom.png",
  },

  bride: {
    name: "B. Alnuraiza Haslinda",
    displayName: "Alnuraiza",
    photo: "/images/bride.png",
  },

  couple: {
    displayName: "Wawan & Alnuraiza",
    coverPhoto: "/images/main-photo.png",
  },

  quranVerse: {
    surah: "QS. Ar-Rum: 21",
    arabic: "وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًۭا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةًۭ وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ",
    translation: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
  },

  event: {
    // Target date for countdown (Akad: 13 November 2026 16:00 WITA / UTC+8)
    date: "2026-11-13T16:00:00+08:00",
    dateDisplay: "13 & 14 November 2026",
    akad: {
      title: "Akad Nikah",
      date: "Jumat, 13 November 2026",
      startTime: "16.00 WITA",
      endTime: "Selesai",
      venue: "Kediaman Mempelai Wanita",
      address: "Dusun Teliah, Desa Sakra Selatan, Sakra, Lombok Timur",
      mapsUrl: "https://maps.app.goo.gl/Q149n11Tc5BaRMPy5",
    },
    items: [
      {
        title: "Akad Nikah",
        date: "Jumat, 13 November 2026",
        startTime: "16.00 WITA",
        endTime: "Selesai",
        venue: "Kediaman Mempelai Wanita",
        address: "Dusun Teliah, Desa Sakra Selatan, Sakra, Lombok Timur",
        mapsUrl: "https://maps.app.goo.gl/Q149n11Tc5BaRMPy5",
      },
      {
        title: "Nyongkolan",
        date: "Sabtu, 14 November 2026",
        startTime: "16.00 WITA",
        endTime: "Selesai",
        venue: "Kediaman Mempelai Wanita",
        address: "Dusun Teliah, Desa Sakra Selatan, Sakra, Lombok Timur",
        mapsUrl: "https://maps.app.goo.gl/Q149n11Tc5BaRMPy5",
      },
    ],
  },

  location: {
    venueName: "Kediaman Mempelai Wanita",
    address: "Dusun Teliah, Desa Sakra Selatan, Sakra, Lombok Timur",
    mapsUrl: "https://maps.app.goo.gl/Q149n11Tc5BaRMPy5",
    embedMapUrl: "https://www.google.com/maps?q=-8.675625,116.480069&hl=id&z=15&output=embed",
  },

  gift: {
    enabled: true,
    note: "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan kasih, Anda dapat memberikan tanda kasih melalui:",
    accounts: [
      {
        bankName: "Bank Mandiri",
        accountHolder: "B ALNURAIZA HASLINDA",
        accountNumber: "1610010942543",
      },
    ],
  },

  rsvp: {
    enabled: true,
    // Provide Google Apps Script Web App URL or API endpoint here
    endpoint: "https://script.google.com/macros/s/AKfycbyFnQ_sPpTzbEzQNvVGFmS1SMiLYF6C7SHrmM3pincEUESLoobWP5IYUGm3e_HyyNHE/exec",
  },

  music: {
    enabled: true,
    // Local romantic royal classical wedding soundtrack
    src: "/audio/wedding-song2.mp3",
    title: "Masa Ini, Nanti, dan Masa Indah Lainnya - Nuca",
  },
};

