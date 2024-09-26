import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';



// Register User
export const register = (username, password) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/register', { username, password });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    // Optionally, log the user in immediately after registration
    dispatch(login(username, password));
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// Login User
export const login = (username, password) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:5000/api/login', { username, password });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data, // Assuming res.data contains the token and user info
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// Logout User
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
