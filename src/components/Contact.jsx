import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // State to hold form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    
    // Store data in localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    
    alert('Message saved locally!');

    // Optionally clear form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact section-box" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-intro">Feel free to reach out via the form below or through my social media links.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/anu-vidhya-674a77333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
        <a href="https://github.com/AnuVidhya-R" target="_blank" rel="noreferrer">💻 GitHub</a>
        <a href="https://wa.me/919360532349" target="_blank" rel="noreferrer">💬📱 WhatsApp</a>
      </div>
    </section>
  );
};

export default Contact;

