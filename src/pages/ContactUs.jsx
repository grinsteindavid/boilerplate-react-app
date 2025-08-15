import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from '../utils/logger'; // Assuming a logger utility exists

/**
 * ContactUs - A simple contact form component.
 * @param {Object} props - Component props
 * @returns {React.Element} Rendered component
 */
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  logger.debug('Rendering ContactUs page', { formData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logger.info('Contact form submitted', { formData });
    // In a real application, you would send this data to a backend
    alert('Thank you for your message, ' + formData.name + '!');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <div className="contact-us-container" style={contactUsContainerStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="message" style={labelStyle}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            style={textareaStyle}
          ></textarea>
        </div>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
};

ContactUs.propTypes = {
  // No props currently, but good practice to include propTypes
};

// Basic inline styles for visual cleanliness
const contactUsContainerStyle = {
  maxWidth: '600px',
  margin: '50px auto',
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Arial, sans-serif',
};

const headingStyle = {
  textAlign: 'center',
  color: '#333',
  marginBottom: '30px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
  color: '#555',
  display: 'block',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const textareaStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  resize: 'vertical',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px',
};

export default ContactUs;
