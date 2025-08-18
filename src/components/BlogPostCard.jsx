import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logger from '../utils/logger';

/**
 * BlogPostCard component - Displays a preview of a single blog post.
 * @param {Object} props - Component props.
 * @param {Object} props.post - The blog post object containing title, author, date, excerpt, and id.
 * @returns {React.Element} The rendered BlogPostCard.
 */
const BlogPostCard = ({ post }) => {
  logger.debug('Rendering BlogPostCard', { postId: post.id });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 leading-tight">
            {post.title}
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            By {post.author} on {post.date}
          </p>
          <p className="text-gray-700 text-base mb-4 flex-grow">
            {post.excerpt}
          </p>
        </div>
        <div className="mt-4">
          <Link
            to={`/blog/${post.id}`}
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Read More
          </Link>
        </div>
      </div>
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
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogPostCard;
