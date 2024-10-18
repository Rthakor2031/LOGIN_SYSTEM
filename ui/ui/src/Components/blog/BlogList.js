import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(res.data);
      } catch (err) {
        console.error(err.response.data.error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>Author: {blog.author.username}</p>
          <p>Tags: {blog.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
