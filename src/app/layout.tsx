import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClientToaster } from "@/components/client-toaster";
import { StagewiseProvider } from "@/components/stagewise-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Slice - AI-Powered Call Analysis Platform",
  description: "Transform your calls into structured insights with Slice. AI-powered transcription, analysis, and action tracking for sales and customer success teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <ClientToaster />
        <StagewiseProvider />
      </body>
    </html>
  );
}
