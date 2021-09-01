import { combineReducers } from 'redux';
import changePageReducer from './changePageReducer';
import viewModalReducer from './viewModalReducer';
import modalStepReducer from './modalStepReducer';
import currentUserReducer from './currentUserReducer';

const rootReducer = combineReducers({
  changePage: changePageReducer,
  viewModal: viewModalReducer,
  modalStep: modalStepReducer,
  user: currentUserReducer,
});

export default rootReducer;
