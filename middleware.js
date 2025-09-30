import { NextResponse } from "next/server";
import { backendURL } from "./config/backend";

export async function middleware(request) {
  const {pathname} = request.nextUrl;
  if (pathname.startsWith('/user') || pathname.startsWith('/user-dashboard') || pathname.startsWith('/log-in')) {
    const response = await fetch(`${backendURL}/me`, {
      method: 'POST',
      headers: {
        Cookie: request.headers.get('cookie') || '',
      }
    });
    /*if (request.headers.get('cookie')) {
      console.log('Cookies present in request:', request.headers.get('cookie'));
    }*/
    if (!response.ok) {
      const loginURL = new URL('/log-in', request.url);
        return NextResponse.redirect(loginURL);
    };
    return NextResponse.next(); //.nextht() allows the request to proceed
  }
 return NextResponse.next(); 
}

 export const config = { matcher: ['/user/:path*', '/dashboard/:path*' , '/user-dashboard/:path*', '/log-in/:path*'] }
 

 