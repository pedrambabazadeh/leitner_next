//user dashboard

import React from 'react'
import {Section} from '/utils'

const UserDashboard = () => {
  return (
    <Section title="User Dashboard" className="min-h-screen">
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

    </Section>
  )
}

export default UserDashboard