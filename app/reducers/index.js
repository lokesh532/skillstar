import {combineReducer} from 'redux';
import questions from './questionReducer';

const rootReducer = combineReducer({
  questions
});

export default rootReducer;
