import { combineReducers } from 'redux';
import {
  isAddActivityModalOpenReducer,
  activitiesReducer,
  createNewActivityReducer,
} from './activitiesReducer';
import changePageReducer from './changePageReducer';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  isAddActivityModalOpen: isAddActivityModalOpenReducer,
  createNewActivity: createNewActivityReducer,
  changePage: changePageReducer,
});

export default rootReducer;
