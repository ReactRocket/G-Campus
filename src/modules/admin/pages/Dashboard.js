import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AdminAuth } from '../components/AdminAuth'
import AdminPanel from '../components/AdminPanel'
function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { sessionID, sessionType } = useSelector((state) => state.session)

  return (
    <>
      {
        sessionStorage.getItem('admin') === "admin@gmail.com" || (sessionID === "admin@gmail.com" && sessionType === "admin")
          ?
          <AdminPanel isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          :
          <AdminAuth />
      }
    </>
  )

}

export default Dashboard


