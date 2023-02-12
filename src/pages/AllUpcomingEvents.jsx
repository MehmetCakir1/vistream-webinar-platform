import React from 'react'
import SingleEvent from '../components/SingleEvent'
import { upcomingEventsData } from '../utils/upcomingEventsData'

const AllUpcomingEvents = () => {
  return (
    <div className='min-h-[calc(100vh-220px)] m-auto'>
      <h1 className='py-5 text-center text-[#232b76] text-[40px] font-semibold'>UPCOMING EVENTS</h1>
      <main className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-8 justify-center'>
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