import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from './ContactPage';
import logger from '../utils/logger';

// Mock the logger module
jest.mock('../utils/logger', () => ({
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

describe('ContactPage', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    logger.debug.mockClear();
    logger.info.mockClear();
    logger.warn.mockClear();
    logger.error.mockClear();
    // Mock window.alert
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore original window.alert
    window.alert.mockRestore();
  });

  test('renders the contact page with a form', () => {
    render(<ContactPage />);
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument();
    expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    expect(logger.debug).toHaveBeenCalledWith('Rendering ContactPage');
  });

  test('submits the form and logs the data', () => {
    render(<ContactPage />);

    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageTextarea = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'This is a test message.' } });

    fireEvent.click(submitButton);

    expect(logger.info).toHaveBeenCalledTimes(1);
    expect(logger.info).toHaveBeenCalledWith(
      'Contact form submitted',
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        message: 'This is a test message.',
      }
    );
    expect(window.alert).toHaveBeenCalledWith('Thank you for your message!');
  });
});
