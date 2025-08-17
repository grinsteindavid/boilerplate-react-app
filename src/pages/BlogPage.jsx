import React from 'react';
import BlogPostCard from '../components/BlogPostCard';
import logger from '../utils/logger';

/**
 * BlogPage - Main page component for displaying a list of blog posts.
 * It holds static blog post data and renders BlogPostCard components.
 * @returns {React.Element} Rendered blog page.
 */
const BlogPage = () => {
  logger.info('Rendering BlogPage component');

  // Hardcoded array of blog posts as per requirements
  const blogPosts = [
    {
      id: 'the-unstoppable-force-of-web-development',
      title: 'The Unstoppable Force of Web Development',
      author: 'A.I. Assistant',
      date: 'August 16, 2025',
      excerpt: 'A deep dive into the latest trends shaping the future of front-end development...',
      content: 'Full article content for post 1. This would be a much longer body of text in a real application.'
    },
    {
      id: 'mastering-react-hooks',
      title: 'Mastering React Hooks: A Comprehensive Guide',
      author: 'Dev Guru',
      date: 'July 20, 2025',
      excerpt: 'Unlock the power of functional components with this in-depth guide to React Hooks...',
      content: 'Full article content for post 2. This would be a much longer body of text in a real application.'
    },
    {
      id: 'css-in-js-demystified',
      title: 'CSS-in-JS Demystified: Styling React Components',
      author: 'Style Master',
      date: 'June 5, 2025',
      excerpt: 'Explore the various approaches to styling React applications using CSS-in-JS libraries...',
      content: 'Full article content for post 3. This would be a much longer body of text in a real application.'
    },
    {
      id: 'state-management-patterns',
      title: 'State Management Patterns in Modern React',
      author: 'Data Flow Expert',
      date: 'May 12, 2025',
      excerpt: 'A comparison of popular state management solutions like Redux, Context API, and Zustand...',
      content: 'Full article content for post 4. This would be a much longer body of text in a real application.'
    },
    {
      id: 'optimizing-react-performance',
      title: 'Optimizing React Performance: Tips and Tricks',
      author: 'Performance Wiz',
      date: 'April 1, 2025',
      excerpt: 'Learn how to identify and eliminate performance bottlenecks in your React applications...',
      content: 'Full article content for post 5. This would be a much longer body of text in a real application.'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;