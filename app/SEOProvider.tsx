"use client"; // Force this to be a Client Component

import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "./provider";

export default function SEOProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* ✅ SEO Configuration */}
      <DefaultSeo
        title="Isael Lazcano's Portfolio Website"
        description="A modern & minimal portfolio showcasing my JavaScript projects and skills."
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://port-folio-il-main.vercel.app/", // Update with your actual domain
          title: "Isael Lazcano's Portfolio",
          description: "A modern & minimal portfolio showcasing my JavaScript projects and skills.",
          images: [
            {
              url: "https://port-folio-il-main.vercel.app//og-image.jpg", // Update with your real OpenGraph image
              width: 1200,
              height: 630,
              alt: "Isael Lazcano's Portfolio Preview",
            },
          ],
          site_name: "Isael Lazcano's Portfolio",
        }}
        twitter={{
          handle: "@yourhandle", // Update this if you have Twitter
          site: "@yourhandle",
          cardType: "summary_large_image",
        }}
      />

      {/* ✅ ThemeProvider wrapped correctly */}
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
