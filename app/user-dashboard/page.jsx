//user dashboard

import React from 'react'
import {Section} from '/utils'

const UserDashboard = () => {
  return (
    <Section title="User Dashboard" className="min-h-screen">
        <div className="flex flex-col md:flex-row md:items-centermd:justify-between gap-4 md-6">
            <div>
                <h2 className="text-3xl font-semibold mb-4" style={{fontFamily:" 'rajdhani', sans-serif"}}>
                    Dshboard
                </h2>
            </div>
        </div>
    </Section>
  )
}

export default UserDashboard