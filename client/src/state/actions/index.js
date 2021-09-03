const actions = {
  storequeryParams: (state) => (dispatch) => {
    dispatch({
      type: 'storeParams',
      payload: state,
    });
  },
  changeToDashboard: () => (dispatch) => {
    dispatch({
      type: 'dashboard',
      payload: true,
    });
  },
  changeToEventPage: () => (dispatch) => {
    dispatch({
      type: 'eventpage',
      payload: false,
    });
  },

  // Login
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

  // Dashboard
  changeTripId: (state) => (dispatch) => {
    dispatch({
      type: 'tripId',
      payload: state,
    });
  },
  getTrip: (state) => (dispatch) => {
    dispatch({
      type: 'getTrip',
      payload: state,
    });
  },
};

module.exports = actions;
