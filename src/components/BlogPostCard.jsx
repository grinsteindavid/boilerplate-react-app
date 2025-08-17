import React from 'react';
import PropTypes from 'prop-types';
import logger from '../utils/logger';

/**
 * BlogPostCard - Displays a preview of a blog post.
 * @param {Object} props - Component props.
 * @param {Object} props.post - The blog post object containing title, author, date, and excerpt.
 * @returns {React.Element} Rendered blog post card.
 */
const BlogPostCard = ({ post }) => {
  logger.debug('Rendering BlogPostCard', { postId: post.id, postTitle: post.title });

  const { title, author, date, excerpt, id } = post;

  return (
    <div className="blog-post-card p-4 border rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-2">By {author} on {date}</p>
      <p className="text-gray-700 mb-4">{excerpt}</p>
      <a href={`/blog/${id}`} className="text-blue-500 hover:underline">Read More</a>
    </div>
  );
};

BlogPostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPostCard;
