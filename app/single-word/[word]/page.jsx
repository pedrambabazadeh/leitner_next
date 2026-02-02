"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import { Section } from '@/utils';

const page = () => {
    const {word} = useParams();
  return (
    <Section className='py-20 px-8 mx-auto'>
      <div className="card">
        <div className="slider"></div>
        <div className="details">
          <h2 className="text-[var(--primary-color)]">sample word {word}</h2>
        </div>
      </div>
    </Section>
  )
}

export default page