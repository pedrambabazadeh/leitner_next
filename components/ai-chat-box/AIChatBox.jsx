import React from 'react'

const AIChatBox = () => {
  return (
    <div className="card max-w-screen mx-auto p-6 rounded-2xl flex flex-col items-center gap-6 ">
        <textarea id="ai prompt" placeholder='Ask AI, e.g. is this sentence correct?'
         className="w-full p-4 rounded-xl text-base bg-[rgba(255,255,255,0.05)] text-[#ddd] min-h-[100px]"
         style={{ fontFamily: 'rajdhani , sans-serif', border: '1px solid rgba(255,255,255,0.1)' }}
        />
        <button className='px-6 py-3 rounded-xl font-semibold btn-back-gradient'>
          ASK AI
        </button>
        <div id="ai-output" className="w-full p-4 rounded-xl text-left text-sm bg-[rgba(255,255,255,0.05)] min-h-[60px] text-[#ccc]">
            <em>AI response will appear here...</em>
        </div>
    </div>
  )
}

export default AIChatBox