const reducer = (state, action) => {
  console.log('state before switch: ', state);
  switch (action.type) {
    case 'login':
      console.log('state from reducer: ', state);
      return state;
    case 'logout':
      console.log('logout reducer: ', state);
      return null;
    default:
      console.log('default reducer: ', state);
      return null;
  }
};

export default reducer;
