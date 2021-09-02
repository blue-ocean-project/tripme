import { combineReducers } from 'redux';
import {
  isAddActivityModalOpenReducer,
  activitiesReducer,
  createNewActivityReducer,
  isActivityDetailModalOpenReducer,
  leaveNewCommentReducer,
  isLeaveNewCommentModalOpenReducer,
} from './activitiesReducer';
import changePageReducer from './changePageReducer';
import viewModalReducer from './viewModalReducer';
import modalStepReducer from './modalStepReducer';
import currentUserReducer from './currentUserReducer';
import verificationModalReducer from './verificationModalReducer';

const rootReducer = combineReducers({
  // Activity Reducers
  activities: activitiesReducer,
  isAddActivityModalOpen: isAddActivityModalOpenReducer,
  isActivityDetailModalOpen: isActivityDetailModalOpenReducer,
  isLeaveNewCommentModalOpen: isLeaveNewCommentModalOpenReducer,
  createNewActivity: createNewActivityReducer,
  leaveNewComment: leaveNewCommentReducer,

  changePage: changePageReducer,
  viewModal: viewModalReducer,
  modalStep: modalStepReducer,
  user: currentUserReducer,
  viewVerificationModal: verificationModalReducer,
});

export default rootReducer;
