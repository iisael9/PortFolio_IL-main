import { NextResponse } from "next/server";

const BASE_URL = "https://port-folio-il-main.vercel.app"; // Your domain

export async function GET() {
  const pages = ["/", "/moreAboutMe"]; // Add all relevant pages

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (page) => `
          <url>
            <loc>${BASE_URL}${page}</loc>
            <changefreq>monthly</changefreq>
            <priority>${page === "/" ? "1.0" : "0.8"}</priority>
          </url>
        `
        )
        .join("")}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
