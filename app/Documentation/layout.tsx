import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Documentation/app-sidebar";
import Footer from "@/components/Documentation/footer";
import { SiteHeader } from "@/components/Documentation/site-header";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Meta information
export const metadata: Metadata = {
  title: "LoanLytix — User Documentation",
  description:
    "Learn how to use LoanLytix to manage your loans, agents, repayments, and reports. Simple step-by-step guides to help you get started, operate efficiently, and fully control your lending business.",
  keywords: [
    "LoanLytix",
    "user guide",
    "loan management help",
    "how to manage loans",
    "agent management",
    "loan tracking guide",
    "financial management",
    "loan software Zambia",
    "LoanLytix help center",
  ],
  authors: [{ name: "LoanLytix Team", url: "https://loanlytix.com" }],
  generator: "Next.js",
  applicationName: "LoanLytix",
  metadataBase: new URL("https://loanlytix.com"),
  openGraph: {
    title: "LoanLytix — User Documentation",
    description:
      "Step-by-step LoanLytix guides for managing loans, agents, repayments, and reports. Learn how to fully use your loan management system with confidence.",
    url: "https://loanlytix.com/docs",
    siteName: "LoanLytix",
    images: [
      {
        url: "https://loanlytix.com/og-docs.png",
        width: 1200,
        height: 630,
        alt: "LoanLytix User Documentation Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@loanlytix",
    title: "LoanLytix — User Documentation",
    description:
      "Step-by-step LoanLytix guides for managing loans, agents, repayments, and reports. Learn how to fully use your loan management system with confidence.",
    images: ["https://loanlytix.com/og-docs.png"],
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

// Footer data
const data = {
  name: "Janban Enterprise Ltd",
  company_link: "https://github.com/Janban-zm",
};

// Layout
export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar variant="inset" />
          <SidebarInset>
            <div className="w-full p-2 grid grid-cols-1 gap-2">
              {/* Header */}
              <SiteHeader />

              {/* Page Content */}
              <main className="p-4 flex justify-center items-cente">
                {children}
              </main>

              {/* Toaster */}
              <Toaster />

              {/* Footer */}
              <section className="w-full flex justify-center items-stretch p-4">
                <Footer name={data.name} company_link={data.company_link} />
              </section>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
