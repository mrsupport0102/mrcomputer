import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  createAdminSessionToken,
  getAdminCookieOptions,
  isAdminConfigured,
  verifyAdminPassword,
} from "@/lib/auth";

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "Admin-login er ikke konfigureret endnu." },
      { status: 503 }
    );
  }

  try {
    const body = (await request.json()) as { password?: string };
    const password = body.password ?? "";

    if (!verifyAdminPassword(password)) {
      return NextResponse.json({ error: "Forkert adgangskode" }, { status: 401 });
    }

    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_COOKIE, await createAdminSessionToken(), getAdminCookieOptions());
    return response;
  } catch {
    return NextResponse.json({ error: "Kunne ikke logge ind" }, { status: 400 });
  }
}
