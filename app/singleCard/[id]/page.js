"use client";
import { notFound } from 'next/navigation';
import React from 'react'
import { useEffect, useState } from 'react';
import NotFound from './not-found';


function SingleCard({params}) {

  const {id} = React.use(params);
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCard() {
      try {
        const res = await fetch(`/api/flashcards?id=${id}`);
        if (!res.ok) {
          //notFound();
          throw new Error("card not found");
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
    return <NotFound/>;
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