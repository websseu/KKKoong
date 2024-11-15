import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KKoong - Global Music Rankings",
  description:
    "KKoong is a website that provides real-time global music rankings. Discover the latest global music trends and popular tracks at a glance.",
  keywords: [
    "KKoong",
    "Global Music Rankings",
    "Music Charts",
    "Popular Music",
    "Latest Music Trends",
  ],
  openGraph: {
    title: "KKoong - Global Music Rankings",
    description:
      "KKoongJJang provides the latest global music rankings and popular tracks in real-time.",
    url: "https://www.KKoong.com/music",
    type: "website",
    images: [
      {
        url: "https://www.KKoong.com/image.jpg",
        width: 800,
        height: 600,
        alt: "KKoong - Global Music Rankings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KKoongJJang - Global Music Rankings",
    description:
      "Discover the latest global music rankings and popular tracks at a glance with KKoongJJang.",
    site: "@KKoongJJang",
    images: ["https://www.kkoongjjang.com/image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
