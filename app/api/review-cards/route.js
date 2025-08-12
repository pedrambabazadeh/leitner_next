import { reviewCards } from "./reviewCards";

export async function GET() {
    return new Response(JSON.stringify(reviewCards), {
        headers: { "Content-Type": "application/json" },
    });
}
