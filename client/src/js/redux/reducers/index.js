import { combineReducers } from 'redux';
import articles from './articles';
import login from './login';
import signUp from './signUp';

export default combineReducers({
  articles,
  login,
  signUp,
});
