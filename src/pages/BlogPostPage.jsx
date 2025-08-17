import React from 'react';
import { useParams } from 'react-router-dom';
import logger from '../utils/logger';

// Re-declaring blogPosts here for BlogPostPage as per requirements.
// In a real app, this would likely be a shared data source or API call.
export const blogPosts = [
  {
    id: 'the-unstoppable-force-of-web-development',
    title: 'The Unstoppable Force of Web Development',
    author: 'A.I. Assistant',
    date: 'August 16, 2025',
    excerpt: 'A deep dive into the latest trends shaping the future of front-end development...', 
    content: 'This is the *full content* of the first blog post. It would contain a lot more detailed information, images, and possibly code snippets. This section demonstrates the ability to display a complete article.'
  },
  {
    id: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Comprehensive Guide',
    author: 'Dev Guru',
    date: 'July 20, 2025',
    excerpt: 'Unlock the power of functional components with this in-depth guide to React Hooks...', 
    content: 'This is the *full content* of the second blog post. It covers advanced topics in React Hooks, including custom hooks, performance optimizations, and common pitfalls. Imagine detailed explanations and examples here.'
  },
  {
    id: 'css-in-js-demystified',
    title: 'CSS-in-JS Demystified: Styling React Components',
    author: 'Style Master',
    date: 'June 5, 2025',
    excerpt: 'Explore the various approaches to styling React applications using CSS-in-JS libraries...', 
    content: 'This is the *full content* of the third blog post. It delves into the pros and cons of various CSS-in-JS libraries like Styled Components, Emotion, and JSS, providing practical examples for each.'
  },
  {
    id: 'state-management-patterns',
    title: 'State Management Patterns in Modern React',
    author: 'Data Flow Expert',
    date: 'May 12, 2025',
    excerpt: 'A comparison of popular state management solutions like Redux, Context API, and Zustand...', 
    content: 'This is the *full content* of the fourth blog post. It offers a comparative analysis of different state management patterns, helping developers choose the right solution for their React applications based on complexity and scale.'
  },
  {
    id: 'optimizing-react-performance',
    title: 'Optimizing React Performance: Tips and Tricks',
    author: 'Performance Wiz',
    date: 'April 1, 2025',
    excerpt: 'Learn how to identify and eliminate performance bottlenecks in your React applications...', 
    content: 'This is the *full content* of the fifth blog post. It provides actionable tips and tricks for optimizing the performance of React applications, covering topics like memoization, lazy loading, and virtualized lists.'
  },
];

/**
 * BlogPostPage - Displays the full content of a single blog post.
 * It retrieves the post ID from the URL and displays the corresponding article or a 404 message.
 * @returns {React.Element} Rendered blog post page.
 */
const BlogPostPage = () => {
  logger.info('Rendering BlogPostPage component');
  const { id } = useParams();

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    logger.warn(`Blog post with ID ${id} not found.`);
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 Not Found</h1>
        <p className="text-xl text-gray-700">The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  logger.debug('Displaying blog post', { postId: post.id, postTitle: post.title });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-600 text-sm mb-4">
        By <span className="font-semibold">{post.author}</span> on {post.date}
      </p>
      <div className="prose lg:prose-xl max-w-none leading-relaxed text-gray-800">
        {/* In a real application, content might be parsed from Markdown/HTML */}
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPostPage;
