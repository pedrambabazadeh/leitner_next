"use client"

import React, {useEffect, useState} from 'react'
import {Section} from '@/utils'
import { logOutCall } from '@/services/auth';
import { CardGroup, Card} from '@/components';


const Setting = () => {

  const [msg, setMsg] = useState('imitial');

    const handleLogout = async () => {
    const response = await logOutCall();
      if (response) {
      setMsg('Logged out successfully' + response.status + (response.message ? (': ' + response.message) : ''));
    } else {
        setMsg('Failed to log out' + response.status + (response.error ? (': ' + response.error) : ''));
    }
  };


  return (
    <>
         <Section className="min-h-screen">
             <div className="mb-8">
                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md-6">
                     <div>
                         <h2 className="text-3xl font-semibold" style={{fontFamily:" 'rajdhani', sans-serif"}}>
                             Settings
                         </h2>
                         <p className="muted-text text-sm">
                                 Manage your account settings and preferences
                         </p>
                     </div>
                 </div>
             </div>
             <div className="mb-8">
              <Card>
                <div className="w-full">
                  <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                </div>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input className="form-radio text-[var(--color-primary)]" type="radio" name="theme" value="dark" checked />
                    <span>Dark Mode</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input className="form-radio text-[var(--color-primary)]" type="radio" name="theme" value="light" />
                    <span>Light Mode</span>
                  </label>
                </div>
                </Card>
             </div>
             <div className="mb-8">
              <Card>
                
                </Card>
             </div>
         </Section>
    </>
  )
}

export default Setting