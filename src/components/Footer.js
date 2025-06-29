import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_nobg.webp';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h2>Tri-Tone <span>Music School</span></h2>
          <div className="footer-logo-section">
            <img src={logo} alt="Tri-Tone Music School" className="footer-logo-img" />
          </div>
          <p className="footer-description">
            Tri-Tone Music Academy was formed in 2010 with a vision to spread quality music education across the region.
          </p>
          <div className="social-media">
            <a href="https://facebook.com" aria-label="Facebook" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-programs">
          <h3>Programs</h3>
          <ul>
            <li><Link to="/guitar">Guitar</Link></li>
            <li><Link to="/vocals">Vocals</Link></li>
            <li><Link to="/piano">Piano</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Koramangala, Bangalore - 560034</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-whatsapp"></i>
              <span>+91 9611980668</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>tri-tonemusiced.center@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Tri-Tone Music School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;