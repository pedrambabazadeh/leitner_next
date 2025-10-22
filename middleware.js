import { NextResponse } from "next/server";
import { backendURL } from "./config/backend";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Helper: check auth status using /me, with optional refresh fallback
  async function checkAuth() {
    // Step 1: Check /me (access token)
    let response = await fetch(`${backendURL}/me`, {
      method: 'POST',
      headers: {
        Cookie: request.headers.get('cookie') || '',
      },
    });

    // Step 2: If access token expired, try to refresh
    if (response.status === 401) {
      const refreshResponse = await fetch(`${backendURL}/refresh`, {
        method: 'POST',
        headers: {
          Cookie: request.headers.get('cookie') || '',
        },
      });

      if (refreshResponse.ok) {
        // If refresh succeeded, retry /me
        response = await fetch(`${backendURL}/me`, {
          method: 'POST',
          headers: {
            Cookie: request.headers.get('cookie') || '',
          },
        });

        // ⚠️ Important: merge Set-Cookie headers from refresh → NextResponse
        const res = NextResponse.next();
        refreshResponse.headers.forEach((value, key) => {
          if (key.toLowerCase() === 'set-cookie') {
            res.headers.append('set-cookie', value);
          }
        });
        return { ok: response.ok, res };
      }
    }

    // Step 3: Return result (either /me success or fail)
    return { ok: response.ok, res: NextResponse.next() };
  }

  //  Protected routes — require auth
  if (pathname.startsWith('/user') || pathname.startsWith('/user-dashboard')) {
    const { ok, res } = await checkAuth();
    if (!ok) {
      const loginURL = new URL('/log-in', request.url);
      return NextResponse.redirect(loginURL);
    }
    return res;
  }

  //  Public routes — redirect if already logged in
  if (pathname.startsWith('/log-in') || pathname.startsWith('/sign-up')) {
    const { ok, res } = await checkAuth();
    if (ok) {
      const dashboardURL = new URL('/user-dashboard', request.url);
      return NextResponse.redirect(dashboardURL);
    }
    return res;
  }

  // Default — continue
  return NextResponse.next(); //proceed as normal
}

export const config = {
  matcher: [
    '/user/:path*',
    '/dashboard/:path*',
    '/user-dashboard/:path*',
    '/log-in/:path*',
    '/sign-up/:path*',
  ],
};
