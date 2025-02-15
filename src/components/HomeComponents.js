import React from 'react';
import logo from '../assests/logo.png';
import About from './About';
import Needs from './Needs';
import Consultation from './Consultation';
import { Link } from 'react-scroll'; // Import Link from react-scroll

export const HomeComponents = () => {
  return (
    <div className='page' id='home'>
      <div className='home-container'>
        <img src={logo} alt='Main Logo' />
      </div>
      <div className='home-container'>
        {/* Link that scrolls to the consultation section when clicked */}
        <Link
          to="consultation"
          smooth={true}
          duration={500}
          offset={-70} 
        >
          <button className="book-btn">
            Connect Now!
          </button>
        </Link>
      </div>
      <About />
      <Needs />
      <Consultation />
    </div>
  );
};
