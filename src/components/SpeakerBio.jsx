import React from 'react'
import {useParams} from "react-router-dom"
import { speakersData } from '../utils/speakerData'

const SpeakerBio = () => {
    const {id}=useParams()
    const currentSpeaker=speakersData.find(item=>item.id==id)
  return (
    <div className='w-full max-w-[40rem] m-auto py-5 mt-[7rem]'>
        <img src={currentSpeaker.img} alt={currentSpeaker.name} className="object-cover block m-auto" />
        <h1 className='text-center font-semibold text-xl text-[#232b76]'>{currentSpeaker.name}</h1>
        <p className='text-center'>{currentSpeaker.desc}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias sint, consequatur atque inventore sed reiciendis voluptate ab iusto cum magni, est facilis nemo laudantium obcaecati dignissimos perspiciatis vitae? Reiciendis distinctio illo veniam laborum quia, voluptatibus quas accusantium adipisci, ipsam, mollitia deseruntihil dolores distinctio alias quos quidem nulla exercitationem esse eius eligendi incidunt dolor quis, rerum repellendus architecto perspiciatis illum nam? Eum reiciendis laboriosam animi provident commodi, distinctio facere voluptatem culpa sunt eius aperiam magnam quo quis harum!</p>
    </div>
  )
}

export default SpeakerBio