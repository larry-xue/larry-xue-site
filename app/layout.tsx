import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Navbar from '@/components/layout/navbar';
import Footer from "@/components/layout/footer";
import StarAnimation from "@/components/star-animation";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import CoverLetter from "@/components/cover-letter";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Larry Xue | Frontend Developer | JavaScript Enthusiast",
  description: "Hi there, I'm Larry Xue, a web developer. Welcome to my corner of the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <Navbar />
            <main className="flex flex-col items-center md:p-24 px-2 py-24 max-w-[1000px] my-0 mx-auto light-green" style={{ minHeight: "calc(100vh - 6rem)" }}>
              <CoverLetter />
              {children}
            </main>
            <Footer />

            <StarAnimation />
            <Analytics />
            <SpeedInsights />
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
