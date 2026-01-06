import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  test('renders the form correctly', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  test('submits the form with valid data', () => {
    const handleSubmit = jest.fn();
    render(<ContactForm onSubmit={handleSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
    });
  });

  test('displays error messages for invalid submissions', () => {
    render(<ContactForm />);
    
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });
});