import React from 'react'

const SingleReviewCard = ({db, title, data}) => {
  return (
    <div className='card p-6 rounded-2xl flex flex-col justify-between w-4/12 mx-auto'>
      <div className='mb-2'>
        <h4 className="text-4xl mb-2 text-[var(--color-primary)]">{db? db.title :title? title.title: data[0].title}</h4>
        <p className="text-base text-[#ddd]">{title? title.translation:data[0].translation}</p>
      </div>
      <div className="w-full container">
        <div className="flex items-center justify-center w-full gap-3 mb-3">
          <button className=" hover:scale-105 transition w-[50%]  px-3 py-2 text-sm rounded-lg btn-primary w-5/12"> remember</button>
          <button className=" hover:scale-105 transition w-[50%]  px-3 py-2 text-sm rounded-lg btn-accent w-5/12"> forget</button>
        </div>
        <div className="flex items-center justify-center w-full mb-3" area-enabled="false">
          <button className=" hover:scale-105 transition w-[100%] px-3 py-2 text-sm rounded-lg w-10/12 font-semibold btn-back-gradient"> read more</button>
        </div>
        <div className="flex items-center justify-end w-full">
          <a href="#" className=" px-3 py-2 text-sm font-semibold gradient-text"> <span> open page</span></a>
        </div>
      </div>
    </div>
  )
}

export default SingleReviewCard