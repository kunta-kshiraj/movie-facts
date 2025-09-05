import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Header from "@/components/Header";
import FavoriteMovieForm from "@/components/FavoriteMovieForm";


export default async function Onboarding() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect("/");

  const existing = await prisma.favoriteMovie.findFirst({
    where: { user: { email: session.user.email } },
  });

  if (existing) redirect("/dashboard");

  return (
    <>
      <Header showLogout />
      <main style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
        <h2>Welcome!</h2>
        <p>Before we start, tell us your favorite movie.</p>
        <FavoriteMovieForm />
      </main>
    </>
  );
}
