import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='flex items-center gap-12 py-9 pl-[6rem] 2xl:pl-[17rem] text-[#232B76] font-bold text-[14px] shadow-[0_3px_6px_#1490DF]'>
        <NavLink to="/"><img src="assets/logo.svg" alt="logo" className='mr-[3rem] object-cover'/></NavLink>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="sessions">SESSIONS</NavLink>
        <NavLink to="overview">OVERVIEW</NavLink>
        <NavLink to="schedule">SCHEDULE</NavLink>
        <NavLink to="teaser">TEASER</NavLink>
        <NavLink to="upcomingevents">UPCOMING EVENTS</NavLink>
    </nav>
  )
}

export default Navbar