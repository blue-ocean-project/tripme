const reducer = (state = true, action) => {
  switch (action.type) {
    case 'dashboard':
      return action.payload;
    case 'eventpage':
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
