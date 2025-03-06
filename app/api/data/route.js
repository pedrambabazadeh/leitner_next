import { cardsData } from "../data/flashcards";

export async function GET() {
  return new Response(JSON.stringify(cardsData), { status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  const newFlashcard = { id: cardsData.length + 1, ...body };
  cardsData.push(newFlashcard);
  return new Response(JSON.stringify(newFlashcard), { status: 201 });
}
