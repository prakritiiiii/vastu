import React from 'react';
import expertImage from '../assests/Profile.png'; 

const Contact = () => {
  const handleWhatsAppClick = () => {
    // WhatsApp link for a specific phone number
    window.open('https://wa.me/919920757955', '_blank');
  };

  return (
    <div className="contact-container">
      <div className="profile-section">
        <h2>Contact Us!</h2>
        <img src={expertImage} alt="Vastu Expert" className="profile-image" />
        <h1>Preeti Jog</h1>
        <p className="expert-title">Professional Vastu Consultant</p>
      </div>

      <div className="contact-button-section">
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
          Connect with Us
        </button>
      </div>
    </div>
  );
};

export default Contact;