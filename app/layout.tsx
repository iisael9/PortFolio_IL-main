import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SEOProvider from "./SEOProvider"; // Import the Client Component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isael's Portfolio",
  description: "A modern & minimal portfolio showcasing my JavaScript projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ✅ Client Components moved inside SEOProvider */}
        <SEOProvider>{children}</SEOProvider>
      </body>
    </html>
  );
}
