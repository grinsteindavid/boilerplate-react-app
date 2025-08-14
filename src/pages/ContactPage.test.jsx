import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  test('renders the contact form with name, email, and message fields', () => {
    render(<ContactPage />);
    expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  test('allows users to type into the form fields', () => {
    render(<ContactPage />);
    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const messageInput = screen.getByLabelText(/Message:/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(messageInput.value).toBe('Hello, this is a test message.');
  });

  test('displays an alert with form data on submit', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    render(<ContactPage />);

    const nameInput = screen.getByLabelText(/Name:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const messageInput = screen.getByLabelText(/Message:/i);
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { value: 'jane.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is another test.' } });
    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith(
      'Form Submitted:\nName: Jane Doe\nEmail: jane.doe@example.com\nMessage: This is another test.'
    );
    window.alert.mockRestore();
  });
});
