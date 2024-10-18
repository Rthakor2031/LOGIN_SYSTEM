import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error(err.response.data.error);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <p>Author: {blog.author.username}</p>
      <p>Tags: {blog.tags.join(', ')}</p>
    </div>
  );
};

export default BlogDetails;
