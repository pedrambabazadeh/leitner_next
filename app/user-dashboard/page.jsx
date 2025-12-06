//user dashboard
"use client"
import React, { useEffect } from 'react'
import {Section} from '/utils'
import {data} from './data'
import { CardGroup, Card} from '/components';
import {CategoryDoughnutChart, LearningLinearChart, SkillsRadarChart } from '/components/charts';
const UserDashboard = () => {
   const [mydata, setMydata] = React.useState({email: 'loading...'});

   useEffect(() => {
    data().then(fetchedData => {
        setMydata(fetchedData);
    });
   }, []);

  return (
    <Section className="min-h-screen">
        <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md-6">
                <div>
                    <h2 className="text-3xl font-semibold" style={{fontFamily:" 'rajdhani', sans-serif"}}>
                        Dashboard
                    </h2>
                    <p className="muted-text text-sm">
                            Welcome back {mydata.name}! here's your progress at a glance
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
        <div className="mb-8">
            <CardGroup cols={3}>
                <Card>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm muted-text">Words Learned</h3>
                            <div className='text-3xl font-bold text-[var(--color-primary)]'>85%</div>
                        </div>
                        <div className="text-sm muted-text">📈 +12% this week</div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm muted-text">Active Streak</h3>
                            <div className='text-3xl font-bold text-[var(--color-accent)]'>18 days</div>
                        </div>
                        <div className="text-sm muted-text">🔥 keep it up</div>
                    </div>
                </Card>
                <Card>
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm muted-text">Leitner Score</h3>
                            <div className='text-3xl font-bold text-[var(--color-secondary)]'>72%</div>
                        </div>
                        <div className="text-sm muted-text">Level 3</div>
                    </div>
                </Card>
            </CardGroup>
        </div>
        <div className="mb-10">
            <CardGroup cols={3}>
                <Card>
                    <h3 className="text-xl mb-3">Category Distribution</h3>
                    <CategoryDoughnutChart />
                </Card>
                <Card>
                    <h3 className="text-xl mb-3">Learning Curve</h3>
                    <LearningLinearChart />
                </Card>
                <Card>
                    <h3 className="text-xl mb-3">Skills Radar</h3>
                    <SkillsRadarChart />
                </Card>
            </CardGroup>
        </div>
        <div className="mb-12">
            <CardGroup cols={2} className="[&>*:p-6]">
                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg">
                            Recent Activities
                        </h3>
                        <a href="#" className='text-sm muted-text'>View All</a>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className='w-10 h-10 rounded-md bg-[rgba(0,240,255,0.06)] flex items-center justify-center text-[var(--color-primary)]'>
                                        V
                                    </div>
                                    <div>
                                        <div className="font-medium">
                                            Verstehen
                                        </div>
                                        <div className="text-sm muted-text">
                                            Learned on Sep 10, 2023
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm muted-text"> +3p</div>
                        </li>
                        <li className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className='w-10 h-10 rounded-md bg-[rgba(255,0,247,0.05)] flex items-center justify-center text-[var(--color-accent)]'>
                                        V
                                    </div>
                                    <div>
                                        <div className="font-medium">
                                            Auf wiedersehen
                                        </div>
                                        <div className="text-sm muted-text">
                                            AI suggested 1d ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm muted-text"> +1 suggestion</div>
                        </li>
                        <li className="flex items-start justify-between">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className='w-10 h-10 rounded-md bg-[rgba(250,190,37,0.05)] flex items-center justify-center text-[var(--color-secondary)]'>
                                        N
                                    </div>
                                    <div>
                                        <div className="font-medium">
                                            Haus
                                        </div>
                                        <div className="text-sm muted-text">
                                            Added to dictionary
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm muted-text"> __ </div>
                        </li>
                    </ul>
                </Card>
                <Card>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg">Personal Dictionary</h3>
                        <a href="#" className="text-sm muted-text">Manage</a>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <button title="pronounce" aria-label="pronounce" className="p-2 rounded-md bg-[rgba(255,255,255,0.02)]">
                                    🔊
                                </button>
                                <a href="#" className="font-medium">Haus</a>
                                <span className="ml-2 text-sm muted-text"> House</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button title="review" className="px-2 py-1 rounded text-sm btn-text-gradient">
                                    Review
                                </button>
                                {/* use feature of the nextJs Intercepting routes for preview */}
                                <button className="p-2 rounded text-sm color-[var(--color-secondary)]" title="favorite">
                                    ⭐
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <button title="pronounce" aria-label="pronounce" className="p-2 rounded-md bg-[rgba(255,255,255,0.02)]">
                                    🔊
                                </button>
                                <a href="#" className="font-medium">Verstehen</a>
                                <span className="ml-2 text-sm muted-text"> Understand</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button title="review" className="px-2 py-1 rounded text-sm btn-text-gradient">
                                    Review
                                </button>
                                {/* use feature of the nextJs Intercepting routes for preview */}
                                <button className="p-2 rounded text-sm color-[var(--color-secondary)]" title="favorite">
                                    ⭐
                                </button>
                            </div>
                        </div>
                        <div className='text-center mt-3'>
                            <button className="text-sm btn-back-gradient-empty px-3 py-2 rounded"> 
                                <span>
                                    + Add New Word
                                </span>
                            </button>
                        </div>
                    </div>
                </Card>
            </CardGroup>
        </div>
    </Section>
  )
}

export default UserDashboard