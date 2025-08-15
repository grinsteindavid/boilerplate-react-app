import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact Component', () => {
  test('renders the contact form with all fields and a submit button', () => {
    render(<Contact />);

    // Check if the heading is present
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();

    // Check for name input field
    const nameInput = screen.getByLabelText(/name:/i);
    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveAttribute('type', 'text');

    // Check for email input field
    const emailInput = screen.getByLabelText(/email:/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');

    // Check for message textarea
    const messageTextarea = screen.getByLabelText(/message:/i);
    expect(messageTextarea).toBeInTheDocument();
    expect(messageTextarea.tagName).toBe('TEXTAREA');

    // Check for submit button
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  test('allows users to type into the input fields', () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/name:/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');

    const emailInput = screen.getByLabelText(/email:/i);
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    expect(emailInput).toHaveValue('john.doe@example.com');

    const messageTextarea = screen.getByLabelText(/message:/i);
    fireEvent.change(messageTextarea, { target: { value: 'This is a test message.' } });
    expect(messageTextarea).toHaveValue('This is a test message.');
  });

  // Add a test for form submission (mocking if necessary)
  test('calls a submit handler when the form is submitted', () => {
    const handleSubmit = jest.fn();
    render(<Contact onSubmit={handleSubmit} />); // Pass a mock onSubmit prop

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    // Expect the submit handler to have been called
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
