import React from 'react';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm data-testid="contact-form" />
    </div>
  );
};

export default ContactPage;