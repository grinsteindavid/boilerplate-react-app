import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from '../ContactPage';

describe('ContactPage', () => {
  test('renders the ContactPage without crashing', () => {
    render(<ContactPage />);
    expect(screen.getByText(/contact us/i)).toBeInTheDocument(); // Assuming there's a heading
  });

  test('includes the ContactForm component', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument(); // Check for a field from ContactForm
  });
});