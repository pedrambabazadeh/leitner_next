import React from 'react'

const Card = ({children, className}) => {
  return (
    <div className={`card p-6 rounded-2xl ${className}`}>{children}</div>
  )
}

export default Card