import React, { useState } from 'react';
import PropTypes from 'prop-types';
import logger from '../utils/logger';

/**
 * ContactPage - A simple contact page with a form.
 * @returns {React.Element} Rendered contact page component.
 */
const ContactPage = () => {
  logger.debug('Rendering ContactPage');
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
    logger.debug(`Form data changed: ${name} - ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logger.info('Contact form submitted', { formData });
    alert(
      `Form Submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
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
        <div>
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
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

ContactPage.propTypes = {
  // No props for this component, but keeping propTypes for consistency
};

export default ContactPage;
