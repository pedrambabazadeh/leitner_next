import React from 'react'
import { FaSearch } from 'react-icons/fa'

const TopBar = () => {
  return (
    <div className='fixed flex h-16 top-0 right-0 z-10 w-112/120 bg-[var(--color-surface)] shadow-md px-6 items-center justify-between'>
        <div className='nav-start flex w-12/12  items-center gap-6'>
          <div>
            <a href='/'>
                <img src='/img/logo.svg' className='max-w-[200px]' alt='logo'/>
            </a>
          </div>
          <div className='relative flex-1'>
            <div className="max-w-md relative">
               <input
                id="global-search"
                area-label="Search" 
                type="text" 
                placeholder="Search..." 
                className="bg-[rgba(255,255,255,0.02)] color-[var(--color-text)] px-3 py-2 w-full border border-[var(--color-border)] rounded-lg text-sm placeholder-[var(--muted-text)] focus:outline-none focus:ring-1 focus:ring-[var(--color-secondary)]" />
                <button className='absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 rounded text-sm text-[var(--muted-text)]'>
                  <FaSearch />
                </button>
            </div>
          </div>
          <div>
            <button className="px-3 py-2 rounded-md text-sm btn-back-gradient-empty">
              <span>
                AI Suggestion
              </span>
            </button>
          </div>
        </div>
        {/* <div className='nav-end'></div> */}
    </div>
  )
}

export default TopBar