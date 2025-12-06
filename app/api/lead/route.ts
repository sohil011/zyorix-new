import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const cloud = String(form.get("cloud") || "");
  const consent = form.get("consent") ? "yes" : "no";

  if (!name || !email || consent !== "yes") {
    return NextResponse.json({ ok: false, error: "Invalid submission" }, { status: 400 });
  }

  const payload = { name, email, cloud, consent, ts: new Date().toISOString() };

  console.log("Lead submission:", payload);

  return NextResponse.redirect(new URL("/success", req.url), { status: 303 });
}
