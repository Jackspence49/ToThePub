import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navigation.css';

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation" style={{
      '--navigation-bg': theme.navigation,
      '--shadow-color': theme.shadow,
      '--text-primary': theme.textPrimary,
      '--primary': theme.primary
    }}>
      <div className="nav-left">
        <button 
          className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="desktop-nav">
          <Link to="/app" onClick={closeMenu}>The App</Link>
          <Link to="/business-solution" onClick={closeMenu}>Business Solution</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
        </div>
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/app" onClick={closeMenu}>The App</Link>
          <Link to="/business-solution" onClick={closeMenu}>Business Solution</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
        </div>
      </div>
      
      <div className="nav-center">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Home" />
        </Link>
      </div>
      
      <div className="nav-right">
        <Link to="/business-home" onClick={closeMenu}>Business Home</Link>
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navigation; 