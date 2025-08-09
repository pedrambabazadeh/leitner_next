import React from 'react'

const CardGroup = ({children}) => {
  return (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {children}
            </div>
  )
}

export default CardGroup