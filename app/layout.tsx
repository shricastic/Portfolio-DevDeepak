import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Dev | Deepak Bhattarai",
  authors: [{ name: "Deepak Bhattarai" }],
  category: "Portfolio",
  creator: "Deepak Bhattarai",
  keywords: ["Deepak Bhattarai", "Portfolio Website", "Best Portfolio Website"],
  robots: { index: true, follow: true },
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
