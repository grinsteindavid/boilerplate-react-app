import React from 'react';
import NewsList from './NewsList';

const NewsPage = ({ articles = [] }) => {
  return (
    <div>
      <h1>News Page</h1>
      {articles.length === 0 ? (
        <p>No articles available</p>
      ) : (
        <NewsList articles={articles} />
      )}
    </div>
  );
};

export default NewsPage;