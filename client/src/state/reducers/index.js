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
import viewModalReducer from './viewModalReducer';
import modalStepReducer from './modalStepReducer';
import currentUserReducer from './currentUserReducer';
import getTripReducer from './getTripReducer';

const rootReducer = combineReducers({
  // Activity Reducers
  activities: activitiesReducer,
  isAddActivityModalOpen: isAddActivityModalOpenReducer,
  isActivityDetailModalOpen: isActivityDetailModalOpenReducer,
  isLeaveNewCommentModalOpen: isLeaveNewCommentModalOpenReducer,
  isAddToCalendarModalOpen: isAddToCalendarModalOpenReducer,
  createNewActivity: createNewActivityReducer,
  leaveNewComment: leaveNewCommentReducer,

  // Login Reducers
  changePage: changePageReducer,
  viewModal: viewModalReducer,
  modalStep: modalStepReducer,
  user: currentUserReducer,

  // Dashboard Reducers
  getTrip: getTripReducer,
});

export default rootReducer;
