const actions = {
  changeToDashboard: (state) => (dispatch) => {
    dispatch({
      type: 'dashboard',
      payload: state,
    });
  },
  changeToEventPage: (state) => (dispatch) => {
    dispatch({
      type: 'eventpage',
      payload: state,
    });
  },
  changePage: (state) => (dispatch) => {
    dispatch({
      type: 'switch',
      payload: !state,
    });
  },
  openModal: (state) => (dispatch) => {
    dispatch({
      type: 'openModal',
      payload: state,
    });
  },
  closeModal: (state) => (dispatch) => {
    dispatch({
      type: 'closeModal',
      payload: state,
    });
  },
  signupNextStep: (state) => (dispatch) => {
    dispatch({
      type: 'step2',
      payload: state,
    });
  },
  resetStep: (state) => (dispatch) => {
    dispatch({
      type: 'step1',
      payload: state,
    });
  },
  login: (state) => (dispatch) => {
    dispatch({
      type: 'login',
      payload: state,
    });
  },
  logout: (state) => (dispatch) => {
    dispatch({
      type: 'logout',
      payload: state,
    });
  },
  openVerificationModal: (state) => (dispatch) => {
    dispatch({
      type: 'openVerifyModal',
      payload: state,
    });
  },
  closeVerificationModal: (state) => (dispatch) => {
    dispatch({
      type: 'closeVerifyModal',
      payload: state,
    });
  },
};

module.exports = actions;
