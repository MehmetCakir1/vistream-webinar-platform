import React from 'react'
import {useNavigate} from "react-router-dom"

const SingleSpeaker = ({item}) => {
  const navigate=useNavigate()
    const {id,name,desc,img}=item;

    const goToBioPage=()=>{
      navigate(`/speakers/${id}`)
    }

  return (
    <div className='flex flex-col justify-center items-center'>
        <img src={img} alt={name} className="object-cover"/>
        <h2 className='py-1 font-bold text-[#232b76]'>{name}</h2>
        <p className='text-center py-2'>{desc}</p>
        <div className='h-[3rem] flex items-center justify-center'>
          <button className='bg-[#232b76] text-white py-1 px-3 rounded-2xl hover:bg-white hover:text-[#232b76] hover:border border-[#232b76]'
          onClick={goToBioPage}
          >See Bio</button>
        </div>
        
    </div>
  )
}

export default SingleSpeaker