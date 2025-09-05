import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import Header from "@/components/Header";
import FunFact from "@/components/FunFact";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/");

  const dbUser = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { favoriteMovie: true },
  });

  if (!dbUser?.favoriteMovie) {
    redirect("/onboarding");
  }

  const movieTitle = dbUser.favoriteMovie.title;

  return (
    <>
      <Header showLogout />
      <main style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
        <h2 style={{ marginBottom: 16 }}>Account</h2>
        <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
          {session.user.image && (
            <Image src={session.user.image} alt="avatar" width={64} height={64} style={{ borderRadius: "50%" }} />
          )}
          <div>
            <div><strong>Name:</strong> {session.user.name}</div>
            <div><strong>Email:</strong> {session.user.email}</div>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <h3>Your favorite movie</h3>
          <p style={{ fontStyle: "italic" }}>{movieTitle}</p>

          <h3 style={{ marginTop: 24 }}>Fresh Fun Fact</h3>
          <FunFact movie={movieTitle} />
          <p style={{ opacity: 0.6, marginTop: 8 }}>Tip: Refresh the page to get a new fact.</p>
        </div>
      </main>
    </>
  );
}
