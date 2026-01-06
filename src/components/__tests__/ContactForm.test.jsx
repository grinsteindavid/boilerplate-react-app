import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

describe('ContactForm', () => {
  test('renders form fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  });

  test('validates required fields', () => {
    render(<ContactForm />);
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  test('validates email format', () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit/i }));
    expect(screen.getByText(/Email is invalid/i)).toBeInTheDocument();
  });
});