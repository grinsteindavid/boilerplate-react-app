import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from '../ContactPage';

describe('ContactPage', () => {
  test('renders without crashing', () => {
    render(<ContactPage />);
  });

  test('includes ContactForm component', () => {
    const { getByTestId } = render(<ContactPage />);
    const contactForm = getByTestId('contact-form');
    expect(contactForm).toBeInTheDocument();
  });
});