import React from 'react'
import TitleBar from '../components/TitleBar'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'

function Dashboard() {

  return (
    <div>
      <TitleBar />
      <div className="content">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div> 
  )
}

export default Dashboard