'use client';

import dynamic from "next/dynamic";
import { Anton, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ScrollProgressBar } from "@/components/shared/ScrollProgressBar";

const GalaxyBackground = dynamic(
  () => import("@/components/visuals/GalaxyBackground").then((mod) => mod.GalaxyBackground),
  { ssr: false },
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-hero",
  subsets: ["latin"],
  weight: "400",
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="rich-shell rich-dark min-h-screen bg-[#050505] text-[#f5f5f0]">
      <GalaxyBackground />
      <ScrollProgressBar />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${anton.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="MetaFive - Broker infrastructure engineer building trading systems, liquidity and execution infrastructure, prop-firm operations tools, and broker-side automation."
        />
        <title>MetaFive | Broker Infrastructure Systems</title>
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
