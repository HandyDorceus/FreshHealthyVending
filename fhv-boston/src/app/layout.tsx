import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fresh Healthy Vending Boston | Healthy Vending Solutions",
    template: "%s | Fresh Healthy Vending Boston",
  },
  description:
    "Fresh Healthy Vending Boston provides high-quality, healthy vending machine solutions for businesses across the Boston area. Trusted partner in employee wellness.",
  keywords: [
    "vending machines",
    "healthy vending",
    "Boston vending",
    "office vending",
    "vending services",
    "employee wellness",
  ],
  authors: [{ name: "Fresh Healthy Vending Boston" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fhvboston.com",
    siteName: "Fresh Healthy Vending Boston",
    title: "Fresh Healthy Vending Boston | Healthy Vending Solutions",
    description:
      "Fresh Healthy Vending Boston provides high-quality, healthy vending machine solutions for businesses across the Boston area.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
