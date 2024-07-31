
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Accordion from '../components/Accordion';
import '../styles/home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    // Logic for navigating to the registration page or opening a registration modal
    navigate('/register');
    console.log("Navigate to registration page");
  };

  const handleLogin = () => {
    // Logic for navigating to the login page or opening a login modal
    navigate('/login');
    console.log("Navigate to login page");
  };

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to GradePro</h1>
        <p>Your Ultimate Student Grading Companion</p>
        <div className="auth-buttons">
          <button className="auth-button register" onClick={handleRegister}>
            Register
          </button>
          <button className="auth-button login" onClick={handleLogin}>
            Login
          </button>
        </div>
      </header>
      <section className="why-gradepro">
        <h2>Why Choose GradePro?</h2>
        <Accordion
          title="User-Friendly Interface"
          content="Navigate seamlessly with our clean and intuitive design, making it easy for everyone to use."
        />
        <Accordion
          title="Real-Time Updates"
          content="Get instant notifications and updates on grades, assignments, and academic performance."
        />
        <Accordion
          title="Comprehensive Analytics"
          content="Dive deep into performance metrics with detailed reports and charts to help you understand strengths and areas for improvement."
        />
        <Accordion
          title="Secure and Confidential"
          content="We prioritize your privacy with state-of-the-art encryption, ensuring your data is safe and secure."
        />
      </section>
      <section className="features">
        <h2>Key Features</h2>
        <Accordion
          title="Effortless Grading"
          content="Quickly input and calculate grades with our streamlined system."
        />
        <Accordion
          title="Customizable Reports"
          content="Generate personalized progress reports with just a few clicks."
        />
        <Accordion
          title="Parent & Student Portals"
          content="Keep parents and students in the loop with dedicated access to grades and feedback."
        />
        <Accordion
          title="Collaboration Made Easy"
          content="Share insights and collaborate with colleagues effortlessly."
        />
      </section>
      <footer className="homepage-footer">
        <p>
          Join thousands of educators and students who trust GradePro to elevate
          their educational experience. Start your journey with us today and
          transform the way you manage grades and track academic progress!
        </p>
      </footer>
    </div>
  );
};

export default Home;
