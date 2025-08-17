import React from 'react';
import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import BlogPostPage, { blogPosts } from '../BlogPostPage';
import logger from '../../utils/logger';

// Mock useParams hook
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

// Mock the logger to prevent console output during tests
jest.mock('../../utils/logger', () => ({
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}));

describe('BlogPostPage', () => {
  const mockPosts = [
    {
      id: 'the-unstoppable-force-of-web-development',
      title: 'Test Post Title 1',
      author: 'Author One',
      date: 'Jan 1, 2024',
      excerpt: 'Excerpt 1',
      content: 'Full content of test post 1.',
    },
    {
      id: 'test-post-2',
      title: 'Test Post Title 2',
      author: 'Author Two',
      date: 'Feb 2, 2024',
      excerpt: 'Excerpt 2',
      content: 'Full content of test post 2.',
    },
  ];

  beforeEach(() => {
    // Reset mock before each test
    useParams.mockReset();
    logger.debug('BlogPostPage test setup: Resetting mocks');
  });

  afterEach(() => {
    logger.debug('BlogPostPage test cleanup: Clearing mocks');
    jest.clearAllMocks();
  });

  test('renders the full blog post content for a valid ID', () => {
    logger.debug('Testing valid post ID');
    useParams.mockReturnValue({ id: blogPosts[0].id });
    render(<BlogPostPage />);

    expect(screen.getByText(blogPosts[0].title)).toBeInTheDocument();
    const authorDateElement = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'p' && element.textContent.includes(`By ${blogPosts[0].author}`) && element.textContent.includes(`on ${blogPosts[0].date}`);
    });
    expect(authorDateElement).toBeInTheDocument();
    expect(screen.getByText(blogPosts[0].content)).toBeInTheDocument();
    expect(logger.info).toHaveBeenCalledWith('Rendering BlogPostPage component');
    expect(logger.debug).toHaveBeenCalledWith('Displaying blog post', { postId: blogPosts[0].id, postTitle: blogPosts[0].title });
  });

  test('renders "404 Not Found" for an invalid ID', () => {
    logger.debug('Testing invalid post ID');
    useParams.mockReturnValue({ id: 'non-existent-post' });
    render(<BlogPostPage />);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('The blog post you are looking for does not exist.')).toBeInTheDocument();
    expect(logger.info).toHaveBeenCalledWith('Rendering BlogPostPage component');
    expect(logger.warn).toHaveBeenCalledWith('Blog post with ID non-existent-post not found.');
  });
});
