import React from 'react'
import { Section } from '@/utils'
import {Card, CardGroup} from '@/components/exports/how-works'
import {ClockIcon,  ImportIcon, InfiniteIcon} from '@/ui/icons/gradient'

const HowWorks = () => {
  return (
    <Section>
        <h3 className='text-3xl mb-12 text-[var(--color-light)]' style={{fontFamily:" 'Rajdhani, sans-serif'"}}>How It Works</h3>
        <CardGroup>
            <Card>
                <ImportIcon className="w-16 h-16 mx-auto mb-4" />
                <h4 className='text-xl mb-4 text-light'>1. Import Words</h4>
                <p className='text-light'>Learn the basics of the Leitner system.</p>
            </Card>
            <Card>
                <InfiniteIcon className="w-16 h-16 mx-auto mb-4" />
                <h4 className='text-xl mb-4 text-light'>2. Practice</h4>
                <p className='text-light'>Implement the system using our API.</p>
            </Card>
            <Card>
                <ClockIcon className="w-16 h-16 mx-auto mb-4" />
                <h4 className='text-xl mb-4 text-light'>3. Track the process</h4>
                <p className='text-light'>Optimize your learning with spaced repetition.</p>
            </Card>
        </CardGroup>
    </Section>
  )
}
//use AOS to pop the cards up on scroll either here or in carggroup!
export default HowWorks