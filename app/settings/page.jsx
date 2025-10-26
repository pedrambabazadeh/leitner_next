"use client"

import React, {useEffect, useState} from 'react'
import {Section} from '@/utils'
import { logOutCall } from '@/services/auth';
import { CardGroup, Card} from '@/components';
import {sampleProfilePhoto} from '@/config/frontend';
import { EditButton } from '@/ui/elements/EditButton';
import { FaSignOutAlt } from 'react-icons/fa';


const Setting = () => {

  const [msg, setMsg] = useState('initial');

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
                    <input className="form-radio text-[var(--color-primary)]" type="radio" name="theme" value="dark" defaultChecked />
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
                <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">
                  <span>Profile</span>
                  <EditButton />
                </h2>
                <div className="flex items-center gap-6 mb-4">
                  <img className="w-20 h-20 rounded-full border border-[var(--color-border)]" src={sampleProfilePhoto} alt="Profile Picture" />
                  <div>
                    <button className="btn-primary px-2 py-1 rounded-md"> Change Photo</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" id="name_input" value="John " disabled className="px-3 py-2 border border-[var(--color-border)] rounded bg-[var(--color-disabled)]" />
                  <input type="text" id="last_name_input" value="Doe" disabled className="px-3 py-2 border border-[var(--color-border)] rounded bg-[var(--color-disabled)]" />
                </div>
                <div id="saveBtn" className="mt-4 hidden">
                  <button className="btn-primary px-4 py-2 rounded-md"> Save Changes</button>
                </div>
              </Card>
             </div>
             <div className="mb-8">
              <Card>
                <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">
                  <span>Preferences</span>
                  <EditButton />
                </h2>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-2">
                    <input className="form-checkbox text-[var(--color-primary)]" type="checkbox" name="email_notifications" defaultChecked />
                    <span>Email Notifications</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input className="form-checkbox text-[var(--color-primary)]" type="checkbox" name="email_notifications" />
                    <span>Enable AI suggestions</span>
                  </label>
                </div>
              </Card>
             </div>
            <div className="mb-8">
              <Card>
                <h2 className="text-lg font-semibold mb-4">Account</h2>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={handleLogout} className="px-4 py-2 rounded-md font-bold text-black flex items-center gap-2 btn-back-gradient">
                    <FaSignOutAlt/>
                    Log Out
                  </button>
                  <button className="px-4 py-2 rounded-md font-bold text-black flex items-center gap-2 btn-danger-empty">
                    Delete Account
                  </button>
                </div>
              </Card>
            </div>
         </Section>
    </>
  )
}

export default Setting