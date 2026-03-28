import { NextResponse } from "next/server";
import { appendRow } from "@/lib/googleSheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, attendance, total, message } = body;

    if (!name || !attendance || !total) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await appendRow([
      name,
      attendance,
      total,
      message || "",
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}