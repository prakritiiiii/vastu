import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
       </div>
        <div className='footer-contact'> 
          <ul>
            <li>
              vastubypreeti@gmail.com
            </li>
            <li>
              +91 9920757955
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </div>
    </footer>
  )
}

