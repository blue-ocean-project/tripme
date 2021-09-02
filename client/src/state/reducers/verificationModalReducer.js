const reducer = (state = false, action) => {
  switch (action.type) {
    case 'openVerifyModal':
      return true;
    case 'closeVerifyModal':
      return false;
    default:
      return state;
  }
};

export default reducer;
