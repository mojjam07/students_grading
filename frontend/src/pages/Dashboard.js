import React, { useState } from 'react'
import TitleBar from '../components/TitleBar'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import Profile from '../sidebar_items/Profile'
import Courses from '../sidebar_items/Courses'
import Reports from '../sidebar_items/Reports'
import Grades from '../sidebar_items/Grades'
import Settings from '../sidebar_items/Settings'
import Logout from '../sidebar_items/Logout'


function Dashboard() {
  const [selectedOption, setSelectedOption] = useState('home')

  return (
    <div>
      <TitleBar title='Dashboard' />
      <div className="content">
        <Sidebar setSelectedOption={setSelectedOption} />
        <div>
          {selectedOption === 'profile' && <Profile />}
          {selectedOption === 'courses' && <Courses />}
          {selectedOption === 'grades' && <Grades />}
          {selectedOption === 'reports' && <Reports />}
          {selectedOption === 'settings' && <Settings />}
          {selectedOption === 'logout' && <Logout />}
        </div>
        {selectedOption === 'home' && <MainContent />}
      </div>
      <Footer />
    </div> 
  )
}

export default Dashboard