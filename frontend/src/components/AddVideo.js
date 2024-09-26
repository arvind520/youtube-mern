// src/components/AddVideo.js
import React, { useState } from 'react';
import axios from 'axios';

const AddVideo = () => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(url, title)
    try {
      await axios.post('http://localhost:5000/api/videos', { url, title });
      alert('Video added successfully');
      setUrl('');
      setTitle('');
    } catch (err) {
      console.error(err);
      console.log('Failed to add video');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="YouTube Video URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit">Add Video</button>
    </form>
  );
};

export default AddVideo;