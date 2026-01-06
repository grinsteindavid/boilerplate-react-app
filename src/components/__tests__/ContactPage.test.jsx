import React from 'react';
import { render } from '@testing-library/react';
import ContactPage from '../ContactPage';

describe('ContactPage', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<ContactPage />);
    expect(getByText(/Contact Us/i)).toBeInTheDocument();
  });

  test('includes the ContactForm component', () => {
    const { getByTestId } = render(<ContactPage />);
    expect(getByTestId('contact-form')).toBeInTheDocument();
  });

  test('displays the correct page title', () => {
    const { getByRole } = render(<ContactPage />);
    expect(getByRole('heading', { name: /Contact Us/i })).toBeInTheDocument();
  });
});