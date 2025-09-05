import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { prisma } from "../../..//lib/prisma";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title } = await req.json();
  if (!title || typeof title !== "string") {
    return NextResponse.json({ error: "Invalid title" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.favoriteMovie.upsert({
    where: { userId: user.id },
    create: { userId: user.id, title: title.trim() },
    update: { title: title.trim() },
  });

  return NextResponse.json({ ok: true });
}
