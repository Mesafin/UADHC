import React from 'react';  
import './hero.css'; // Import your CSS file for styling  
import heroImage from "../public/extracted_background.jpg";
import Image from 'next/image';

const HeroSide = () => {  
  return (  
    <div className="container2" style={{backgroundColor: "#c33333"}}>  
      <div className="welcome-section font-chunk">  
        <h1>Welcome to Uplifting Adult Day Care Center!</h1>  
        <p>Located in the Heart of Inglewood, We're More Than Just a Day Care – We're a Community!</p>  
        <p>  
          At Uplifting Adult Day Care Center, we believe every day should be filled with joy, comfort, and   
          connection. Whether you're seeking a supportive environment for yourself or a loved one, our center   
          is here to provide a nurturing space where everyone can thrive.  
        </p>  
        <a href="#learn-more" className="learn-more-button">Learn More</a>  
      </div>  
      {/* Optional image section */}  
      <div className="image-section">  
        <Image   
          src={heroImage} 
          alt="Uplifting Adult Day Care"   
          className="day-care-image"   
        />  
      </div>  
    </div>  
  );  
}  

export default HeroSide;