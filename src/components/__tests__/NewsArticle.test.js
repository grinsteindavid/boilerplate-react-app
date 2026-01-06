import React from 'react';
import { render } from '@testing-library/react';
import NewsArticle from '../NewsArticle';

describe('NewsArticle', () => {
  const article = {
    title: 'Test Article',
    content: 'This is a test article.',
    author: 'Author Name',
    date: '2023-10-01',
  };

  test('renders article title', () => {
    const { getByText } = render(<NewsArticle {...article} />);
    expect(getByText(/test article/i)).toBeInTheDocument();
  });

  test('renders article content', () => {
    const { getByText } = render(<NewsArticle {...article} />);
    expect(getByText(/this is a test article/i)).toBeInTheDocument();
  });

  test('renders article author and date', () => {
    const { getByText } = render(<NewsArticle {...article} />);
    expect(getByText(/author name/i)).toBeInTheDocument();
    expect(getByText(/2023-10-01/i)).toBeInTheDocument();
  });
});