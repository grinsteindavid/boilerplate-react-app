import React from 'react';
import PropTypes from 'prop-types';
import logger from '../utils/logger';

/**
 * ContactPage - A simple contact page with a form.
 * @returns {React.Element} Rendered contact page.
 */
const ContactPage = () => {
  logger.debug('Rendering ContactPage');
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form data-testid="contact-form">
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

ContactPage.propTypes = {};

ContactPage.defaultProps = {};

export default ContactPage;
