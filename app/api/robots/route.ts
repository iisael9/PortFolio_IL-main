import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `User-agent: *
Disallow:

Sitemap: https://port-folio-il-main.vercel.app/api/sitemap
`;

  return new NextResponse(robotsTxt, {
    headers: { "Content-Type": "text/plain" },
  });
}
