import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CandidClips by BombAI — AI-Powered UGC Video Ads",
  description:
    "Photo in. Ads out. Generate scroll-stopping UGC video ads in 15 minutes for $29. No creators needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
