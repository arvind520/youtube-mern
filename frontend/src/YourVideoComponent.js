import React, { useContext } from 'react';
import AuthContext from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

const YourVideoComponent = () => {
    const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    // Optionally redirect to login or home
    navigate('/login');
  };

  return (
    <div>
      <h1>Your Video Component</h1>
      <button onClick={handleLogout}>Logout</button>
      <div className="container my-5">
        <h2 className="text-center">Watch My YouTube Video!</h2>
        <div className="embed-responsive embed-responsive-16by9">
          {/* <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            allowFullScreen
            title="YouTube video player"
          ></iframe> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vfQzKHfrzhg?si=PGUGU2fh_lWvz_wT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YourVideoComponent;
