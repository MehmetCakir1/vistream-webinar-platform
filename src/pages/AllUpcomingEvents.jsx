import React from 'react'
import SingleEvent from '../components/SingleEvent'
import { upcomingEventsData } from '../utils/upcomingEventsData'

const AllUpcomingEvents = () => {
  return (
    <div className='min-h-[calc(100vh-220px)]'>
      <h1 className='py-5 text-center text-[#232b76] text-[40px] font-semibold'>UPCOMING EVENTS</h1>
      <main className='grid grid-cols-5 gap-y-8'>
        {upcomingEventsData.map(item=>{
          return(
            <SingleEvent item={item}/>
          )
        })}
      </main>
    </div>
  )
}

export default AllUpcomingEvents