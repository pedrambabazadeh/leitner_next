"use client"

import React from 'react'
import { Section } from '@/utils'
import { LearningLinearChart } from '@/components/charts'

const LearningCurve = () => {
  return (
    <Section title='Learning Curve'>
        <LearningLinearChart className='max-w-screen-md mx-auto card rounded-xl'/>
    </Section>
  )
}

export default LearningCurve