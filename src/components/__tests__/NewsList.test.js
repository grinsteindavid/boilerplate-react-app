import React from 'react';
import { render } from '@testing-library/react';
import NewsList from '../NewsList';

describe('NewsList', () => {
  const articles = [
    { id: 1, title: 'Article 1', content: 'Content 1', author: 'Author 1', date: '2023-10-01' },
    { id: 2, title: 'Article 2', content: 'Content 2', author: 'Author 2', date: '2023-10-02' },
  ];

  test('renders loading state', () => {
    const { getByText } = render(<NewsList loading={true} />);
    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders articles correctly', () => {
    const { getByText } = render(<NewsList articles={articles} />);
    expect(getByText(/article 1/i)).toBeInTheDocument();
    expect(getByText(/article 2/i)).toBeInTheDocument();
  });

  test('renders error message on fetch failure', () => {
    const { getByText } = render(<NewsList error="Failed to fetch articles." />);
    expect(getByText(/failed to fetch articles/i)).toBeInTheDocument();
  });
});