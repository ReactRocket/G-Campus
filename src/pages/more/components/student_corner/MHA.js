import React from 'react'
import MHAimg from "../../../../resources/images/student_corner/mental_health/mental_health_gov_help.jpg"

const MHA = () => {
  return (
    <div className='h-full w-full flex flex-col justify-around p-20 gap-5'>
        <h1 className='text-blue-600 text-5xl font-bold text-center'>Mental Health America</h1>
        <img src={MHAimg} alt={MHAimg} className='w-auto h-full rounded-xl' />
    </div>
  )
}

export default MHA