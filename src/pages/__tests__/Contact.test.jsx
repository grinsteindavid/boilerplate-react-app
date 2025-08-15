import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';
import logger from '../../utils/logger';

// Mock the logger to prevent actual console output during tests
jest.mock('../../utils/logger', () => ({
  info: jest.fn(),
  debug: jest.fn(),
}));

describe('Contact Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    // Mock window.alert
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    logger.debug('Test setup: Contact component');
  });

  afterEach(() => {
    // Restore original window.alert
    window.alert.mockRestore();
    logger.debug('Test teardown: Contact component');
  });

  test('renders the contact form with all fields', () => {
    render(<Contact />);
    logger.debug('Checking for form elements');
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  test('allows users to type into form fields', () => {
    render(<Contact />);
    logger.debug('Testing input field changes');

    const nameInput = screen.getByLabelText(/name:/i);
    fireEvent.change(nameInput, { target: { name: 'name', value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
    logger.debug('Name input value', { value: nameInput.value });

    const emailInput = screen.getByLabelText(/email:/i);
    fireEvent.change(emailInput, { target: { name: 'email', value: 'john.doe@example.com' } });
    expect(emailInput.value).toBe('john.doe@example.com');
    logger.debug('Email input value', { value: emailInput.value });

    const messageTextarea = screen.getByLabelText(/message:/i);
    fireEvent.change(messageTextarea, { target: { name: 'message', value: 'Hello, this is a test message.' } });
    expect(messageTextarea.value).toBe('Hello, this is a test message.');
    logger.debug('Message textarea value', { value: messageTextarea.value });
  });

  test('submits the form and clears fields on successful submission', () => {
    render(<Contact />);
    logger.debug('Testing form submission');

    const nameInput = screen.getByLabelText(/name:/i);
    const emailInput = screen.getByLabelText(/email:/i);
    const messageTextarea = screen.getByLabelText(/message:/i);
    const submitButton = screen.getByRole('button', { name: /send message/i });

    fireEvent.change(nameInput, { target: { name: 'name', value: 'Jane Doe' } });
    fireEvent.change(emailInput, { target: { name: 'email', value: 'jane.doe@example.com' } });
    fireEvent.change(messageTextarea, { target: { name: 'message', value: 'This is another test.' } });

    fireEvent.click(submitButton);

    logger.debug('Checking if alert was called', { alertCalled: window.alert.mock.called });
    expect(window.alert).toHaveBeenCalledWith('Thank you for your message!');
    logger.debug('Checking if logger.info was called', { loggerInfoCalled: logger.info.mock.called });
    expect(logger.info).toHaveBeenCalledWith('Contact form submitted', {
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
      message: 'This is another test.',
    });

    // Check if form fields are cleared after submission
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(messageTextarea.value).toBe('');
    logger.debug('Form fields cleared after submission');
  });

  test('displays required attribute for all input fields', () => {
    render(<Contact />);
    logger.debug('Checking required attributes');
    expect(screen.getByLabelText(/name:/i)).toBeRequired();
    expect(screen.getByLabelText(/email:/i)).toBeRequired();
    expect(screen.getByLabelText(/message:/i)).toBeRequired();
  });
});
