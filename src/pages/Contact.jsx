import React from 'react';
// import logger from '../utils/logger'; // Assuming a logger utility might be present or added later

/**
 * Contact - A simple contact us page with a form.
 * @param {Object} props - Component props
 * @returns {React.Element} Rendered component
 */
const Contact = ({ onSubmit }) => {
  // logger.debug('Rendering Contact page');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
    // Add form submission logic here later
    console.log('Form submitted!');
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form role="form" onSubmit={handleSubmit}>
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

export default Contact;
