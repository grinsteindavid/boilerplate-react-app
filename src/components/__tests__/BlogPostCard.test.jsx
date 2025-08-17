import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPostCard from '../BlogPostCard';
import logger from '../../utils/logger';

// Mock the logger to prevent console output during tests
jest.mock('../../utils/logger', () => ({
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

describe('BlogPostCard', () => {
  const mockPost = {
    id: 'test-post',
    title: 'Test Post Title',
    author: 'Test Author',
    date: 'January 1, 2025',
    excerpt: 'This is a short excerpt for the test post.',
    content: 'Full content of the test post.',
  };

  beforeEach(() => {
    // Clear mock calls before each test
    logger.debug.mockClear();
  });

  test('renders correctly with all post details', () => {
    logger.debug('Running test: renders correctly with all post details');
    render(<BlogPostCard post={mockPost} />);

    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(`By ${mockPost.author} on ${mockPost.date}`)).toBeInTheDocument();
    expect(screen.getByText(mockPost.excerpt)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /read more/i })).toHaveAttribute('href', `/blog/${mockPost.id}`);

    // Verify logger.debug was called
    expect(logger.debug).toHaveBeenCalledWith('Rendering BlogPostCard', {
      postId: mockPost.id,
      postTitle: mockPost.title,
    });
  });

  test('link points to the correct conceptual route', () => {
    logger.debug('Running test: link points to the correct conceptual route');
    render(<BlogPostCard post={mockPost} />);
    const readMoreLink = screen.getByRole('link', { name: /read more/i });
    expect(readMoreLink).toHaveAttribute('href', `/blog/${mockPost.id}`);
  });
});
