import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import Modal from './Modal'
import { FaBars} from "react-icons/fa";

const Navbar = () => {
  const [showModal,setShowMModal]=useState(false)
  const [showNavbar,setShowNavbar]=useState(false)
  

  return (
    <nav className='flex flex-col w-full'>
      <div className='w-full flex items-center  text-[#232B76] font-bold text-[14px] lg:shadow-[0_3px_6px_#1490DF] relative'>
      <div className='flex justify-between items-center gap-5 lg:gap-12 py-3 lg:py-9 pl-[1rem] xl:pl-[6rem] 2xl:pl-[17rem] w-full md:w-auto md:mr-[2.5rem]'>
        <NavLink to="/"><img src="assets/logo.svg" alt="logo" className=' object-cover'/></NavLink>
        <FaBars className='text-3xl md:hidden pr-2'
        onClick={()=>setShowNavbar(!showNavbar)}
        />
      </div>
        <div className='items-center gap-5 lg:gap-12 py-9 hidden md:flex '>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="sessions">SESSIONS</NavLink>
        <NavLink to="overview"
        onMouseOver={()=>setShowMModal(true)}
        onMouseLeave={()=>setShowMModal(false)}
        >OVERVIEW</NavLink>
        <NavLink to="schedule">SCHEDULE</NavLink>
        <NavLink to="teaser">TEASER</NavLink>
        <NavLink to="upcomingevents">UPCOMING EVENTS</NavLink>
        </div>
        {
          showModal &&  <Modal />
        }
      </div>
      {
        showNavbar &&  <div className=' flex flex-wrap justify-center items-center gap-3 py-3 text-sm md:hidden text-[#232B76] font-bold'>
    <NavLink to="/">HOME</NavLink>
    <NavLink to="sessions">SESSIONS</NavLink>
    <NavLink to="overview">OVERVIEW</NavLink>
    <NavLink to="schedule">SCHEDULE</NavLink>
    <NavLink to="teaser">TEASER</NavLink>
    <NavLink to="upcomingevents">UPCOMING EVENTS</NavLink>
        </div>
      }
    
    </nav>
  )
}

export default Navbar