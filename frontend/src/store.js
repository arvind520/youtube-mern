import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from "@redux-devtools/extension";

// Import your reducers here
import authReducer from './reducers/authReducer';
import videoReducer from './reducers/videoReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  videos: videoReducer,
  // Add other reducers here
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
