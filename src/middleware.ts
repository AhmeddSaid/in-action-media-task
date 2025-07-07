import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const PUBLIC_FILE = /\.(.*)$/;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const preferredLocale = request.headers
      .get("accept-language")
      ?.startsWith("ar")
      ? "ar"
      : "en";
    return NextResponse.redirect(
      new URL(`/${preferredLocale}/home`, request.url),
    );
  }

  // Redirect [locale]/home
  if (pathname === "/en" || pathname === "/ar") {
    return NextResponse.redirect(new URL(`${pathname}/home`, request.url));
  }

  const localePattern = /^(en|ar)\//;
  if (!localePattern.test(pathname.slice(1))) {
    return NextResponse.rewrite(new URL(`/en/404`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
