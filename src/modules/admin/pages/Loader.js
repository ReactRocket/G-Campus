import React from 'react'

function Loader() {
  return (
    <div className="h-full flex justify-center items-center">
      <div className="w-16 h-16 rounded-full border-4 animate-spin border-t-gray-600"></div>
    </div>
  )
}

export default Loader