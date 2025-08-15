import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from './ContactPage';
import logger from '../utils/logger';

// Mock the logger for testing purposes
jest.mock('../utils/logger', () => ({
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

// Mock the alert function to prevent it from popping up during tests
global.alert = jest.fn();

describe('ContactPage', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    logger.debug.mockClear();
    logger.info.mockClear();
    global.alert.mockClear();
  });

  test('renders the contact form with all fields', () => {
    logger.debug('Test: renders the contact form with all fields');
    render(<ContactPage />);
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
    logger.debug('Assertions complete for rendering all fields.');
  });

  test('allows users to type into form fields', () => {
    logger.debug('Test: allows users to type into form fields');
    render(<ContactPage />);

    const nameInput = screen.getByLabelText(/name:/i);
    fireEvent.change(nameInput, { target: { name: 'name', value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');
    logger.debug('Name input changed.', { value: nameInput.value });

    const emailInput = screen.getByLabelText(/email:/i);
    fireEvent.change(emailInput, { target: { name: 'email', value: 'john.doe@example.com' } });
    expect(emailInput).toHaveValue('john.doe@example.com');
    logger.debug('Email input changed.', { value: emailInput.value });

    const messageTextarea = screen.getByLabelText(/message:/i);
    fireEvent.change(messageTextarea, { target: { name: 'message', value: 'Hello, this is a test message.' } });
    expect(messageTextarea).toHaveValue('Hello, this is a test message.');
    logger.debug('Message input changed.', { value: messageTextarea.value });

    logger.debug('Assertions complete for typing into form fields.');
  });

  test('submits the form and clears fields', () => {
    logger.debug('Test: submits the form and clears fields');
    render(<ContactPage />);

    const nameInput = screen.getByLabelText(/name:/i);
    const emailInput = screen.getByLabelText(/email:/i);
    const messageTextarea = screen.getByLabelText(/message:/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.change(nameInput, { target: { name: 'name', value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { name: 'email', value: 'jane.doe@example.com' } });
    fireEvent.change(messageTextarea, { target: { name: 'message', value: 'This is another test.' } });
    logger.debug('Form fields populated.', { name: nameInput.value, email: emailInput.value, message: messageTextarea.value });

    fireEvent.click(submitButton);
    logger.debug('Submit button clicked.');

    expect(global.alert).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith('Thank you for your message! We will get back to you soon.');
    logger.debug('Alert was called.');

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageTextarea).toHaveValue('');
    logger.debug('Form fields cleared after submission.');

    expect(logger.info).toHaveBeenCalledWith(
      'Contact form submitted',
      { name: 'Jane Doe', email: 'jane.doe@example.com', message: 'This is another test.' }
    );
    logger.debug('Logger.info was called with correct data.');

    logger.debug('Assertions complete for form submission.');
  });
});
