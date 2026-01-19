import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    const word = useParams();
  return (
    <div>page</div>
  )
}

export default page