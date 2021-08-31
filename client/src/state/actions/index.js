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
};

module.exports = actions;
