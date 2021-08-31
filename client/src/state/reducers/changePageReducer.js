const reducer = (state = true, action) => {
  switch (action.type) {
    case 'dashboard':
      return true;
    case 'eventpage':
      return false;
    case 'switch':
      return !state;
    default:
      return state;
  }
};

export default reducer;
