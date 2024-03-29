import {combineReducers} from 'redux';
import PostsReducer from './reducer.posts';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
