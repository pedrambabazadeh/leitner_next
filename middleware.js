import { NextResponse } from "next/server";
import { backendURL } from "./config/backend";

export async function middleware(request) {
  const {pathname} = request.nextUrl;
  if (pathname.startsWith('/user') || pathname.startsWith('/user-dashboard')) {
    const response = await fetch(`${backendURL}/me`, {
      method: 'GET',
      headers: {
        Cookie: request.headers.get('cookie') || '',
      }
    });
    if (!response.ok) {
      const loginURL = new URL('/log-in', request.url);
        return NextResponse.redirect(loginURL);
    }
    return NextResponse.next(); //.nextht() allows the request to proceed
  }
 
}

 export const config = { matcher: ['/user/:path*', '/dashboard/:path*'/* , '/user-dashboard/:path*'*/] }
 

 