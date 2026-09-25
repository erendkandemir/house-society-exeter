import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Society — Exeter",
  description:
    "Exeter's independent house music society. Events, pop-ups, DJs and community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}