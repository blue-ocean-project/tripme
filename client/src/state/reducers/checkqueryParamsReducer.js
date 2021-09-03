const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'checkParams':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
