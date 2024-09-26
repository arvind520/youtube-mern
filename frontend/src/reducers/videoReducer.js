import { ADD_VIDEO, FETCH_VIDEOS, VIDEO_ERROR } from '../actions/types';

const initialState = {
  videos: [],
  loading: true,
  error: null,
};

export default function videoReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_VIDEO:
      return {
        ...state,
        videos: [...state.videos, payload],
        loading: false,
        error: null,
      };
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: payload,
        loading: false,
        error: null,
      };
    case VIDEO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
