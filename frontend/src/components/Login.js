import React from 'react'
import '../styles/login.css'

function Login() {
  return (
    <div className="login-container">
        <h2>Input Your Login Details</h2>
        <form id="login-form">
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <h6>Forgot Password? Click <a href='#'>Here</a></h6>
    </div>
  )
}

export default Login