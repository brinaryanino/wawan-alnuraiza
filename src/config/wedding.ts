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
    // If the event date is confirmed, provide ISO format "YYYY-MM-DDTHH:mm:ss+07:00", otherwise null.
    // Setting to null hides countdown & invalid dates gracefully according to master prompt.
    date: null,
    dateDisplay: null,
    akad: {
      title: "Akad Nikah",
      date: null,
      startTime: "",
      endTime: "",
      venue: "",
      address: "",
      mapsUrl: "",
    },
    reception: {
      title: "Resepsi Pernikahan",
      date: null,
      startTime: "",
      endTime: "",
      venue: "",
      address: "",
      mapsUrl: "",
    },
  },

  location: {
    venueName: "",
    address: "",
    mapsUrl: "",
    embedMapUrl: "",
  },

  gift: {
    enabled: true,
    note: "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan kasih, Anda dapat memberikan tanda kasih melalui:",
    accounts: [
      {
        bankName: "BCA",
        accountHolder: "Wawan Satriawan",
        accountNumber: "8735281920",
      },
      {
        bankName: "Bank Mandiri",
        accountHolder: "B. Alnuraiza Haslinda",
        accountNumber: "1310018274619",
      },
    ],
  },

  rsvp: {
    enabled: true,
    // Provide Google Apps Script Web App URL or API endpoint here
    endpoint: "",
  },

  music: {
    enabled: true,
    // Local romantic royal classical wedding soundtrack
    src: "/audio/wedding-song2.mp3",
    title: "Romantic Wedding Melody",
  },
};

