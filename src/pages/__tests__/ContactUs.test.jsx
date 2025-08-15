import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactUs from '../ContactUs';

// Mock the logger utility
jest.mock('../../utils/logger', () => ({
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

const mockLogger = require('../../utils/logger');


describe('ContactUs', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    mockLogger.debug.mockClear();
    mockLogger.info.mockClear();
    // Mock window.alert
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore original window.alert after each test
    window.alert.mockRestore();
  });

  test('renders the contact form with all fields', () => {
    render(<ContactUs />);

    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    expect(mockLogger.debug).toHaveBeenCalledWith('Rendering ContactUs page', expect.any(Object));
  });

  test('allows users to type into the form fields', () => {
    render(<ContactUs />);

    const nameInput = screen.getByLabelText(/name:/i);
    const emailInput = screen.getByLabelText(/email:/i);
    const messageTextarea = screen.getByLabelText(/message:/i);

    fireEvent.change(nameInput, { target: { name: 'name', value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { name: 'email', value: 'john.doe@example.com' } });
    fireEvent.change(messageTextarea, { target: { name: 'message', value: 'Hello, this is a test message.' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john.doe@example.com');
    expect(messageTextarea).toHaveValue('Hello, this is a test message.');
  });

  test('submits the form and clears fields on successful submission', () => {
    render(<ContactUs />);

    const nameInput = screen.getByLabelText(/name:/i);
    const emailInput = screen.getByLabelText(/email:/i);
    const messageTextarea = screen.getByLabelText(/message:/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.change(nameInput, { target: { name: 'name', value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { name: 'email', value: 'jane.doe@example.com' } });
    fireEvent.change(messageTextarea, { target: { name: 'message', value: 'This is another test message.' } });

    fireEvent.click(submitButton);

    expect(mockLogger.info).toHaveBeenCalledWith('Contact form submitted', {
      formData: {
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        message: 'This is another test message.',
      },
    });
    expect(window.alert).toHaveBeenCalledWith('Thank you for your message, Jane Doe!');

    // Check if fields are cleared after submission
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageTextarea).toHaveValue('');
  });

  test('submits the form with empty fields and clears them', () => {
    render(<ContactUs />);

    const nameInput = screen.getByLabelText(/name:/i);
    const emailInput = screen.getByLabelText(/email:/i);
    const messageTextarea = screen.getByLabelText(/message:/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.click(submitButton);

    expect(mockLogger.info).toHaveBeenCalledWith('Contact form submitted', {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    });
    expect(window.alert).toHaveBeenCalledWith('Thank you for your message, !');

    // Check if fields are cleared after submission
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageTextarea).toHaveValue('');
  });
});
