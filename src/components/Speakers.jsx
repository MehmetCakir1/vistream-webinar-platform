import React, { useState } from 'react'
import { speakersData } from '../utils/speakerData'
import SingleSpeaker from './SingleSpeaker'

const Speakers = () => {
  const [date,setDate]=useState("Wednesday, 25 February 2021")
  const currentSpeakers=speakersData.filter(item=>item.date==date)

  return (
    <main>
      <h1 className='text-center text-[40px] pt-7 pb-2 text-[#232B76] font-semibold'>SPEAKERS</h1>
      <div className='flex justify-center items-center gap-5 py-2'>
        <button className='bg-[#232B76] text-white rounded-3xl px-5 py-2'>Wednesday, 25 February 2021</button>
        <button className='bg-white text-[#232B76] rounded-3xl px-5 py-2 border border-[#232B76]'>Wednesday, 26 February 2021</button>
      </div>
      <section className='grid grid-cols-4 items-center max-w-[1200px] m-auto gap-y-5 gap-x-3 mt-12'>
        {
          currentSpeakers.map(item=>{
            return(
              <SingleSpeaker key={item.id} item={item}/>
            )
          })
        }
      </section>
    </main>
  )
}

export default Speakers