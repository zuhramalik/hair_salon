import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const services = [
    { image: 'cutting.avif', title: 'Haircut', description: 'Expert haircuts tailored to you.' },
    { image: 'haircolor.jpg', title: 'Coloring', description: 'Vibrant and long-lasting hair color.' },
    { image: 'hairstyling.jpg', title: 'Styling', description: 'Perfect styles for any occasion.' },
    { image: 'extension.jpg', title: 'Extensions', description: 'High-quality hair extensions.' }
  ];

  const stylists = [
    { name: 'Maryam', specialty: 'Coloring', image: 'color.jpg' },
    { name: 'Aminah', specialty: 'Styling', image: 'color.jpg' },
    { name: 'Laiba', specialty: 'Extensions', image: 'color.jpg' }
  ];

  const testimonials = [
    { review: "Best haircut ever!", name: "Maryam" },
    { review: "Amazing color job!", name: "Aminah" },
    { review: "I loved the styling!", name: "Laiba" }
  ];

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    stylist: '',
    contact: ''
  });

  const [selectedService, setSelectedService] = useState(null); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service); 
    console.log('Service selected:', service);
  };

  return (
    <div className="service-page">
      <div className="hero">
        <h1>Luxury Hair Services</h1>
        <button>Book an Appointment</button>
      </div>

      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => handleServiceClick(service)}>Select {service.title}</button>
          </div>
        ))}
      </div>

     
      {selectedService && (
        <div className="selected-service">
          <h2>{selectedService.title}</h2>
          <img src={selectedService.image} alt={selectedService.title} />
          <p>{selectedService.description}</p>
        </div>
      )}

      <div className="stylists-section">
        <h2>Our Stylists</h2>
        <div className="stylists">
          {stylists.map((stylist, index) => (
            <div key={index} className="stylist-card">
              <img src={stylist.image} alt={stylist.name} />
              <h4>{stylist.name}</h4>
              <p>{stylist.specialty}</p>
            </div>
          ))}
        </div>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <h2>Book an Appointment</h2>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
        <input type="time" name="time" value={formData.time} onChange={handleChange} />
        <select name="stylist" value={formData.stylist} onChange={handleChange}>
          <option value="">Select Stylist</option>
          {stylists.map((stylist, index) => (
            <option key={index} value={stylist.name}>{stylist.name}</option>
          ))}
        </select>
        <input type="text" name="contact" placeholder="Contact Info" value={formData.contact} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      <div className="carousel">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.review}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
