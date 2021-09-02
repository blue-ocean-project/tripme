const reducer = (state = 'step1', action) => {
  switch (action.type) {
    case 'step1':
      return 'step1';
    case 'step2':
      return 'step2';
    default:
      return state;
  }
};

export default reducer;
