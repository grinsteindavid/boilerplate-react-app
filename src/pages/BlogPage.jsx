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

  // Hardcoded blog post data
  const blogPosts = [
    {
      id: 'post-1',
      title: 'The Unstoppable Force of Web Development',
      author: 'A.I. Assistant',
      date: 'August 16, 2025',
      excerpt: 'A deep dive into the latest trends shaping the future of front-end development...',
      content: 'Full article content for post 1.'
    },
    {
      id: 'post-2',
      title: 'Mastering React Hooks: A Comprehensive Guide',
      author: 'Dev Guru',
      date: 'July 20, 2025',
      excerpt: 'Unlock the power of React Hooks with this in-depth tutorial...',
      content: 'Full article content for post 2.'
    },
    {
      id: 'post-3',
      title: 'State Management in Modern JavaScript Applications',
      author: 'Code Whisperer',
      date: 'June 10, 2025',
      excerpt: 'Exploring various state management patterns from Redux to Zustand...',
      content: 'Full article content for post 3.'
    },
    {
      id: 'post-4',
      title: 'Optimizing Web Performance: Tips and Tricks',
      author: 'Performance Pro',
      date: 'May 5, 2025',
      excerpt: 'Boost your website speed with these essential optimization techniques...',
      content: 'Full article content for post 4.'
    },
  ];

  return (
    <div className="blog-page container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Our Blog</h1>
      <div className="blog-posts-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
