import React, { useState } from "react";
import "./ServiceDetails.css"; 

const ServiceDetails = () => {

  const [selectedService, setSelectedService] = useState("Haircut");

  
  const services = {
    Haircut: {
      title: "Haircut",
      description:
        "Our professional haircuts are tailored to your unique style and preference. Whether you want a classic cut or a trendy new look, we’ve got you covered.",
      img: "cutting.avif", 
    },
    Hairstyling: {
      title: "Hairstyling",
      description:
        "Perfect your look with our expert hairstyling services. From updos to curls, we’ll make sure you look fabulous for any occasion.",
      img: "hairstyling.jpg", 
    },
    HairExtension: {
      title: "Hair Extension",
      description:
        "Add length and volume with our premium hair extension services. Choose from a variety of options to suit your style.",
      img: "extension.jpg", 
    },
    HairColor: {
      title: "Hair Color",
      description:
        "Transform your look with our vibrant hair coloring options. Whether you’re going for a bold new color or just subtle highlights, our stylists can achieve it.",
      img: "haircolor.jpg", 
    },
  };

  return (
    <div className="container">
    

      <div className="service-buttons">
        <button
          className={`btn ${selectedService === "Haircut" ? "active" : ""}`}
          onClick={() => setSelectedService("Haircut")}
        >
          Haircut
        </button>
        <button
          className={`btn ${selectedService === "Hairstyling" ? "active" : ""}`}
          onClick={() => setSelectedService("Hairstyling")}
        >
          Hairstyling
        </button>
        <button
          className={`btn ${selectedService === "HairExtension" ? "active" : ""}`}
          onClick={() => setSelectedService("HairExtension")}
        >
          Hair Extension
        </button>
        <button
          className={`btn ${selectedService === "HairColor" ? "active" : ""}`}
          onClick={() => setSelectedService("HairColor")}
        >
          Hair Color
        </button>
      </div>

     
      <div className="service-details">
        <h2>{services[selectedService].title}</h2>
        <img src={services[selectedService].img} alt={services[selectedService].title} />
        <p>{services[selectedService].description}</p>
      </div>

     
      <div className="additional-content">
        <h3>Why Choose Us?</h3>
        <p>
          We pride ourselves on offering top-tier hair services, ensuring that
          you walk out looking and feeling your best. Our stylists are highly
          trained and use the best products in the industry.
        </p>

        <h3>Our Products</h3>
        <p>
          We only use premium hair care products to ensure that your hair stays
          healthy and shiny. From shampoos to conditioners, we've got the best
          products for all hair types.
        </p>

        <h3>Customer Testimonials</h3>
        <p>
          "Best haircut I’ve ever had! The stylists really know what they’re
          doing." - Sarah L.
        </p>
        <p>
          "I love my new hair color! It’s exactly what I wanted." - Emma W.
        </p>
        <p>
          "The extensions look so natural, and the process was quick and
          painless." - Olivia R.
        </p>

        <h3>Our Locations</h3>
        <p>
          Visit us at any of our locations to experience our expert services. We
          have salons in multiple cities to serve you better.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
