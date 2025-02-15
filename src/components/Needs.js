import React from 'react';
import image1 from '../assests/need1.png';
import image2 from '../assests/need2.png';
import image3 from '../assests/need3.png';
import image4 from '../assests/need4.png';
import image5 from '../assests/need5.png';
import image6 from '../assests/need6.png';
import image7 from '../assests/need7.png';
import image8 from '../assests/need8.png';
import image9 from '../assests/need9.png';

const Needs = () => {
  const needs = [
    {
      title: "Career",
      description: "The energy in your home can impact your professional life significantly. Whether you’re seeking growth, a new job, or stability, the energy flow can either aid or hinder your progress.",
      image: image1
    },
    {
      title: "Health",
      description: "Physical and mental health are intricately linked to the energy present in your living space. A cluttered or negative environment can manifest in health issues, while a harmonious space promotes well-being.",
      image: image2
    },
    {
      title: "Studies",
      description: "For students, the study environment is crucial for academic success. The right flow of energy can boost focus, retention, and understanding, leading to better academic performance.",
      image: image3
    },
    {
      title: "Money",
      description: "The flow of energy in your home can also influence financial matters. Properly channeling positive energy can help attract financial success and security.",
      image: image4
    },
    {
      title: "Relationships",
      description: "Relationships thrive in environments filled with love, trust, and respect. Negative energy in a space can cause conflicts, misunderstandings, and emotional distance.",
      image: image5
    },
    {
      title: "Anxiety",
      description: "The emotional climate of a home profoundly impacts mental health. Energy imbalances can contribute to feelings of anxiety, while balanced energy promotes calm and peace.",
      image: image6
    },
    {
      title: "Depression",
      description: "Negative energy can exacerbate feelings of anxiety and depression. Creating a positive, balanced space is crucial for managing and alleviating depressive states.",
      image: image7
    },
    {
      title: "Fame",
      description: "For those pursuing careers in the public eye, the energy of one’s home can play a crucial role in success, ensuring stability and recognition in the public sphere.",
      image: image8
    },
    {
      title: "Decision Making",
      description: "Good decision-making is the result of clarity and focus. The energy flow in your home can either sharpen your decision-making skills or cloud your judgment.",
      image: image9
    }
  ];

  return (
    <div className='main-article' id='needs'>
      <div className="needs-container">
        <h2>Challenges in Your Life and Your Family Members' Lives: The Impact of Energy Flow in Your Home</h2>
        {needs.map((need, index) => (
          <div className="needs-card" key={index}>
            <img src={need.image} alt={need.title} className="needs-image" />
            <h2 className="needs-title">{need.title}</h2>
            <p className="needs-description">{need.description}</p>
          </div>
        ))}
        <h2>Can be resolved using Vastu Shastra and its remedies....</h2>
      </div>
    </div>
  );
};

export default Needs;
