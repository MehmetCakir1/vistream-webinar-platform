import React from 'react'

const SingleSpeaker = ({item}) => {
    console.log(item)
    const {id,name,desc,img}=item;

  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={img} alt={name} className="object-cover"/>
        <h2 className='py-1 font-bold text-[#232b76]'>{name}</h2>
        <p className='text-center py-2'>{desc}</p>
        <button className='bg-[#232b76] text-white py-1 px-3 rounded-2xl'>See Bio</button>
    </div>
  )
}

export default SingleSpeaker