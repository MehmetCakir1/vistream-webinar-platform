import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import Modal from './Modal'
import { FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const [showModal,setShowMModal]=useState(false)
  const [showNavbar,setShowNavbar]=useState(false)
  

  return (
    <nav className='flex flex-col w-full fixed top-0 z-50 bg-white'>
      <div className='w-full flex items-center  text-[#232B76] font-bold text-[14px] lg:shadow-[0_3px_6px_#1490DF] relative'>
      <div className='navbar-logo flex justify-between items-center gap-5 lg:gap-12 py-1 lg:py-5  w-full md:w-auto md:mr-[2.5rem]'>
      {/* <div className='navbar-logo flex justify-between items-center gap-5 lg:gap-12 py-3 lg:py-9 pl-[1rem] xl:pl-[6rem] 2xl:pl-[17rem] w-full md:w-auto md:mr-[2.5rem]'> */}
        <NavLink to="/"><img src="assets/logo.svg" alt="logo" className=' object-cover'/></NavLink>
        {
          showNavbar ? (
          <FaTimes className='text-3xl md:hidden pr-2 text-red-700'
          onClick={()=>setShowNavbar(false)}
          />):( 
            <FaBars className='text-3xl md:hidden pr-2 faBars'
          onClick={()=>setShowNavbar(true)}
          />)
        }
      </div>
        <div className='items-center gap-5 lg:gap-12 py-5 hidden md:flex '>
        <NavLink  className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
              to="/">HOME</NavLink>
        <NavLink 
         className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
        to="sessions">SESSIONS</NavLink>
        <div className='relative'>
          <NavLink 
         className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
        to="overview"
        onMouseOver={()=>setShowMModal(true)}
        onMouseLeave={()=>setShowMModal(false)}
        >OVERVIEW</NavLink>
        {
          showModal &&  <Modal />
        }
        </div>
        
        <NavLink 
         className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
        to="schedule">SCHEDULE</NavLink>
        <NavLink 
         className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
        to="teaser">TEASER</NavLink>
        <NavLink 
         className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
        to="upcomingevents">UPCOMING EVENTS</NavLink>
        </div>
       
      </div>
      
        <div className={`${!showNavbar ? 'scale-0 flex flex-col justify-center items-end gap-3 py-5 px-5 text-sm md:hidden bg-[#232B76] text-white font-bold mobileNavbar  absolute top-[5rem] right-0 rounded-l-[50%] w-[60%] max-w-[16rem] shadow-[0_3px_6px_#232B76]' : "scale-100 flex flex-col justify-center items-end gap-3 py-5 px-5 text-sm md:hidden bg-[#232B76] text-white font-bold mobileNavbar  absolute top-[5rem] right-0 rounded-l-[50%] w-[60%] max-w-[16rem] shadow-[0_3px_6px_#232B76]" } transition-transform duration-700 ease-linear`}>
    <NavLink
     className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
    to="/">HOME</NavLink>
    <NavLink
     className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
    to="sessions">SESSIONS</NavLink>
    <div>
       <NavLink
     className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
    to="overview">OVERVIEW</NavLink>
    </div>
    <NavLink
     className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
    to="schedule">SCHEDULE</NavLink>
    <NavLink
     className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
    to="teaser">TEASER</NavLink>
    <NavLink
     className={({ isActive }) =>
                isActive 
                  ? "border-b border-[#232B76]"
                  : "border-0"
              } 
    to="upcomingevents">UPCOMING EVENTS</NavLink>
        </div>

    </nav>
  )
}

export default Navbar