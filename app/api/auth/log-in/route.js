import { backendURL } from '@/config/backend.js';

export async function POST(request) {
  try {
    const body = await request.json();
    const destructuredBody = (({ email, password }) => ({ email, password }))(body);
    const hasScript = Object.values(destructuredBody).some(
      v => typeof v === 'string' && /<script.*?>.*?<\/script>/i.test(v)
    );
    if (hasScript) {
      return new Response(JSON.stringify({ message: 'Invalid input' }), { status: 400 });
    }

    const BackCall = await fetch(`${backendURL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(destructuredBody),
      credentials: "include"
      // // keeps cookies attached — this is server->server
    });

    const text = await BackCall.text();
    const json = text ? JSON.parse(text) : null;

    // Build response headers and forward Set-Cookie(s)
    const resHeaders = new Headers();
    // Forward each Set-Cookie header from backend
    BackCall.headers.forEach((value, key) => {
      if (key.toLowerCase() === 'set-cookie') {
        // Append every Set-Cookie header as-is
        resHeaders.append('Set-Cookie', value);
      }
    });
    // Also forward content-type and any other headers you want
    resHeaders.set('Content-Type', 'application/json');

    return new Response(JSON.stringify(json), { status: BackCall.status, headers: resHeaders });
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message || "server error" }), { status: 500 });
  }
}
