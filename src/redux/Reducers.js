import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import posts from '../posts/reducers/PostReducer';
import comments from '../comments/reducers/CommentReducer';

const reducers = {
  routing,
  comments,
  posts
};

export default combineReducers(reducers);
