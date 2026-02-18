"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import { Section } from '@/utils';

const page = () => {
    const {word} = useParams();
  return (
    <Section className='py-20 px-8 mx-auto'>
      <div className="card flex rounded-2xl p-6">
        <div className="slider w-[50%]"></div>
        <div className="details">
          <h2 className="text-[var(--color-primary)] text-4xl font-bold mb-[8px]">{word}</h2>
          <p className="light-text mb-[8px] text-lg mb-[12px]"> ipsum</p>
          <p className='text-[var(--color-accent)] text-xl font-bold mb-[8px]'> Example:</p>
          <p className="light-text mb-[8px] text-lg mb-[12px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p className='text-[var(--color-accent)] text-xl font-bold mb-[8px]'> usage type:</p>
          <p className="light-text mb-[8px] text-lg mb-[12px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p className='text-[var(--color-accent)] text-xl font-bold mb-[8px]'> nominal form:</p>
          <p className="light-text mb-[8px] text-lg mb-[12px]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p className='text-[var(--color-accent)] text-xl font-bold mb-[8px]'> prepositions:</p>
          <p className="light-text mb-[8px] text-lg mb-[12px]"> Lorem, ipsum, dolor </p>
          <p className='text-[var(--color-accent)] text-xl font-bold mb-[8px]'> Synonyms:</p>
          <div className="synonyms flex gap-1">
            <a href="" className='btn-primary-empty font-semibold px-2 py-1 text-sm rounded-lg hover:scale-105 transition'>word</a>
            <a href="" className='btn-primary-empty font-semibold px-2 py-1 text-sm rounded-lg hover:scale-105 transition'>word</a>
          </div>

        </div>
      </div>
    </Section>
  )
}

export default page