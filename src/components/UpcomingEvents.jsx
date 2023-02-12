import React from 'react'
import Slider from "react-slick";
import { upcomingEventsData } from '../utils/upcomingEventsData';
import SingleEvent from './SingleEvent';



const UpcomingEvents = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    // responsive: [
    //   {
    //     breakpoint:1300,
    //     settings:{
    //     slidesToShow: 6,
    //     }
       
    //     }, 
    //   ]
  };
  return (
    <div className='mt-[8rem] slider pb-12'>
    <h1 className='text-center py-5 text-[40px] text-[#042164] font-semibold'>UPCOMING EVENTS</h1>
    <Slider {...settings} className="h-[300px] w-full ">
    {upcomingEventsData?.map((item) => {
  return (
    <ul>
      <li> <SingleEvent item={item} key={item.id}/></li>
    </ul>
    );
  })}
  </Slider>
    </div>
    
  )
}

export default UpcomingEvents