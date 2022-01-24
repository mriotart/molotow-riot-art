import * as React from 'react';
import Layout from '../components/layout'
import BlogEntries from '../components/blog-entries';

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="Blog Posts">
      <div id='newestBlogEntriesSection' className='main-section-container'>
        <div className='main-section-title'>
          <span>Blog</span> Posts
        </div>
        <BlogEntries limitResults={100}></BlogEntries>
      </div>
    </Layout>
  )
}

export default BlogPage