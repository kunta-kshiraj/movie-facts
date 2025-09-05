"use client";
import { signIn } from "next-auth/react";

export default function ClientLogin() {
  return (
    <button
      aria-label="Sign in with Google"
      onClick={() => signIn("google", { callbackUrl: "/onboarding" })}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 16px",
        borderRadius: 8,
        marginTop: 12,
        fontWeight: 600,
        border: "1px solid #dadce0",
        background: "#ffffff",
        color: "#1f1f1f",
        boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
        cursor: "pointer",
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/>
        <path fill="#FF3D00" d="M6.306 14.691l6.571 4.817C14.464 16.108 18.868 13 24 13c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.197l-6.191-5.238C29.134 35.091 26.671 36 24 36c-5.202 0-9.621-3.317-11.281-7.955l-6.5 5.02C9.515 39.556 16.227 44 24 44z"/>
        <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-3.994 5.565l.003-.002 6.191 5.238C39.196 36.888 44 31.5 44 24c0-1.341-.138-2.651-.389-3.917z"/>
      </svg>
      Sign in with Google
    </button>
  );
}
