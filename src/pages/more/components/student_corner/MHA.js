import React from 'react'
import MHAimg from "../../../../resources/images/student_corner/mental_health/mental_health_gov_help.jpg"

const MHA = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center  p-10 gap-5'>
        <h1 className='text-blue-600 text-4xl font-bold text-center'>Mental Health Awareness</h1>
        <a title='Click Here To Reach National Tele Mental Health Program of India' href="https://telemanas.mohfw.gov.in/#/home" target="_blank" rel="noopener noreferrer">
        <img src={MHAimg} alt={MHAimg} className='w-auto h-full rounded-xl scale-100 hover:scale-105 transition-transform duration-1000 cursor-pointer' />
        </a>
    </div>
  )
}

export default MHA