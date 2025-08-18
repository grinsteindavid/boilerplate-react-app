import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BlogPage from '../BlogPage';

// Mock the BlogPostCard component to simplify testing BlogPage
jest.mock('../../components/BlogPostCard', () => {
  return ({ post }) => (
    <div data-testid="blog-post-card">{post.title}</div>
  );
});

describe('BlogPage', () => {
  test('renders the blog page title', () => {
    render(
      <Router>
        <BlogPage />
      </Router>
    );
    expect(screen.getByText(/Our Blog/i)).toBeInTheDocument();
  });

  test('renders a list of blog post cards', () => {
    render(
      <Router>
        <BlogPage />
      </Router>
    );
    const blogPostCards = screen.getAllByTestId('blog-post-card');
    expect(blogPostCards.length).toBeGreaterThanOrEqual(3);
    expect(blogPostCards.length).toBeLessThanOrEqual(5);
  });

  test('each blog post card displays a title', () => {
    render(
      <Router>
        <BlogPage />
      </Router>
    );
    expect(screen.getByText(/The Unstoppable Force of Web Development/i)).toBeInTheDocument();
    expect(screen.getByText(/The Art of Clean Code/i)).toBeInTheDocument();
    expect(screen.getByText(/Mastering React Hooks/i)).toBeInTheDocument();
  });
});
