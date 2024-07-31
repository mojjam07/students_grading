import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
         <div className="footer-content">
             <div className="footer-links">
                 <Link to="/">Home</Link>
                 <Link to="/about">About</Link>
                 <Link to="/contact">Contact</Link>
                 <Link to="/privacy">Privacy Policy</Link>
             </div>
             <div className="footer-copyright">
                 &copy; 2024 Student Grading App. All rights reserved.
             </div>
        </div>
    </footer>
  );
}

export default Footer;
