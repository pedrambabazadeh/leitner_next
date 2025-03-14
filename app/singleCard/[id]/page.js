"use client";
import React from 'react'
import { useEffect, useState } from 'react';


function SingleCard({params}) {

  const {id} = React.use(params);
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCard() {
      try {
        const res = await fetch(`/api/flashcards?id=${id}`);
        if (!res.ok) {
          throw new Error("Card not found");
        }
        const data = await res.json();
        setCard(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchCard();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!card) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{card.word}</h1>
      <p>{card.translation}</p>
    </div>
  );
}

export default SingleCard