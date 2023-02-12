import React from 'react'
import {NavLink} from "react-router-dom"

const Footer = () => {
  return (
    <footer className='flex justify-between items-center px-9 py-5 mt-5 border-t border-[#707070]'>
      <NavLink to="/">
      <img src="/assets/footerLogo.svg" alt="footerLogo" className='w-[8rem] md:w-[207px]  object-cover' />
      </NavLink>
      <p>Footer Note</p>
    </footer>
  )
}

export default Footer