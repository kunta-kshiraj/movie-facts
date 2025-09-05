"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FavoriteMovieForm() {
  const [title, setTitle] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    setSubmitting(true);
    const res = await fetch("/api/favorite-movie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setSubmitting(false);
    if (res.ok) router.push("/dashboard");
    else alert("Failed to save. Please try again.");
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, marginTop: 12 }}>
      <input
        placeholder="e.g., Interstellar"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "10px 12px", borderRadius: 8, border: "1px solid #ccc" }}
      />
      <button disabled={submitting} style={{ padding: "10px 12px", borderRadius: 8 }}>
        {submitting ? "Saving..." : "Save and continue"}
      </button>
    </form>
  );
}
