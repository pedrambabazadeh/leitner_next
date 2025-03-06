import { cardsData } from "../data/flashcards";

//get:

export async function GET(req) {
  const {searchParams} = new URL(req.url);
  const id = searchParams.get('id')
  const card = cardsData.find((anyCard) => anyCard.id === Number(id))

  if (card)
  {
    return new Response(JSON.stringify(card), { status: 200 });
  }
  return new Response(JSON.stringify({ message: "Flashcard not found" }), { status: 404 });
}


//post:

export async function POST(req) {
  const body = await req.json();
  const newFlashcard = { id: cardsData.length + 1, ...body };
  cardsData.push(newFlashcard);
  return new Response(JSON.stringify(newFlashcard), { status: 201 });
}

//put:

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const body = await req.json();
  const index = cardsData.findIndex((anyCard) => anyCard.id === Number(id))

  if (index !== -1)
  {
    cardsData[index] = {...cardsData[index], ...body}
    return new Response(JSON.stringify(cardsData[index]), {status: 200})
  }
  return new Response(JSON.stringify({ message: "Flashcard not found" }), { status: 404 });
}

//Delete:

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  const index = cardsData.findIndex((anyCard) => anyCard.id === Number(id));

  if (index !== -1)
    {
        const DeletedCard = cardsData.splice(index, 1);
        return new Response(JSON.stringify(deletedCard[0]), { status: 200 });
    }
    return new Response(JSON.stringify({ message: "Flashcard not found" }), { status: 404 });
}
