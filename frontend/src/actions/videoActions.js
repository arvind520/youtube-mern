import axios from 'axios';
import { ADD_VIDEO, FETCH_VIDEOS, VIDEO_ERROR } from './types';

// Add a new video
export const addVideo = (url, title) => async (dispatch) => {
  try {
    const res = await axios.post('/api/videos', { url, title });

    dispatch({
      type: ADD_VIDEO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: VIDEO_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// Fetch all videos
export const fetchVideos = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/videos');

    dispatch({
      type: FETCH_VIDEOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: VIDEO_ERROR,
      payload: err.response.data.msg,
    });
  }
};
