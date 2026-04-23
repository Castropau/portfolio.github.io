import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./providers/ThemeProvider";
import { SidebarProvider } from "./components/sidebarcontext"; // 👈 ADD THIS
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modernize Dashboard",
  description: "Modern admin dashboard with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      data-theme="cupcake"
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-50 transition-colors">
        <ThemeProvider>
          <SidebarProvider> {/* 👈 THIS FIXES YOUR ERROR */}
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}