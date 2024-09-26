// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../actions/authActions';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({ username: '', password: '' });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { isAuthenticated, error } = useSelector((state) => state.auth);

//   const { username, password } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleLogin = (e) => {
//     e.preventDefault();
//     dispatch(login(username, password));
//   };

//   // Use useEffect to handle navigation after the state is updated
//   useEffect(() => {
//     if (isAuthenticated) {
//       // Ensure that navigate is called after authentication is successful
//       navigate('/');
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         type="text"
//         name="username"
//         value={username}
//         onChange={onChange}
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={password}
//         onChange={onChange}
//         required
//       />
//       <button type="submit">Login</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Login;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook for redirecting
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password)); // Dispatch login action
  };

  // Redirect to home page if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Redirect to home page
    }
  }, [isAuthenticated, navigate]); // Dependency array ensures this runs when isAuthenticated changes

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>} {/* Show error if there is one */}
    </div>
  );
};

export default Login;
