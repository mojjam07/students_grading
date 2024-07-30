import React, { useState } from 'react';
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

  const [showLogin, setShowLogin] = useState(false);

  const toggleLoginForm = () => {
    setShowLogin(showLogin);
  };

  return (
    <div className="registration-container">
      <h2>New User? Register</h2>
      <form id="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="userType">Register as:</label>
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
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="uniqueID">Student/Employee ID:</label>
          <input
            type="text"
            id="uniqueID"
            name="uniqueID"
            value={formData.uniqueID}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <input 
              type="file" 
              id="profilePicture" 
              name="profilePicture" 
              accept="image/*"
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
