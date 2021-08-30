const activitiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH ACTIVITY':
      return action.activities;
    default:
      return state;
  }
};

export default activitiesReducer;
