import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(`${request.method}: ${request.nextUrl.pathname}`);

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}

// export const config = {
//   matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
// };
