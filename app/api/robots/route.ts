import { NextResponse } from "next/server";

export async function GET() {
  try {
    const robots = `User-agent: *
Disallow:

Sitemap: https://port-folio-il-main.vercel.app/api/sitemap
`;
    return new NextResponse(robots, {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("Robots.txt Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
