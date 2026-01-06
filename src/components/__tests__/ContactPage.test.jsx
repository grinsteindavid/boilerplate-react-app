import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ContactPage from '../ContactPage';

describe('ContactPage', () => {
  test('renders contact page title', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );
    const titleElement = screen.getByText(/Contact Us/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders ContactForm component', () => {
    render(
      <MemoryRouter>
        <ContactPage />
      </MemoryRouter>
    );
    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
  });
});