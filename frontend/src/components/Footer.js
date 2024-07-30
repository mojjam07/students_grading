import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
         <div className="footer-content">
             <div className="footer-links">
                 <a href="#">Home</a>
                 <a href="#">About</a>
                 <a href="#">Contact</a>
                 <a href="#">Privacy Policy</a>
             </div>
             <div className="footer-copyright">
                 &copy; 2024 Student Grading App. All rights reserved.
             </div>
        </div>
    </footer>
  );
}

export default Footer;
