import React from 'react'

const TopBar = () => {
  return (
    <div className='fixed h-16 top-0 right-0 z-10 w-112/120 bg-[var(--color-surface)] shadow-md px-6'>
        <div className='nav-start'>
            <a href='/'>
                <img src='/img/logo.svg' className='max-w-[200px]' alt='logo'/>
            </a>
        </div>
        <div className='nav-end'></div>
    </div>
  )
}

export default TopBar