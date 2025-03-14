"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FlashcardList() {
  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    async function fetchFlashcards() {
      const res = await fetch("/api/flashcards");
      const data = await res.json();
      console.log(data)
      setFlashcards(data);
    }
    fetchFlashcards();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Flashcards:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {flashcards.map((card) => (
          <Link key={card.id}
          href={`singleCard/${card.id}`}>
          <div key={card.id} className="border p-4 rounded">
            <h2 className="text-xl">{card.word}</h2>
            <p className="text-gray-600">{card.translation}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
