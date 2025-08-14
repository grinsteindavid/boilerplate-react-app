import React from 'react';
import PropTypes from 'prop-types';
import logger from '../utils/logger';

/**
 * ContactPage - A simple contact page with a form.
 * @returns {React.Element} Rendered contact page.
 */
const ContactPage = () => {
  logger.debug('Rendering ContactPage');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      message: event.target.elements.message.value,
    };
    logger.info('Contact form submitted', formData);
    // In a real application, you would send this data to a backend service
    alert('Thank you for your message!');
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form data-testid="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};



export default ContactPage;
