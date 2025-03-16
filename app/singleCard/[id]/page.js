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
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">{card.word}</h1>
        <p className="mt-2 text-gray-600">{card.translation}</p>
      </div>
    </div>
  );
}

export default SingleCard