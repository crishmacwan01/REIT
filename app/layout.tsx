import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { AuthProvider } from "@/components/auth-provider";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plus Folio - REITs & EITs Trading",
  description: "Real-time trading and portfolio management for Indian REITs and EITs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <AuthProvider>
          <Header />
          <main className="flex-1 flex flex-col w-full">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
