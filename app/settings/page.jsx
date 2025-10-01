"use client"

import React, {useEffect, useState} from 'react'
import { logOutCall } from '@/services/auth';


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
      <div className='text-[red] mt-20' onClick={handleLogout}>
        Log Out
      </div>
      {msg ? <div>{msg}</div> : null}
    </>
  )
}

export default Setting