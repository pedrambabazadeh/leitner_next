"use client"

import React, { useEffect } from 'react'


function Dashboard() {


    async function handleSubmit(event) {
    {
      event.preventDefault();
      const formData = new FormData(event.target);
      const word = formData.get('word')
      const translation = formData.get('translation')
      const data = {word, translation}
      const res = await fetch("/api/flashcards", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      const result = await res.json()
      console.log(result)
    }}

  return (
    <div>
      <div>
        Add a card to the cards
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input name='word' type='text' placeholder='word'/>
          <input name='translation' type='text' placeholder='meaning'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard