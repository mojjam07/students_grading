import React, { useState } from 'react';
import '../styles/LoginForm.css';
// import LoginForm from '../components/LoginForm';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    uniqueID: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };

  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginForm = () => {
    setShowLogin(showLogin);
  };

  return (
    <div className="registration-container">
      <h2>Login Your details</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="fullName">Name:</label> */}
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            placeholder='Full Name'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder='Email'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="password">Password:</label> */}
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder='Placeholder'
            onChange={handleChange}
            required
          />
        </div>
        <button id='login-button' type="submit">Login</button>
        <h6>
          Lost Your Password? Click <a href="#" onClick={toggleLoginForm}>Here</a>
        </h6>
      </form>
    </div>
  );
};

export default Login;
