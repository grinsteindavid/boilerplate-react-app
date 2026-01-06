import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  test('renders correctly with all required fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test('submits the form with valid data', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Hello!' } });
    fireEvent.click(screen.getByText(/Submit/i));
    expect(screen.getByText(/Thank you for your message!/i)).toBeInTheDocument();
  });

  test('displays error messages for invalid inputs', () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByText(/Submit/i));
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });
});