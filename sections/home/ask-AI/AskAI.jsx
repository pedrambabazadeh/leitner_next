import React from 'react'
import { Section } from '@/utils'
import { AIChatBox } from '@/components/exports/ask-ai'

const AskAI = () => {
  return (
    <Section className='bg-gray-900' title='Ask AI for suggestion'>
      <AIChatBox />
    </Section>
  )
}

export default AskAI