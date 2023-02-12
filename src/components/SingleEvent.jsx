import React from 'react'

const SingleEvent = ({item}) => {

    const {date,name,desc,accuracy}=item
    return (
    <div className='md:mx-4 rounded-xl max-w-[18rem] m-auto'>
        <h3 className='bg-[#232b76] text-white text-center py-2 rounded-tr-xl rounded-tl-xl'>{date}</h3>
        <p className='text-[#232b76] text-center pt-5 pb-10 px-3 border-b border-[#707070] h-[9rem]'>{desc}</p>
        <h1 className='text-center text-[#009FE3] py-2 text-[18px] font-semibold'>{name}</h1>
        {accuracy ? (
            <div className='py-3 flex items-center justify-center gap-3 text-[13px] font-semibold'>
                <button className='text-white bg-[#009FE3] rounded-3xl py-2 px-3 hover:bg-[#042164] hover:text-white '>REGISTER</button>
                <button className='text-white bg-[#042164] rounded-3xl py-2 px-3 hover:bg-[#009FE3] hover:text-white'>ADD TO CALENDER</button>
            </div>
        ):(
            <div className='py-3 flex items-center justify-center text-[13px] font-semibold'>
                <button className='text-[#009FE3] rounded-3xl py-2 px-3 border border-[#009FE3] hover:bg-[#042164] hover:text-white hover:border-none'>MORE DETAILS COMING SOON</button>
                </div>
        )}
    </div>
  )
}

export default SingleEvent