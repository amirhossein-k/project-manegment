import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isPublicPath = path === "/register";

  const home = path === "/";
  console.log("f");

  const tokken = req.cookies.get("tokken")?.value || "";

  if (isPublicPath && tokken && !home) {
    return NextResponse.redirect(new URL("/profile", req.nextUrl));
  }
  if (!isPublicPath && !tokken) {
    return NextResponse.redirect(new URL("/register", req.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/detail", "/register"],
};
