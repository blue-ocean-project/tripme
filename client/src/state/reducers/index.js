import { combineReducers } from 'redux';
import changePageReducer from './changePageReducer';

const rootReducer = combineReducers({
  changePage: changePageReducer,
});

export default rootReducer;
