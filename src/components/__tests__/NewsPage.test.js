import React from 'react';
import { render } from '@testing-library/react';
import NewsPage from '../NewsPage';

describe('NewsPage', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<NewsPage />);
    expect(getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders message when no articles are available', () => {
    const { getByText } = render(<NewsPage articles={[]} />);
    expect(getByText(/no articles available/i)).toBeInTheDocument();
  });

  test('renders articles when provided', () => {
    const articles = [
      { id: 1, title: 'Test Article 1', content: 'Content 1', author: 'Author 1', date: '2023-10-01' },
    ];
    const { getByText } = render(<NewsPage articles={articles} />);
    expect(getByText(/test article 1/i)).toBeInTheDocument();
  });
});