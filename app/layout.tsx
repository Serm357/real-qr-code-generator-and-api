import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qrcode | Serm dev ",
  description: "Generate free Qrcodes of all types",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
