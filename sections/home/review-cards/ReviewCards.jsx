import React from 'react'
import { ReviewCard } from '@/components/exports/review-cards'
import {Section} from '@/utils'

const baseApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const ReviewCards = async () => {
  const response = await fetch(`${baseApiUrl}/api/review-cards`);
  const data = await response.json();
  console.log(data)
  return (
    <Section className='max-w-screen-xl mx-auto text-center' title='Try a flashCard'>
      <ReviewCard data={data} />
    </Section>
  )
}

export default ReviewCards