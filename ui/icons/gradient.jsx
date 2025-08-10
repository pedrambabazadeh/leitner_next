import React from 'react'

const ClockIcon = ({className}) => {
  return (
    <svg className={className} width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="clockTitle">
  <title id="clockTitle">Clock</title>
  <defs>
    <linearGradient id="gradClock" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#00F0FF"/>
      <stop offset="100%" stopColor="#FF00F7"/>
    </linearGradient>
  </defs>


  <circle cx="32" cy="32" r="24" fill="none" stroke="url(#gradClock)" strokeWidth="3"/>


  <line x1="32" y1="8.5" x2="32" y2="12" stroke="url(#gradClock)" strokeWidth="2" strokeLinecap="round"/>
  <line x1="51.5" y1="32" x2="48" y2="32" stroke="url(#gradClock)" strokeWidth="2" strokeLinecap="round"/>
  <line x1="32" y1="55.5" x2="32" y2="52" stroke="url(#gradClock)" strokeWidth="2" strokeLinecap="round"/>
  <line x1="12.5" y1="32" x2="16" y2="32" stroke="url(#gradClock)" strokeWidth="2" strokeLinecap="round"/>


  <line x1="32" y1="32" x2="44" y2="22" stroke="url(#gradClock)" strokeWidth="2.8" strokeLinecap="round"/>


  <line x1="32" y1="32" x2="22" y2="24" stroke="url(#gradClock)" strokeWidth="3.6" strokeLinecap="round"/>


  <circle cx="32" cy="32" r="2.6" fill="url(#gradClock)"/>
</svg>
  )
}

const ImportIcon = ({className}) => {
  return (
    <svg className={className} width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradImport" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#00F0FF"/>
      <stop offset="100%" stopColor="#FF00F7"/>
    </linearGradient>
  </defs>

  <rect x="18" y="12" width="28" height="36" rx="2" ry="2"
        fill="none" stroke="url(#gradImport)" strokeWidth="3"/>

  <path d="M32 20 V40" stroke="url(#gradImport)" strokeWidth="3" strokeLinecap="round"/>
  <path d="M26 34 L32 40 L38 34"
        fill="none" stroke="url(#gradImport)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  )
}

const InfiniteIcon = ({className}) => {
    return(
        <svg className={className} width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradInfinity" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#00F0FF"/>
      <stop offset="100%" stopColor="#FF00F7"/>
    </linearGradient>
  </defs>
  <path d="M16 32 C16 24, 24 24, 32 32 C40 40, 48 40, 48 32 C48 24, 40 24, 32 32 C24 40, 16 40, 16 32 Z"
        fill="none" stroke="url(#gradInfinity)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    )
}

export { ClockIcon, ImportIcon, InfiniteIcon }