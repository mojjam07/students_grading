import React from 'react'
import Register from '../components/RegistrationForm'
import TitleBar from '../components/TitleBar'
import Footer from '../components/Footer'



function RegisterLogin() {
  return (
    <div>
        <TitleBar title='Registration Portal' />
        <Register />
        <Footer />
    </div>
  )
}

export default RegisterLogin