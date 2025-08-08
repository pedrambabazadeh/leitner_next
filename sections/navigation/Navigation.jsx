import React from 'react'
import { FaHome, FaUser, FaBook, FaCog } from 'react-icons/fa'

const Navigation = () => {
  return (
    <nav className='flex justify-center h-[100vh]'>
        <div className="flex w-full flex-wrap h-[60%] flex-col justify-center gap-5 items-center">
            <div className="nav-icon w-12/12 text-[var(--light-text)] flex justify-center items-center text-xl">
                <FaHome />
            </div>
            <div className="nav-icon w-12/12 text-[var(--light-text)] flex justify-center items-center text-xl">
                <FaUser />
            </div>
            <div className="nav-icon w-12/12 text-[var(--light-text)] flex justify-center items-center text-xl">
                <FaBook />
            </div>
            <div className="nav-icon w-12/12 text-[var(--light-text)] flex justify-center items-center text-xl">
                <FaCog />
            </div>
        </div>
    </nav>
  )
}

export default Navigation