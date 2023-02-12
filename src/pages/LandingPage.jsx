import React from 'react'
import Description from '../components/Description'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Speakers from '../components/Speakers'
import UpcomingEvents from '../components/UpcomingEvents'

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <Speakers/>
        <Description/>
        <UpcomingEvents/>
    </div>
  )
}

export default LandingPage