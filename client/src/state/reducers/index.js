import { combineReducers } from 'redux';
import { isAddActivityModalOpenReducer, activitiesReducer } from './activitiesReducer';

const rootReducer = combineReducers({
  activities: activitiesReducer,
  isAddActivityModalOpen: isAddActivityModalOpenReducer,
});

export default rootReducer;
