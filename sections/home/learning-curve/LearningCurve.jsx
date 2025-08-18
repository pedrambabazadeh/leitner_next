"use client"

import React from 'react'
import { Section } from '@/utils'
import { LinearChart } from '@/components/exports/learning-curve'

const LearningCurve = () => {
  return (
    <Section title='Learning Curve'>
        <LinearChart className='max-w-screen-md mx-auto'/>
    </Section>
  )
}

export default LearningCurve