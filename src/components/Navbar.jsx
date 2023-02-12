import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import Modal from './Modal'

const Navbar = () => {
  const [showModal,setShowMModal]=useState(false)
  

  return (
    <nav className='flex items-center gap-12 py-9 pl-[6rem] 2xl:pl-[17rem] text-[#232B76] font-bold text-[14px] shadow-[0_3px_6px_#1490DF] relative'>
        <NavLink to="/"><img src="assets/logo.svg" alt="logo" className='mr-[3rem] object-cover'/></NavLink>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="sessions">SESSIONS</NavLink>
        <NavLink to="overview"
        onMouseOver={()=>setShowMModal(true)}
        onMouseLeave={()=>setShowMModal(false)}
        >OVERVIEW</NavLink>
        <NavLink to="schedule">SCHEDULE</NavLink>
        <NavLink to="teaser">TEASER</NavLink>
        <NavLink to="upcomingevents">UPCOMING EVENTS</NavLink>
        {
          showModal &&  <Modal />
        }
      
    </nav>
  )
}

export default Navbar