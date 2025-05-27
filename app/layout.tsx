import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavLinks from "@/components/common/nav-bar";
import Footer from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meet Loan Log — Smarter Loan Tracking at Your Fingertips",
  description:
    "Loan Log helps you onboard quickly and manage all your loans in one place. Say goodbye to missed payments and confusion — your financial clarity starts now.",
};

const linksData = [
  { label: "Home", href: "/" },
  { label: "Contacts", href: "/Contacts" },
  //{ label: "Documentation", href: "/Documentation" },
  { label: "Pricing", href: "/#Prices" },
  { label: "FAQs", href: "/#Faq" },
];

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
        <NavLinks links={linksData} logoSrc="/logo.svg" />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
