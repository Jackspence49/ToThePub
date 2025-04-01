import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      style={{ 
        backgroundColor: theme.secondary,
        color: theme.textPrimary,
        border: 'none',
        padding: '1rem',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: `0 2px 8px ${theme.shadow}`,
      }}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle; 