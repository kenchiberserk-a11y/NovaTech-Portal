import { NextResponse } from "next/server";

// Intentionally unavailable in this deployment. Use a separate local lab for credential-testing exercises.
export async function POST() {
  return NextResponse.json({ result: "LAB_DISABLED" }, { status: 404 });
}
