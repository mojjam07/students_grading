import React from 'react'
import Login from '../components/Login'
import TitleBar from '../components/TitleBar'
import Footer from '../components/Footer'



function RegisterLogin() {
  return (
    <div>
        <TitleBar title='Login Portal' />
        <Login />
        <Footer />
    </div>
  )
}

export default RegisterLogin