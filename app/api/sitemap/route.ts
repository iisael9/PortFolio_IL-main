import { NextResponse } from "next/server";

const BASE_URL = "https://port-folio-il-main.vercel.app"; // ✅ Replace with your domain

export async function GET() {
  try {
    const pages = [
      { path: "/", lastmod: "2023-10-01" },
      { path: "/moreAboutMe", lastmod: "2023-10-01" },
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map(
            (page) => `
            <url>
              <loc>${BASE_URL}${page.path}</loc>
              <lastmod>${page.lastmod}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${page.path === "/" ? "1.0" : "0.8"}</priority>
            </url>
          `
          )
          .join("")}
      </urlset>`;

    return new NextResponse(sitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (error) {
    console.error("Sitemap Generation Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}