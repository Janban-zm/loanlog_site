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
  title: "LoanLytix — Smarter Loan & Agent Management for Small Lenders",
  description:
    "LoanLytix helps small lenders, microfinance businesses, and loan groups manage loans, agents, and repayments with full accountability. Stop losing money to poor tracking — take full control today.",
  keywords: [
    "loan management Zambia",
    "agent tracking",
    "loan software Kitwe",
    "financial management Zambia",
    "microfinance software",
    "loan repayment tracking",
    "LoanLytix",
    "SME loan management",
    "lending software Africa",
    "Chilimba management",
    "community loans",
    "fintech Zambia",
  ],
  authors: [{ name: "LoanLytix Team", url: "https://loanlytix.com" }],
  generator: "Next.js",
  applicationName: "LoanLytix",
  metadataBase: new URL("https://loanlytix.com"),
  openGraph: {
    title: "LoanLytix — Smarter Loan & Agent Management for Small Lenders",
    description:
      "LoanLytix helps small lenders, microfinance businesses, and loan groups manage loans, agents, and repayments with full accountability. Stop losing money to poor tracking — take full control today.",
    url: "https://loanlytix.com",
    siteName: "LoanLytix",
    images: [
      {
        url: "https://loanlytix.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "LoanLytix dashboard preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@loanlytix",
    title: "LoanLytix — Smarter Loan & Agent Management for Small Lenders",
    description:
      "LoanLytix helps small lenders, microfinance businesses, and loan groups manage loans, agents, and repayments with full accountability. Stop losing money to poor tracking — take full control today.",
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
