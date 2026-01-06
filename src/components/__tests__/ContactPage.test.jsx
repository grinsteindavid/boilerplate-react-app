import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from '../ContactPage';

describe('ContactPage', () => {
  test('renders without crashing', () => {
    render(<ContactPage />);
  });

  test('includes the ContactForm component', () => {
    const { getByTestId } = render(<ContactPage />);
    const contactForm = getByTestId('contact-form');
    expect(contactForm).toBeInTheDocument();
  });

  test('has the correct page title', () => {
    const { getByText } = render(<ContactPage />);
    const title = getByText(/Contact Us/i);
    expect(title).toBeInTheDocument();
  });
});