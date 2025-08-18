import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BlogPostCard from '../BlogPostCard';

describe('BlogPostCard', () => {
  const mockPost = {
    id: 'test-post',
    title: 'Test Post Title',
    author: 'Test Author',
    date: 'January 1, 2025',
    excerpt: 'This is a short excerpt for the test post.',
    content: 'Full content of the test post.',
  };

  test('renders post details correctly', () => {
    render(
      <Router>
        <BlogPostCard post={mockPost} />
      </Router>
    );

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(`By ${mockPost.author} on ${mockPost.date}`)).toBeInTheDocument();
    expect(screen.getByText(mockPost.excerpt)).toBeInTheDocument();
  });

  test('renders a "Read More" link with correct href', () => {
    render(
      <Router>
        <BlogPostCard post={mockPost} />
      </Router>
    );

    const readMoreLink = screen.getByRole('link', { name: /Read More/i });
    expect(readMoreLink).toBeInTheDocument();
    expect(readMoreLink).toHaveAttribute('href', `/blog/${mockPost.id}`);
  });
});
