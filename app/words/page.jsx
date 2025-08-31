import { Section } from '@/utils'
import React from 'react'

const wordsList = () => {
  return (
  <Section>
    <div className="flex items-center gap-4">
      <input className="flex-1 p-3 rounded-md bg-[var(--color-surface)] border border-[var(--color-border)] focus-secondary"
        placeholder='Search words...' type='text'/>
      <button className="btn-primary px-4 py-2 rounded-md">Search</button>
    </div>
  </Section>
  )
}

export default wordsList