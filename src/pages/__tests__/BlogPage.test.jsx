import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPage from '../BlogPage';
import BlogPostCard from '../../components/BlogPostCard';
import logger from '../../utils/logger';

// Mock the BlogPostCard component to simplify BlogPage testing
jest.mock('../../components/BlogPostCard', () => {
  const MockBlogPostCard = ({ post }) => (
    <div data-testid="blog-post-card">{post.title}</div>
  );
  return MockBlogPostCard;
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
    logger.debug('BlogPage test setup: Rendering component');
    render(<BlogPage />);
  });

  afterEach(() => {
    logger.debug('BlogPage test cleanup: Clearing mocks');
    jest.clearAllMocks();
  });

  test('renders the main blog title', () => {
    logger.debug('Checking for main blog title');
    expect(screen.getByText(/our blog/i)).toBeInTheDocument();
  });

  test('renders at least 3 BlogPostCard components', () => {
    logger.debug('Checking for BlogPostCard components');
    const blogPostCards = screen.getAllByTestId('blog-post-card');
    expect(blogPostCards.length).toBeGreaterThanOrEqual(3);
  });

  test('logs info message on render', () => {
    logger.debug('Verifying logger.info call');
    expect(logger.info).toHaveBeenCalledWith('Rendering BlogPage component');
  });
});