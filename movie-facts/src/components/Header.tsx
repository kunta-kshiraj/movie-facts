"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Header({ showLogout }: { showLogout?: boolean }) {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: 16, borderBottom: "1px solid #eee" }}>
      <Link href="/dashboard" style={{ textDecoration: "none", color: "inherit", fontWeight: 600 }}>
        🎬 Movie Facts
      </Link>
      {showLogout && (
        <button onClick={() => signOut({ callbackUrl: "/" })} style={{ padding: "8px 12px", borderRadius: 8 }}>
          Logout
        </button>
      )}
    </header>
  );
}
