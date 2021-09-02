const changeTripIdReducer = (state = {}, action) => {
  switch (action.type) {
    case 'tripId':
      return action.payload;
    default:
      return state;
  }
};

export default changeTripIdReducer;
