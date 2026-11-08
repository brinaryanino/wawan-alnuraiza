import { NextResponse } from "next/server";
import { weddingConfig } from "@/config/wedding";

export async function GET() {
  try {
    const endpoint = weddingConfig.rsvp.endpoint;

    if (!endpoint) {
      return NextResponse.json({ wishes: [] });
    }

    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      cache: "no-store",
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json({ wishes: [] });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Gagal mengambil ucapan dari Google Apps Script:", error);
    return NextResponse.json({ wishes: [] });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const endpoint = weddingConfig.rsvp.endpoint;

    if (!endpoint) {
      return NextResponse.json(
        { error: "RSVP endpoint belum dikonfigurasi" },
        { status: 500 }
      );
    }

    // Server-to-server POST request ke Google Apps Script (Bypass CORS)
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(body),
      redirect: "follow",
    });

    if (!response.ok) {
      console.warn("Google Apps Script response status:", response.status);
    }

    return NextResponse.json({ success: true, message: "Data berhasil dikirim" });
  } catch (error) {
    console.error("Gagal mengirim RSVP ke Google Apps Script:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat memproses data ke server" },
      { status: 500 }
    );
  }
}

