import React from 'react';
import NewsArticle from './NewsArticle';
import PropTypes from 'prop-types';

const NewsList = ({ articles = [], loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {articles.map(article => (
        <NewsArticle key={article.id} {...article} />
      ))}
    </div>
  );
};

NewsList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default NewsList;