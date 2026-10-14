import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House Society — You're going to love this one Exeter...",
  description:
    "HAUS HAUS HAUS HAUS HAUS HAUS HAUS... Want some proper music Exeter... September 2027....",
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