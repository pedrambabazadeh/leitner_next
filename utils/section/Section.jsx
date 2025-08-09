import React from 'react'

const Section = ({children, className=''}) => {
  return (
    <section className={`py-20 px-8 ${className}`}>{children}</section>
  )
}

export default Section