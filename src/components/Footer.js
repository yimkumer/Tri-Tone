import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Tri-Tone <span>Music School</span></h2>
          <p>Inspiring musical excellence since 2010</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>123 Music Avenue</p>
          <p>Harmony City, HC 12345</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@tritonemusic.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tri-Tone Music School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;