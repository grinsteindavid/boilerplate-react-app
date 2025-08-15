import React from 'react';
import PropTypes from 'prop-types';
import logger from '../utils/logger'; // Assuming a logger utility exists

/**
 * ContactPage - A simple contact form component.
 * @param {Object} props - Component props
 * @returns {React.Element} Rendered component
 */
const ContactPage = () => {
  logger.debug('Rendering ContactPage');

  const handleSubmit = (event) => {
    event.preventDefault();
    logger.info('Contact form submitted');
    // In a real application, you would handle form submission here,
    // e.g., send data to an API.
    alert('Thank you for your message!');
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

ContactPage.propTypes = {
  // No specific props for this simple contact page, but good to keep propTypes structure
};

ContactPage.defaultProps = {
  // No default props for this simple contact page
};

export default ContactPage;
