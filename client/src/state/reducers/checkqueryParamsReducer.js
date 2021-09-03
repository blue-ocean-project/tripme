const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'storeParams':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
