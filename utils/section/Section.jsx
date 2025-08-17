import React from 'react'

const Section = ({children, className='', title=false}) => {
  return (
    <section className={`py-20 px-8 ${className}`}>
    {title? <h3 className="text-3xl text-center mb-12 text-[var(--color-light)]" style={{ fontFamily: 'rajdhani , sans-serif' }}>{title}</h3>:null}
      {children}</section>
  )
}

export default Section