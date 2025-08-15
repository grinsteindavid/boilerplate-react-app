import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from '../utils/logger';

/**
 * ContactPage - A simple contact form page.
 * Allows users to submit their name, email, and a message.
 * @param {Object} props - Component props
 * @returns {React.Element} Rendered component
 */
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    logger.info('Contact form submitted', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // In a real application, you would send this data to a backend API
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  logger.debug('Rendering ContactPage', formData);

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

ContactPage.propTypes = {
  // No props currently, but good practice to include propTypes
};

export default ContactPage;
