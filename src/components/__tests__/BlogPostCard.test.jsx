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
    date: 'January 1, 2024',
    excerpt: 'This is a short excerpt for the test post.',
  };

  beforeEach(() => {
    logger.debug('BlogPostCard test setup: Rendering component');
    render(<BlogPostCard post={mockPost} />);
  });

  afterEach(() => {
    logger.debug('BlogPostCard test cleanup: Clearing mocks');
    jest.clearAllMocks();
  });

  test('renders post title, author, date, and excerpt', () => {
    logger.debug('Checking for title, author, date, excerpt');
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    const authorDateElement = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'p' && element.textContent.includes(`By ${mockPost.author}`) && element.textContent.includes(`on ${mockPost.date}`);
    });
    expect(authorDateElement).toBeInTheDocument();
    expect(screen.getByText(mockPost.excerpt)).toBeInTheDocument();
  });

  test('renders a "Read More" link with correct href', () => {
    logger.debug('Checking for "Read More" link');
    const readMoreLink = screen.getByRole('link', { name: /read more/i });
    expect(readMoreLink).toBeInTheDocument();
    expect(readMoreLink).toHaveAttribute('href', `/blog/${mockPost.id}`);
  });

  test('logs debug message on render', () => {
    logger.debug('Verifying logger.debug call');
    expect(logger.debug).toHaveBeenCalledWith(
      'Rendering BlogPostCard',
      { postId: mockPost.id, postTitle: mockPost.title }
    );
  });
});