const reducer = (state = null, action) => {
  switch (action.type) {
    case 'login':
      return state;
    case 'logout':
      return null;
    default:
      return state;
  }
};

export default reducer;
