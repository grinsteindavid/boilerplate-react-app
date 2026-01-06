import React from 'react';
import PropTypes from 'prop-types';

const NewsArticle = ({ title, content, author, date }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>
        <strong>{author}</strong> - {date}
      </p>
    </div>
  );
};

NewsArticle.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NewsArticle;