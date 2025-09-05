import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const movie = searchParams.get("movie");
  if (!movie) return NextResponse.json({ error: "Missing movie" }, { status: 400 });

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Give ONE quirky, lesser-known, non-spoiler, family-friendly fun fact about the movie "${movie}".
Use 1–2 sentences. Vary wording each time.`;

    const result = await model.generateContent(prompt);
    const fact = result.response.text().trim() || "Fun fact unavailable right now—try refreshing again.";

    return NextResponse.json({ fact }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { fact: "Fun fact unavailable right now—try refreshing again." },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  }
}
