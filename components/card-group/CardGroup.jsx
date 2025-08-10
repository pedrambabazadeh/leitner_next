import React from 'react'

const CardGroup = ({children, cols=3}) => {
  return (
            <div style={{gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`}} className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {children}
            </div>
  )
}

export default CardGroup