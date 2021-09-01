import { combineReducers } from 'redux';
import {
  isAddActivityModalOpenReducer,
  activitiesReducer,
  createNewActivityReducer,
  isActivityDetailModalOpenReducer,
  leaveNewCommentReducer,
  isLeaveNewCommentModalOpenReducer,
  isAddToCalendarModalOpenReducer,
} from './activitiesReducer';
import changePageReducer from './changePageReducer';

const rootReducer = combineReducers({
  // Activity Reducers
  activities: activitiesReducer,
  isAddActivityModalOpen: isAddActivityModalOpenReducer,
  isActivityDetailModalOpen: isActivityDetailModalOpenReducer,
  isLeaveNewCommentModalOpen: isLeaveNewCommentModalOpenReducer,
  isAddToCalendarModalOpen: isAddToCalendarModalOpenReducer,
  createNewActivity: createNewActivityReducer,
  leaveNewComment: leaveNewCommentReducer,

  changePage: changePageReducer,
});

export default rootReducer;
