import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';

const YourVideoComponent = () => {
    const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div>
      <h1>Your Video Component</h1>
      <button onClick={handleLogout}>Logout</button>
      <div className="container my-5">
        <h2 className="text-center">Watch My YouTube Video!</h2>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vfQzKHfrzhg?si=PGUGU2fh_lWvz_wT"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YourVideoComponent;
