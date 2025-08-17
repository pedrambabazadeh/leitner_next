import React from 'react'
import { Section } from '@/utils'
import { AIChatBox } from '@/components/exports/ask-ai'

const AskAI = () => {
  return (
    <Section className='bg-gray-900'>
      <h3 className="text-3xl text-center mb-12 text-[var(--color-light)]" style={{ fontFamily: 'rajdhani , sans-serif' }}>Ask AI for suggestion</h3>
      <AIChatBox />
    </Section>
  )
}

export default AskAI