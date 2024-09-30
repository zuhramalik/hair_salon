import React, { useEffect, useState } from 'react';
import './Home.css';
import img1 from "../assets/img 1.png";
import img2 from "../assets/img 2.png";
import img3 from "../assets/img 3.avif";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div id="Home" className="img_container">
      <img src={images[currentImageIndex]} alt={`img ${currentImageIndex + 1}`} />
      <div className="content">
        <h2>
          {currentImageIndex === 0
            ? 'Classic Hair Style & Shaves'
            : currentImageIndex === 1
            ? 'Modern Look & Shaves'
            : 'Timeless Grooming Styles'}
        </h2>
        <p>
          {currentImageIndex === 0
            ? 'Our hair styles enhance your smile.'
            : currentImageIndex === 1
            ? 'Experience the finest grooming services.'
            : 'Precision and care for every client.'}
        </p>
        <button className="appointment-btn">Make Appointment</button>
      </div>
    </div>
  );
};

export default Home;
