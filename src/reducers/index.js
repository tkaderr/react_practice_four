import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostsReducer from './reducer_post';

//have to hook formReducer to form keyword
const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
