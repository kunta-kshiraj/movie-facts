"use client";
import { useEffect, useState } from "react";

export default function FunFact({ movie }: { movie: string }) {
  const [fact, setFact] = useState<string>("Loading...");

  useEffect(() => {
    let active = true;
    (async () => {
      const res = await fetch(`/api/fun-fact?movie=${encodeURIComponent(movie)}`, { cache: "no-store" });
      if (!res.ok) { setFact("Could not fetch a fact right now. Try again."); return; }
      const data = await res.json();
      if (active) setFact(data.fact);
    })();
    return () => { active = false; };
  }, [movie]);

  return (
    <blockquote
      style={{
        background: "#0f172a",
        color: "#f8fafc",
        padding: 16,
        borderRadius: 8,
        border: "1px solid #1f2937",
        lineHeight: 1.6,
      }}
    >
      {fact}
    </blockquote>
  );
}
