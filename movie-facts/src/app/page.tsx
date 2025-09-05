import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/auth";
import ClientLogin from "./ClientLogin";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return (
    <main style={{ minHeight: "100dvh", display: "grid", placeItems: "center", padding: 24 }}>
      <div style={{ maxWidth: 400, width: "100%", textAlign: "center" }}>
        <h1>Welcome to Movie Facts</h1>
        <p>Sign in with Google to continue.</p>
        <ClientLogin />
      </div>
    </main>
  );
}
