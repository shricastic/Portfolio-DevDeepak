import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Deepak Bhattarai", template: "%s | Deepak Bhattarai" },
  description:
    "Fullstack Web developer who builds website that are more than just functional.Proficient in React, Next.js, Prisma, Python, and adept at integrating ChatGPT and various other web and AI frameworks to create innovative and dynamic online experiences.",
  authors: [{ name: "Deepak Bhattarai" }],
  category: "Portfolio",
  creator: "Deepak Bhattarai",
  keywords: ["Deepak Bhattarai", "Portfolio Website", "Best Portfolio Website"],
  robots: { index: true, follow: true },
  openGraph: { images: "/deepak.jpg" },
  twitter: { images: "/deepak.jpg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
