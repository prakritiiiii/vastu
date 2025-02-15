import React from 'react';
import image from '../assests/logo2.png'
import image1 from '../assests/compass2.png'
import image2 from '../assests/16Dattributes.png'
import image3 from '../assests/elements.png'
import image4 from '../assests/elements-cycle.png'


const Article = () => {
  return (
    <div className='main-article'>
      <div className="article-container">
        <div className="article-icon">
              <img src={image} alt='Logo'/>
        </div>
        <h1>Vastu Shastra Chart for Homes</h1>
        <p>
          Vastu Shastra is a traditional Indian doctrine that blends architectural designs and interior decorations with natural energies. The aim is to create a peaceful and prosperous living environment that is in harmony with nature. The practice uses a tool called the Home Vastu Chart to help design and optimize your space for maximum positivity and balance.
        </p>
        <p>
          The method is based on the idea that the universe is built from five core elements - Earth, Water, Fire, Air, and Space. Vastu Shastra believes that if you can achieve a balance between these elements in your home, you can create a powerful, positive energy. This energy can then help improve the lives of those living in the space by bringing about overall well-being and wealth.
        </p>

        <h2>Key Takeaways</h2>
        <ul>
          <li>&#8226; Vastu Shastra is an ancient Indian science that aims to harmonize homes with nature's elements.</li>
          <li>&#8226; The principles of Vastu Shastra are based on directional alignments and the composition of the five core elements - Earth, Water, Fire, Air, and Space.</li>
          <li>&#8226; The Home Vastu Chart is a grid-based diagram that is a key tool in applying Vastu Shastra to plan the layout of a home in alignment with the cardinal directions and elemental energies.</li>
          <li>&#8226; Adopting Vastu Shastra in home design can improve health, attract prosperity, enhance tranquility, and boost the overall energy of the living space.</li>
          <li>&#8226; Vastu Shastra can be integrated into modern living spaces in numerous ways without the need for radical changes.</li>
          <li>&#8226; Even minor adjustments made in accordance with Vastu Shastra guidelines can yield significant improvements in the energy and atmosphere of a home.</li>
        </ul>

        <h2>What is a Home Vastu Chart?</h2>
        <p>
          A Home Vastu Chart, integral to Vastu Shastra, acts as a comprehensive guide for constructing and organizing spaces with a 360-degree Vastu chart approach. It embodies principles that align architecture with nature's elements, aiming to establish harmony between the environment and the inhabitants of a home.
        </p>

        <h3>Key Features:</h3>
        <ul>
          <li><strong>&#8226; A Grid-Based Diagram:</strong> The chart is visually represented through a vastu diagram as a grid, which maps out the ideal locations within a structure for various rooms and functions according to Vastu principles.</li>
          <li><strong>&#8226; Directional Alignment:</strong> It places great emphasis on the orientation of the home and its components (doors, kitchen, rooms & toilets) in alignment with the 16 directions and the elements they represent, as this influences prosperity, health, and happiness as per direction attributes.</li>
          <li><strong>&#8226; Cosmic Energy Flow:</strong> The layout is designed to ensure a harmonious flow of cosmic energy within the space, which is thought to enhance the well-being of its occupants.</li>
        </ul>

        <p>
          This Vastu Shastra Chart for home serves as a foundational blueprint that guides architectural design, aiming for a balance between the built environment and the natural world, thereby promoting positive energy, health, and prosperity in the home.
        </p>

        <h3>16 Directions & Their Attributes:</h3>
        <p>16 Directions</p>
        <div className='article-img'>
        <img src={image1} alt='16 Directions'/>
        <p>Attributes</p>
        </div>
        <div className='attributes'>
        <img src={image2} alt='Attributes' />
        </div>
        <h3>The Five Elements in Vastu Shastra Chart for Homes:</h3>
        <ul>
          <li><strong>1. Water (Jala):</strong> Symbolizing flow and purity, water elements should be placed to enhance wealth and prosperity. It promotes emotions, opportunity, health and work in life.</li>
          <li><strong>2. Air (Vayu):</strong> Air flow impacts health. Proper ventilation and window placements are crucial. It promotes connection and growth, happiness, rejuvenation and networking in our lives.</li>
          <li><strong>3. Fire (Agni):</strong> Governing energy and power, the fire element dictates kitchen and electrical appliance placements. It promotes Confidence, Cash, Security name and fame in our lives.</li>
          <li><strong>4. Earth (Bhumi):</strong> Earth's magnetic fields and gravitational forces influence human life, suggesting specific directions and placements for stability. It promotes stability, expenditure and savings in our life.</li>
          <li><strong>5. Space (Akash):</strong> The cosmic container for all elements, and space, dictates the holistic design and layout of the structure. It promotes manifestation gains and support in our lives.</li>
        </ul>

        <h3>Element Colour and Shapes:</h3>
        <div className='article-img'>
          <img src={image3} alt='Elements shape and colours'/>
        </div>

        <h3>Elements’ Cycle of Creation:</h3>
        <div className='article-img'>
          <img src={image4} alt='Elements cycle'/>
        </div>

        <h3>Vastu Mistakes to Avoid:</h3>
        <ul>
          <li>&#8226; Kitchen or Toilet in North East Direction.</li>
          <li>&#8226; Entrance of South or South West.</li>
          <li>&#8226; Rest all Vastu doshas can be treated with remedies. Just book a consultation.</li>
        </ul>
      </div>
    </div>
  );
};

export default Article;
