import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Documentation/app-sidebar";
import Footer from "@/components/Documentation/footer";

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
  title: "Loan Log — Documentation",
  description:
    "Loan Log helps you onboard quickly and manage all your loans in one place. Say goodbye to missed payments and confusion — your financial clarity starts now.",
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
          <AppSidebar />
          <SidebarInset>
            <div className="w-full p-2 grid grid-cols-1 gap-2">
              {/* Header */}
              <header className="flex flex-row items-center gap-3 w-full p-4 ">
                <SidebarTrigger />
              </header>

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
