import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPostPage from '../BlogPostPage';

describe('BlogPostPage', () => {
  // Mock the useParams hook to control the ID in the URL
  const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);
    return render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/blog/:id" element={ui} />
        </Routes>
      </MemoryRouter>
    );
  };

  test('renders blog post content when a valid ID is provided', () => {
    const postId = 'the-art-of-clean-code'; // A valid ID from the mock data
    renderWithRouter(<BlogPostPage />, { route: `/blog/${postId}` });

    expect(screen.getByText(/The Art of Clean Code/i)).toBeInTheDocument();
    expect(screen.getByText(/By Code Master on September 1, 2025/i)).toBeInTheDocument();
    expect(screen.getByText(/Clean code is not just about making your code work;/i)).toBeInTheDocument();
  });

  test('renders "404 Not Found" when an invalid ID is provided', () => {
    const invalidPostId = 'non-existent-post';
    renderWithRouter(<BlogPostPage />, { route: `/blog/${invalidPostId}` });

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/The blog post you are looking for does not exist./i)).toBeInTheDocument();
  });
});
