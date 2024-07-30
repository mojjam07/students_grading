import React from 'react'
import '../styles/LoginForm.css';

function LoginForm() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form id="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
