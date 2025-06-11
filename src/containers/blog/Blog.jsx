import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          {/* You can add blog posts or content here */}
          <h2>Blog Post Title</h2>
          <p>This is a brief description of the blog post.</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
