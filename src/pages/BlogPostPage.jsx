import React from 'react';
import { useParams } from 'react-router-dom';
import logger from '../utils/logger';

/**
 * Static blog post data (same as in BlogPage.jsx).
 * In a real application, this would be fetched from an API or CMS.
 */
const blogPosts = [
  {
    id: 'the-unstoppable-force-of-web-development',
    title: 'The Unstoppable Force of Web Development',
    author: 'A.I. Assistant',
    date: 'August 16, 2025',
    excerpt: 'A deep dive into the latest trends shaping the future of front-end development...',
    content: `
      <p>This is the full content of the first blog post. It covers various aspects of modern web development, including new frameworks, tools, and best practices.</p>
      <p>The web development landscape is constantly evolving, with new technologies emerging at a rapid pace. Staying updated with these changes is crucial for any developer.</p>
      <p>Key areas of focus include performance optimization, accessibility, and user experience. Building fast, inclusive, and intuitive web applications is paramount.</p>
    `,
  },
  {
    id: 'the-art-of-clean-code',
    title: 'The Art of Clean Code',
    author: 'Code Master',
    date: 'September 1, 2025',
    excerpt: 'Exploring principles and practices for writing maintainable and readable code...',
    content: `
      <p>Clean code is not just about making your code work; it's about making it understandable and maintainable for others and your future self.</p>
      <p>Adhering to principles like DRY (Don't Repeat Yourself), KISS (Keep It Simple, Stupid), and YAGNI (You Aren't Gonna Need It) can significantly improve code quality.</p>
      <p>Regular refactoring, meaningful variable names, and clear function responsibilities are hallmarks of clean code.</p>
    `,
  },
  {
    id: 'mastering-react-hooks',
    title: 'Mastering React Hooks',
    author: 'React Enthusiast',
    date: 'September 15, 2025',
    excerpt: 'A comprehensive guide to leveraging React Hooks for better state management and side effects...',
    content: `
      <p>React Hooks revolutionized how we write React components, enabling functional components to manage state and side effects.</p>
      <p>Understanding useState, useEffect, useContext, and custom hooks is fundamental for modern React development.</p>
      <p>Hooks promote cleaner, more reusable code and simplify complex component logic, leading to more robust applications.</p>
    `,
  },
  {
    id: 'css-in-depth-flexbox-and-grid',
    title: 'CSS In-Depth: Flexbox and Grid',
    author: 'Style Guru',
    date: 'October 1, 2025',
    excerpt: 'Unlocking the power of modern CSS layout techniques for responsive designs...',
    content: `
      <p>Flexbox and CSS Grid are powerful layout modules that have transformed front-end development, making responsive design much more manageable.</p>
      <p>Flexbox is ideal for one-dimensional layouts (rows or columns), while Grid excels at two-dimensional layouts, providing precise control over rows and columns.</p>
      <p>Combining these two techniques allows for highly flexible and complex layouts that adapt seamlessly to different screen sizes.</p>
    `,
  },
];

/**
 * BlogPostPage component - Displays the full content of a single blog post.
 * It retrieves the post ID from the URL parameters and finds the corresponding post.
 * Displays a "404 Not Found" message if the post is not found.
 * @returns {React.Element} The rendered BlogPostPage.
 */
const BlogPostPage = () => {
  const { id } = useParams();
  logger.info('Rendering BlogPostPage component', { postId: id });

  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    logger.warn('Blog post not found', { postId: id });
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 my-8">404 Not Found</h1>
        <p className="text-lg text-gray-600">The blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-gray-800 my-8 leading-tight">
        {post.title}
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        By {post.author} on {post.date}
      </p>
      <div
        className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogPostPage;
