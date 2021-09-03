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
import checkqueryParams from './checkqueryParamsReducer';
import changePageReducer from './changePageReducer';
import viewModalReducer from './viewModalReducer';
import modalStepReducer from './modalStepReducer';
import currentUserReducer from './currentUserReducer';
import verificationModalReducer from './verificationModalReducer';
import getTripReducer from './getTripReducer';
import changeTripIdReducer from './changeTripIdReducer';

const rootReducer = combineReducers({
  // App Reducers
  queryParams: checkqueryParams,

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

  // Login Reducers
  changePage: changePageReducer,
  viewModal: viewModalReducer,
  modalStep: modalStepReducer,
  user: currentUserReducer,
  viewVerificationModal: verificationModalReducer,

  // Dashboard Reducers
  getTrip: getTripReducer,
  tripId: changeTripIdReducer,
});

export default rootReducer;
