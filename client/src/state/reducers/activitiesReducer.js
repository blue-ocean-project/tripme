const sampleActivityList = [
  {
    id: 1,
    type: 'concert',
    name: 'Coldplay Tour Concert',
    duration: 120,
    trip_id: 1,
  },
  {
    id: 2,
    type: 'sightseeing',
    name: 'Central Musume',
    duration: 180,
    trip_id: 1,
  },
  {
    id: 3,
    type: 'shopping',
    name: 'local shopping center',
    duration: 120,
    trip_id: 1,
  },
  {
    id: 4,
    type: 'sightseeing',
    name: 'Central Musume',
    duration: 180,
    trip_id: 1,
  },
  {
    id: 5,
    type: 'shopping',
    name: 'local shopping center',
    duration: 120,
    trip_id: 1,
  },
];

export const activitiesReducer = (state = sampleActivityList, action) => {
  switch (action.type) {
    case 'FETCH_ACTIVITY':
      return action.payload;
    default:
      return state;
  }
};

export const isAddActivityModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTIVITY_MODAL':
      return !state;
    default:
      return state;
  }
};
