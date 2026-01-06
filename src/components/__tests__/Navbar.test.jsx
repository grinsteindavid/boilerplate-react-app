import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  test('renders contact link', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    const contactLink = screen.getByText(/Contact/i);
    expect(contactLink).toBeInTheDocument();
  });
});