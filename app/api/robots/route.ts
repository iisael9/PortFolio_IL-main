import { NextResponse } from "next/server";

export async function GET() {
  const robots = `User-agent: *
Disallow:

Sitemap: https://port-folio-il-main.vercel.app/api/sitemap
`;
  return new NextResponse(robots, {
    headers: { "Content-Type": "text/plain" },
  });
}
