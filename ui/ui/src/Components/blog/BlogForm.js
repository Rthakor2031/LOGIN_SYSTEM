import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    tags: ''
  });
  const { id } = useParams(); // For update mode

  const { title, content, tags } = formData;

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
          setFormData({ title: res.data.title, content: res.data.content, tags: res.data.tags.join(', ') });
        } catch (err) {
          console.error(err.response.data.error);
        }
      };
      fetchBlog();
    }
  }, [id]);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:5000/api/blogs/${id}`, formData, { withCredentials: true });
        alert('Blog updated successfully');
      } else {
        await axios.post('http://localhost:5000/api/blogs', formData, { withCredentials: true });
        alert('Blog created successfully');
      }
    } catch (err) {
      console.error(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={title} onChange={onChange} placeholder="Title" required />
      <textarea name="content" value={content} onChange={onChange} placeholder="Content" required></textarea>
      <input type="text" name="tags" value={tags} onChange={onChange} placeholder="Tags (comma-separated)" />
      <button type="submit">{id ? 'Update Blog' : 'Create Blog'}</button>
    </form>
  );
};

export default BlogForm;
