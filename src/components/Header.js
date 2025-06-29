import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_nobg.webp';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); // Close dropdown when menu toggles
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Tri-Tone Music School" className="logo" />
        </Link>
        <h1>Tri-Tone <span>Music School</span></h1>
      </div>
      
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={isMenuOpen ? 'open' : ''}></span>
        <span className={isMenuOpen ? 'open' : ''}></span>
        <span className={isMenuOpen ? 'open' : ''}></span>
      </button>
      
      <div className={`menu-backdrop ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li className={`dropdown ${isDropdownOpen ? 'active' : ''}`}>
            <span onClick={toggleDropdown}>Instruments <i className="fas fa-chevron-down"></i></span>
            <ul className="dropdown-menu">
              <li><Link to="/guitar" onClick={closeMenu}>Guitar</Link></li>
              <li><Link to="/vocals" onClick={closeMenu}>Vocals</Link></li>
              <li><Link to="/piano" onClick={closeMenu}>Piano</Link></li>
            </ul>
          </li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;