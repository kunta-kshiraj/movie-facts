import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie Facts",
  description: "Google login + Prisma + Gemini fun facts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto" }}>
        {children}
      </body>
    </html>
  );
}
