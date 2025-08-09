import React from 'react'
import { Section } from '@/utils'
import {Card, CardGroup} from '@/components/exports/how-works'

const HowWorks = () => {
  return (
    <Section>
        <h3 className='text-3xl mb-12 text-[var(--color-light)]' style={{fontFamily:" 'Rajdhani, sans-serif'"}}>How It Works</h3>
        <CardGroup>
            <Card>
                <h4 className='text-xl mb-4'>Step 1</h4>
                <p>Learn the basics of the Leitner system.</p>
            </Card>
            <Card>
                <h4 className='text-xl mb-4'>Step 2</h4>
                <p>Implement the system using our API.</p>
            </Card>
            <Card>
                <h4 className='text-xl mb-4'>Step 3</h4>
                <p>Optimize your learning with spaced repetition.</p>
            </Card>
        </CardGroup>
    </Section>
  )
}
//use AOS to pop the cards up on scroll either here or in carggroup!
export default HowWorks