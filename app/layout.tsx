import Toast from "@/components/ui/Toast";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Dev | Deepak Bhattarai",
  description: "Portfolio Website of Deepak Bhattarai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toast></Toast>
      </body>
    </html>
  );
}
