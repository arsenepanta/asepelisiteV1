import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_USER = "admin";
const ADMIN_PASS = "asepeli2024";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const auth = request.headers.get("authorization");

    if (!auth || !auth.startsWith("Basic ")) {
      return new NextResponse("Accès refusé", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Asepeli"',
        },
      });
    }

    const [user, pass] = atob(auth.split(" ")[1]).split(":");
    if (user !== ADMIN_USER || pass !== ADMIN_PASS) {
      return new NextResponse("Identifiants incorrects", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Asepeli"',
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
