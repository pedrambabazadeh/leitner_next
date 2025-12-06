import { frontendURL } from "@/config/frontend";
export async function apiFetch(path, opts = {}) {
  const base = process.env.NEXT_PUBLIC_BFF_BASE || ""; // usually ""
  const res = await fetch(base + path, {
    credentials: "include",
    ...opts,
    headers: {
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
  });

  const text = await res.text();
  try {
    const json = text ? JSON.parse(text) : null;
    if (!res.ok) {
      const err = new Error(json?.message || res.statusText);
      err.status = res.status;
      err.body = json;
      throw err;
    }
    return json;
  } catch (e) {
    if (!res.ok) throw Object.assign(new Error(text || res.statusText), { status: res.status });
    return text;
  }
}
