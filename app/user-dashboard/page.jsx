//user dashboard

import React from 'react'
import {Section} from '/utils'
import { CardGroup, Card} from '/components';

const UserDashboard = () => {
  return (
    <Section title="User Dashboard" className="min-h-screen">
        <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md-6">
                <div>
                    <h2 className="text-3xl font-semibold" style={{fontFamily:" 'rajdhani', sans-serif"}}>
                        Dashboard
                    </h2>
                    <p className="muted-text text-sm">
                            Welcome back! here's your progress at a glance
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-xl">
                        Start Practice
                    </button>
                    <button className="px-4 py-2 rounded-xl">
                        Import Excel
                    </button>
                </div>
            </div>
        </div>
        <CardGroup cols={3}>
            <Card>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-sm muted-text">Test</h3>
                        <div className='text-3xl font-bold text-[var(--color-primary)]'>85%</div>
                    </div>
                    <div className="text-sm muted-text">📈 +12% this week</div>
                </div>
            </Card>
        </CardGroup>
    </Section>
  )
}

export default UserDashboard