import {Card, CardGroup} from '@/components/exports/features'
import { FileIcon, SemiCircleIcon, UserIcon, WindowsIcon } from '@/ui/icons/fontIcon'
import { Section } from '@/utils'
import React from 'react'

const Features = () => {
  return (
    <Section className='bg-[var(--color-background-second)]' title='Features'>
        <CardGroup cols={4}>
            <Card>
                <SemiCircleIcon className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" />
                <h4 className='text-xl mb-4 text-light'>AI Sentence Generator</h4>
                <p className='text-light'>Generate example sentences instantly.</p>
            </Card>
            <Card>
                <WindowsIcon className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" />
                <h4 className='text-xl mb-4 text-light'>Leitner System</h4>
                <p className='text-light'>Adaptive spaced repetition.</p>
            </Card>
            <Card>
                <FileIcon className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" />
                <h4 className='text-xl mb-4 text-light'>Excel Import</h4>
                <p className='text-light'>Bulk upload vocabulary lists.</p>
            </Card>
            <Card>
                <UserIcon className="w-16 h-16 mx-auto mb-4 text-[var(--color-primary)]" />
                <h4 className='text-xl mb-4 text-light'>Personal Dictionary</h4>
                <p className='text-light'>Save favorites & custom lists.</p>
            </Card>
        </CardGroup>
    </Section>
  )
}

export default Features