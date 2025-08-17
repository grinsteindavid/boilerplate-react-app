import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPage from '../BlogPage';
import logger from '../../utils/logger';

// Mock the BlogPostCard component to isolate BlogPage testing
jest.mock('../../components/BlogPostCard', () => {
  return ({ post }) => (
    <div data-testid="blog-post-card" data-post-id={post.id}>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <a href={`/blog/${post.id}`}>Read More</a>
    </div>
  );
});

// Mock the logger to prevent console output during tests
jest.mock('../../utils/logger', () => ({
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

describe('BlogPage', () => {
  beforeEach(() => {
    // Clear mock calls before each test
    logger.info.mockClear();
  });

  test('renders the main title', () => {
    logger.debug('Running test: renders the main title');
    render(<BlogPage />);
    expect(screen.getByText(/our blog/i)).toBeInTheDocument();

    // Verify logger.info was called
    expect(logger.info).toHaveBeenCalledWith('Rendering BlogPage component');
  });

  test('renders at least 3 blog post cards', () => {
    logger.debug('Running test: renders at least 3 blog post cards');
    render(<BlogPage />);
    const blogPostCards = screen.getAllByTestId('blog-post-card');
    expect(blogPostCards.length).toBeGreaterThanOrEqual(3);
  });

  test('each blog post card receives correct props', () => {
    logger.debug('Running test: each blog post card receives correct props');
    render(<BlogPage />);
    // Check for specific titles from the hardcoded data in BlogPage.jsx
    expect(screen.getByText('The Unstoppable Force of Web Development')).toBeInTheDocument();
    expect(screen.getByText('Mastering React Hooks: A Comprehensive Guide')).toBeInTheDocument();
    expect(screen.getByText('State Management in Modern JavaScript Applications')).toBeInTheDocument();
    expect(screen.getByText('Optimizing Web Performance: Tips and Tricks')).toBeInTheDocument();
  });
});
