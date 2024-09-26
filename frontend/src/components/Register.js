import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(username, password));
  };

  // Use useEffect to handle navigation after the state is updated
  useEffect(() => {
    if (isAuthenticated) {
      // Ensure that navigate is called after authentication is successful
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChange}
        required
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        required
      />
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Register;

