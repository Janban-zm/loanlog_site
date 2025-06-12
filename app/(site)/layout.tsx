import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
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
  title: "loanlytix — Smarter Loan Tracking at Your Fingertips",
  description:
    "loanlytix helps you onboard quickly and manage all your loans in one place. Say goodbye to missed payments and confusion — your financial clarity starts now.",
  keywords: [
    "loan management",
    "loan tracking",
    "financial management",
    "loan organizer",
    "payment reminders",
    "loanlytix",
    "Zambia Loans",
    "managment system",
    "kitwe",
    "lusaka",
    "fintech",
    "software",
  ],
  authors: [{ name: "LoanLytix Team", url: "https://loanlytix.com" }],
  generator: "Next.js",
  applicationName: "loanlytix",
  metadataBase: new URL("https://loanlytix.com"),
  openGraph: {
    title: "loanlytix — Smarter Loan Tracking at Your Fingertips",
    description:
      "loanlytix helps you onboard quickly and manage all your loans in one place. Say goodbye to missed payments and confusion — your financial clarity starts now.",
    url: "https://loanlytix.com",
    siteName: "loanlytix",
    images: [
      {
        url: "https://loanlytix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "loanlytix preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@loanlytix",
    title: "loanlytix — Smarter Loan Tracking at Your Fingertips",
    description:
      "loanlytix helps you onboard quickly and manage all your loans in one place. Say goodbye to missed payments and confusion — your financial clarity starts now.",
    images: ["https://loanlytix.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const linksData = [
  { label: "Home", href: "/" },
  { label: "Contacts", href: "/Contacts" },
  { label: "Documentation", href: "/Documentation" },
  { label: "Features", href: "/#Features" },
  { label: "Pricing", href: "/#Prices" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-muted`}
      >
        <NavLinks links={linksData} logoSrc="/logo.svg" />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
