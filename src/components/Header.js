import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import image from '../assests/icon.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const navigate = useNavigate(); // To handle redirection
  const location = useLocation(); // To detect current path

  // Toggle the menu open/close state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // Function to scroll or navigate to sections
  const handleSectionClick = (sectionId) => {
    if (location.pathname === '/') {
      // If already on the homepage, just scroll to the section
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on the homepage, navigate to home first, then scroll to the section
      navigate('/');
      setTimeout(() => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Delay to ensure page is loaded before scrolling
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  // Function to redirect to the Articles page
  const handleRedirectToArticles = () => {
    navigate('/article');
    setIsMenuOpen(false); // Close the menu after redirection
  };

  // Function to handle logo click and redirect/scroll to home
  const handleLogoClick = () => {
    handleSectionClick('home');
  };

  return (
    <header className="header-box">
      <div className="header">
        {/* Logo Section */}
        <div className="icon" style={{ cursor: 'pointer' }} onClick={handleLogoClick}>
          <img src={image} alt="Logo" />
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
          ☰
        </div>

        {/* Mobile Menu Content */}
        <div className={`header-menu ${isMenuOpen ? 'open' : ''}`}>
          {/* Links to scroll to sections */}
          <div
            className="menu"
            onClick={() => handleSectionClick('about')}
            aria-label="Go to About section"
          >
            About
          </div>

          <div
            className="menu"
            onClick={() => handleSectionClick('needs')}
            aria-label="Go to Needs section"
          >
            Needs
          </div>

          <div
            className="menu"
            onClick={() => handleSectionClick('consultation')}
            aria-label="Go to Consultation section"
          >
            Consultation
          </div>

          {/* Redirect to Articles page */}
          <div
            className="menu"
            onClick={handleRedirectToArticles}
            aria-label="Go to Articles page"
          >
            Articles
          </div>
        </div>
      </div>
    </header>
  );
};
