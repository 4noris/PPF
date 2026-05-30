'use client';

import { Anton, Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`rich-shell min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#050505] text-[#f5f5f0]' : 'bg-[#f7f6f0] text-[#111111]'
    } ${isDark ? 'rich-dark' : 'rich-light'}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
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
          content="Noris Shaikh - Broker Infrastructure Systems Engineer and Software Developer specializing in MT5 systems, bridge integrations, CRM operations, and automation tools."
        />
        <title>Noris Shaikh | Broker Infrastructure Systems Engineer</title>
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
