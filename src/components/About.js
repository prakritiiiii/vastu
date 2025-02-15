import React, { useState, useEffect } from 'react';
import image1 from '../assests/Map.png';
import image2 from '../assests/Map2.png'; 


const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2];

  // Function to go to the next image automatically
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds, change this value for different durations

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="main-container" id="about">
      {/* Left side: About Text */}
      <div className="about-content">
        <h1>About Vastu Shastra</h1>
        <p>&#8226;
          Vastu Shastra is an ancient Indian science of architecture that helps create harmonious 
          and balanced living and working spaces.
          <br/>&#8226;
          By aligning your environment with natural elements 
          and cosmic principles, Vastu Shastra can enhance prosperity, health, and well-being. 
          <br/>&#8226;
          Incorporating these principles into your home or office can transform your space into a 
          place of positive energy and success.
        </p>
        <br />
        <p>&#8226;
          Embrace the timeless art of Vastu Shastra and experience the positive impact it can have 
          on your life and surroundings with Vastu By Preeti.
        </p>
      </div>

      {/* Right side: Image Slider */}
      <div className="image-slider">
        <img src={images[currentIndex]} alt="Slider" className="slider-image" />
      </div>
    </div>
  );
};

export default About;
