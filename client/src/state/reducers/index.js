import { combineReducers } from 'redux';
import {
  isAddActivityModalOpenReducer,
  activitiesReducer,
  currentActivityReducer,
  activityIdAddToCalendarReducer,
  newActivityReducer,
  isActivityDetailModalOpenReducer,
  leaveNewCommentReducer,
  isLeaveNewCommentModalOpenReducer,
  isAddToCalendarModalOpenReducer,
} from './activitiesReducer';
import changePageReducer from './changePageReducer';
import viewModalReducer from './viewModalReducer';
import modalStepReducer from './modalStepReducer';
import currentUserReducer from './currentUserReducer';

const rootReducer = combineReducers({
  // Activity Reducers
  activities: activitiesReducer,
  currentActivity: currentActivityReducer,
  activityIdAddToCalendar: activityIdAddToCalendarReducer,
  isAddActivityModalOpen: isAddActivityModalOpenReducer,
  isActivityDetailModalOpen: isActivityDetailModalOpenReducer,
  isLeaveNewCommentModalOpen: isLeaveNewCommentModalOpenReducer,
  isAddToCalendarModalOpen: isAddToCalendarModalOpenReducer,
  newActivity: newActivityReducer,
  leaveNewComment: leaveNewCommentReducer,

  //Login Reducers
  changePage: changePageReducer,
  viewModal: viewModalReducer,
  modalStep: modalStepReducer,
  user: currentUserReducer,
});

export default rootReducer;
