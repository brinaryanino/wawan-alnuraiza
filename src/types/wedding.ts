export interface BankAccount {
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  qrCodeUrl?: string;
  logoUrl?: string;
}

export interface EventDetail {
  title: string;
  date: string | null; // e.g. "Minggu, 20 Oktober 2026" or null
  startTime: string; // e.g. "08:00"
  endTime: string; // e.g. "10:00" or "Selesai"
  venue: string;
  address: string;
  mapsUrl: string;
}

export interface WeddingConfig {
  meta: {
    title: string;
    description: string;
  };
  groom: {
    name: string;
    displayName: string;
    photo: string;
    instagram?: string;
  };
  bride: {
    name: string;
    displayName: string;
    photo: string;
    instagram?: string;
  };
  couple: {
    displayName: string;
    coverPhoto: string;
  };
  quranVerse: {
    surah: string;
    arabic: string;
    translation: string;
  };
  event: {
    date: string | null; // ISO string e.g. "2026-11-20T08:00:00+07:00" or null
    dateDisplay: string | null; // e.g. "20 November 2026"
    akad: EventDetail;
    reception: EventDetail;
  };
  location: {
    venueName: string;
    address: string;
    mapsUrl: string;
    embedMapUrl?: string;
  };
  gift: {
    enabled: boolean;
    note?: string;
    accounts: BankAccount[];
  };
  rsvp: {
    enabled: boolean;
    endpoint?: string;
  };
  music: {
    enabled: boolean;
    src: string;
    title?: string;
  };
}

