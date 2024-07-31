import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/RegistrationForm.css';
// import LoginForm from '../components/LoginForm';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    userType: 'student',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
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

  // const [showLogin, setShowLogin] = useState(false);
  const Navigate = useNavigate()

  const toggleLoginForm = () => {
    // setShowLogin(showLogin);
    Navigate('/login')
  };

  return (
    <div className="registration-container">
      <h2>New User? Register</h2>
      <form id="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          {/* <label htmlFor="userType">Register as:</label> */}
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
            <option value="admin">Administrator</option>
          </select>
        </div>
        <div className="form-group">
          {/* <label htmlFor="fullName">Full Name:</label> */}
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
          {/* <label htmlFor="dateOfBirth">Date of Birth:</label> */}
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            placeholder='Date of Birth'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            placeholder='Phone Number'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="address">Address:</label> */}
          <textarea
            id="address"
            name="address"
            value={formData.address}
            placeholder='Address'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="uniqueID">Student/Employee ID:</label> */}
          <input
            type="text"
            id="uniqueID"
            name="uniqueID"
            value={formData.uniqueID}
            placeholder='Student/Employee ID'
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
            placeholder='Password'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder='Confirm Password'
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            {/* <label htmlFor="profilePicture">Profile Picture:</label> */}
            <input 
              type="file" 
              id="profilePicture" 
              name="profilePicture" 
              accept="image/*"
              placeholder='Profile Picture'
              value={handleChange}
              required
            />
          </div>
        <button type="submit">Register</button>
        <h6>
          Already have an account? Login <a href="#" onClick={toggleLoginForm}>Here</a>
        </h6>
      </form>
    </div>
  );
};

export default RegistrationForm;
