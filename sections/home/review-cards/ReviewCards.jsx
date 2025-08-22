import React from 'react'
import { ReviewCard } from '@/components/exports/review-cards'
import {Section} from '@/utils'

const baseApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const titleUrl = process.env.NEXT_PUBLIC_TITLE_URL || 'http://127.0.0.1:5000';

const ReviewCards = async () => {
  const response = await fetch(`${baseApiUrl}/api/review-cards`);
  const data = await response.json();
  let title = '';
  try {
    const titleSample = await fetch(`${titleUrl}/api/test`);
    title = await titleSample.json();
  } catch (error) {
    console.error('Error fetching title:', error);
  }
  return (
    <Section className='max-w-screen-xl mx-auto text-center' title='Try a flashCard'>
      <ReviewCard title={title} data={data} />
    </Section>
  )
}

export default ReviewCards