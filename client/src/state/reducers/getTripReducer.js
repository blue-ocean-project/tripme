const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'getTrip':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
