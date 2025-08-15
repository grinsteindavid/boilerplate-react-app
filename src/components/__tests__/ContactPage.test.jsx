import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from '../ContactPage';

describe('ContactPage', () => {
  test('renders the contact form with name, email, message, and submit button', () => {
    render(<ContactPage />);

    // Check if the heading is present
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();

    // Check for form elements
    expect(screen.getByLabelText(/name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
