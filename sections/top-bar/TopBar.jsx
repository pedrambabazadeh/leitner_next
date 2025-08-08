import React from 'react'

const TopBar = () => {
  return (
    <div>
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