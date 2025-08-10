import React from 'react'


const WindowsIcon = ({className}) =>
{
    return(
<svg className={`w-12 h-12 mx-auto mb-4 ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
</svg>
    )

}
const UserIcon = ({className}) =>
{
    return(
<svg className={`w-12 h-12 mx-auto mb-4 ${className}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><circle cx="12" cy="8" r="4"></circle><path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6"></path></svg>
    )
}

const FileIcon = ({className}) =>
{
    return(
      <svg className={`w-12 h-12 mx-auto mb-4 ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6"></path></svg>
    )
}

const SemiCircleIcon = ({className}) =>
{
    return(
     <svg className={`w-12 h-12 mx-auto mb-4 ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></path>
      </svg>)
}

export {WindowsIcon, UserIcon, FileIcon, SemiCircleIcon}