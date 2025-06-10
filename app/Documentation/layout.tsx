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
  title: "Loanlytix — Documentation",
  description:
    "Welcome to the Loanlytix documentation. Learn how to get started, integrate features, and manage loans effectively with our intuitive, developer-friendly platform. From onboarding to advanced configurations — everything you need is right here.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
