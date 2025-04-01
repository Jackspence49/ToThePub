import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import './Navigation.css';

const Navigation = () => {
  const { theme } = useTheme();

  return (
    <nav className="navigation" style={{ backgroundColor: theme.navigation, boxShadow: `0 2px 4px ${theme.shadow}` }}>
      <div className="nav-left">
        <Link to="/app" style={{ color: theme.textPrimary }}>The App</Link>
        <Link to="/business-solution" style={{ color: theme.textPrimary }}>Business Solution</Link>
        <Link to="/about" style={{ color: theme.textPrimary }}>About Us</Link>
      </div>
      
      <div className="nav-center">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Home" />
        </Link>
      </div>
      
      <div className="nav-right">
        <Link to="/business-home" style={{ color: theme.textPrimary }}>Business Home</Link>
      </div>
    </nav>
  );
};

export default Navigation; 