"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {React, useEffect, useState} from 'react'
import { FaHome, FaUser, FaBook, FaCog } from 'react-icons/fa'

const Navigation = ({navItems}) => {
   // const [activeItem, setActiveItem] = useState(navItems[0].id);
   const rawPathname = usePathname();
   const path = rawPathname.split("/")[1] || ""
   const [activeItem, setActiveItem] = useState(null)
   useEffect(() => {
       setActiveItem(path)
   }, [path])

  return (
    <nav className='flex justify-center h-[100vh] bg-[var(--color-surface)] w-full'>
        <div data-active={activeItem} className="flex w-full flex-wrap h-[60%] flex-col justify-center gap-5 items-center">
            <div name="/" className="nav-icon w-12/12 text-[var(--light-text)] flex justify-center items-center text-xl">
                <Link href="/"><FaHome /></Link>
            </div>
            <div name="user-dashboard" className="nav-icon w-12/12 text-[var(--light-text)] flex justify-center items-center text-xl">
               <Link href="/user-dashboard"><FaUser /></Link>
            </div>
            <div name="words" className="nav-icon w-12/12 text-[var(--light-text)] flex justify-center items-center text-xl">
               <Link href="/words"><FaBook /></Link>
            </div>
            <div name="settings" className="nav-icon w-12/12 text-[var(--light-text)] flex justify-center items-center text-xl">
                <Link href="/settings"><FaCog /></Link>
            </div>
        </div>
    </nav>
  )
}

export default Navigation