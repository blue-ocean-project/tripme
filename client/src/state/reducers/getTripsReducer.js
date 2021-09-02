const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'getTrips':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
