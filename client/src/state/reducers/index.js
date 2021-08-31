import { combineReducers } from 'redux';
import {
  isAddActivityModalOpenReducer,
  activitiesReducer,
  createNewActivityReducer,
  isActivityDetailModalOpenReducer,
} from './activitiesReducer';
import changePageReducer from './changePageReducer';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  isAddActivityModalOpen: isAddActivityModalOpenReducer,
  isActivityDetailModalOpen: isActivityDetailModalOpenReducer,
  createNewActivity: createNewActivityReducer,
  changePage: changePageReducer,
});

export default rootReducer;
