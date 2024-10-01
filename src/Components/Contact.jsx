import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_tr6yhtt',  
        'template_f06p8ar', 
        e.target,           
        'RjgS6ivW-snqMoHBI' 
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
          console.log(result.text);
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send email: ' + error.text);
        }
      );

   
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <fieldset>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter Your Message"
          required
        ></textarea>

        <button type="submit" className="button">Submit</button>
      </form>
    </fieldset>
  );
};

export default Contact;
