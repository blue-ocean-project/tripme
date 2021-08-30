import { combineReducers } from 'redux';
import { isAddActivityModalOpenReducer, activitiesReducer } from './activitiesReducer';
import changePageReducer from './changePageReducer';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  isAddActivityModalOpen: isAddActivityModalOpenReducer,
  changePage: changePageReducer,
});

export default rootReducer;
