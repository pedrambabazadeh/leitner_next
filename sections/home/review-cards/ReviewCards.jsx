import React from 'react'
import { ReviewCard } from '@/components/exports/review-cards'
import {Section} from '@/utils'
const ReviewCards = () => {
  return (
    <Section className='max-w-screen-xl mx-auto text-center'>
      <ReviewCard />
    </Section>
  )
}

export default ReviewCards