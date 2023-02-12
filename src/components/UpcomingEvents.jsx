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
    responsive: [
      {
        breakpoint:640,
        settings:{
        slidesToShow: 1,
        }
        }, 
      {
        breakpoint:800,
        settings:{
        slidesToShow: 2,
        }
        }, 
      {
        breakpoint:1100,
        settings:{
        slidesToShow: 3,
        }
        }, 
      {
        breakpoint:1300,
        settings:{
        slidesToShow: 4,
        }
        }, 
      ]
  };
  return (
    <div className='mt-[4rem] md:mt-[8rem] slider pb-12 bg-[#F7F8FB] relative'>
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
  <div className='cloud-effect hidden 2xl:block'>
  </div>
    </div>
    
  )
}

export default UpcomingEvents