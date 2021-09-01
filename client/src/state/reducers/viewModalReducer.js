const reducer = (state = false, action) => {
  switch (action.type) {
    case 'openModal':
      return true;
    case 'closeModal':
      return false;
    default:
      return state;
  }
};

export default reducer;
