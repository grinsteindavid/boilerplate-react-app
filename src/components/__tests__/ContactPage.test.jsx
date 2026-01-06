import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from '../ContactPage';

describe('ContactPage', () => {
  test('renders without crashing', () => {
    render(<ContactPage />);
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
  });

  test('includes the ContactForm component', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });

  test('displays the correct page title', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
  });
});