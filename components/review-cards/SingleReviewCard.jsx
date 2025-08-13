import React from 'react'

const SingleReviewCard = () => {
  return (
    <div className='card p-6 rounded-2xl flex flex-col justify-between w-4/12 mx-auto'>
      <div className='mb-2'>
        <h4 className="text-4xl mb-2 text-[var(--color-primary)]">Title</h4>
        <p className="text-base text-[#ddd]">Translation</p>
      </div>
      <div className="w-full">
        <div className="flex items-center justify-center w-full gap-3 mb-3">
          <button className="px-3 py-2 text-sm rounded-lg btn-primary w-5/12"> remember</button>
          <button className="px-3 py-2 text-sm rounded-lg btn-accent w-5/12"> forget</button>
        </div>
        <div className="flex items-center justify-center w-full mb-3" area-enabled="false">
          <button className="px-3 py-2 text-sm rounded-lg w-10/12 font-semibold btn-back-gradient"> read more</button>
        </div>
        <div className="flex items-center justify-center w-full ">
          <button className="px-3 py-2 text-sm rounded-lg w-10/12 font-semibold btn-text-gradient"> <span> open page</span></button>
        </div>
      </div>
    </div>
  )
}

export default SingleReviewCard