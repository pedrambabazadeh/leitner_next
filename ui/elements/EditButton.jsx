import React from 'react'
import { FaPen } from 'react-icons/fa';

const EditButton = () => {
  return (
        <button id="edit-profile" className="text-sm text-[var(--color-accent)] flex items-center justify-between">
            <FaPen/>
            <span className="px-2">Edit</span>
        </button>
  )
}

export { EditButton }