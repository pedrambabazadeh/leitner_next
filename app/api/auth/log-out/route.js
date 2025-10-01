import { backendURL } from "@/config/backend.js";
export async function POST() {
  try {
    const BackCall = await fetch(`${backendURL}/logout`, {
      method: "POST",
      credentials: "include",
    });


    if (!BackCall.ok) {
      console.log(`Failed to log out in response not OK: ${BackCall.status}`)};
    const text = await BackCall.text();
    const json = text ? JSON.parse(text) : null;

    // Forward Set-Cookie headers
    const resHeaders = new Headers();
    BackCall.headers.forEach((value, key) => {
      if (key.toLowerCase() === "set-cookie") {
        resHeaders.append("Set-Cookie", value);
      }
      else {
        console.log(`Not forwarding header: ${key}`);
      }
    });
    resHeaders.set("Content-Type", "application/json");

    return new Response(JSON.stringify(json), {
      status: BackCall.status,
      headers: resHeaders,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Internal Server Error" + (error.message ? (": " + error.message) : "") }),
      { status: 500 }
    );
  }
}
