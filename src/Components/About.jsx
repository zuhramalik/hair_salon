import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p className="about-subtitle">Discover the Art of Beautiful Hair</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>
            At Luxe Hair Salon, we believe in transforming not only your look but also your confidence. With years of experience in hair care, cutting-edge styles, and personalized services, we bring out the beauty in every strand of hair.
          </p>

          <h2>Our Mission</h2>
          <p>
            We aim to provide an exceptional experience, blending creativity, innovation, and expert styling. Our professional team is dedicated to making sure you leave our salon feeling refreshed, revitalized, and beautiful.
          </p>
        </div>

        <div className="about-image">
          <img src="aboutimg.png" alt="Salon" />
        </div>
      </div>

      <div className="about-values">
        <div className="value-card">
          <h3>Expert Stylists</h3>
          <p>Our team of certified professionals is passionate about hair.</p>
        </div>
        <div className="value-card">
          <h3>Luxury Experience</h3>
          <p>We offer a luxurious atmosphere for ultimate relaxation.</p>
        </div>
        <div className="value-card">
          <h3>Custom Services</h3>
          <p>Our services are tailored to your unique needs and style.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
