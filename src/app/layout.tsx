import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NeNe&apos;s Daycare Navasota | Trusted Childcare Since 2009",
  description: "Professional daycare in Navasota, Texas serving children 8 weeks to 12 years. 12-hour daily care, all meals included, government assistance accepted. Schedule a tour today!",
  keywords: "Navasota daycare, childcare, Texas daycare, government assistance, CCAP, Head Start, infant care, toddler care, pre-k",
  openGraph: {
    title: "NeNe&apos;s Daycare Navasota | Trusted Childcare Since 2009",
    description: "Professional daycare in Navasota, Texas serving children 8 weeks to 12 years. 12-hour daily care, all meals included.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <Schema />
      </head>
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
