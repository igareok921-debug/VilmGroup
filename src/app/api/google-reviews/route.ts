import { NextResponse } from "next/server";
import { getAllGoogleBusinessReviews } from "@/lib/googleBusinessReviews";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const payload = await getAllGoogleBusinessReviews();

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error(
      "Google Business Profile reviews could not be loaded:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return NextResponse.json(
      { error: "Google reviews are temporarily unavailable." },
      { status: 503, headers: { "Cache-Control": "no-store" } }
    );
  }
}
