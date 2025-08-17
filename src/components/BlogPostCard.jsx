import React from 'react';
import PropTypes from 'prop-types';
import logger from '../utils/logger';

/**
 * BlogPostCard - Displays a preview of a blog post.
 * @param {Object} props - Component props.
 * @param {Object} props.post - The blog post object containing title, author, date, excerpt, and id.
 * @returns {React.Element} Rendered blog post card.
 */
const BlogPostCard = ({ post }) => {
  logger.debug('Rendering BlogPostCard', { postId: post.id, postTitle: post.title });

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 text-sm mb-2">
        By <span className="font-semibold">{post.author}</span> on {post.date}
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">{post.excerpt}</p>
      {/* Conceptual link to the full article */}
      <a href={`/blog/${post.id}`} className="text-blue-600 hover:underline font-medium">
        Read More
      </a>
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