const sampleActivityList = [
  {
    id: 1,
    type: 'concert',
    title: 'Coldplay Tour Concert',
    State: 120,
    trip_id: 1,
  },
  {
    id: 2,
    type: 'self care',
    title: 'Thai Message',
    start_time: '2019-01-13T00:00:00.000Z',
    end_time: '2019-01-13T00:00:00.000Z',
    trip_id: 1,
  },
  {
    id: 3,
    type: 'shopping',
    title: 'local shopping center',
    start_time: '2019-01-13T00:00:00.000Z',
    end_time: '2019-01-13T00:00:00.000Z',
    trip_id: 1,
  },
  {
    id: 4,
    type: 'sightseeing',
    title: 'Central Musume',
    start_time: '2019-01-13T00:00:00.000Z',
    end_time: '2019-01-13T00:00:00.000Z',
    trip_id: 1,
  },
  {
    id: 5,
    type: 'workout',
    title: 'hotel gym',
    start_time: '2019-01-13T00:00:00.000Z',
    end_time: '2019-01-13T00:00:00.000Z',
    trip_id: 1,
  },
  {
    id: 6,
    type: 'movie',
    title: 'Highland park movie theater',
    start_time: '2019-01-13T00:00:00.000Z',
    end_time: '2019-01-13T00:00:00.000Z',
    trip_id: 1,
  },
  {
    id: 7,
    type: 'amusement',
    title: 'DisneyLand',
    start_time: '2019-01-13T00:00:00.000Z',
    end_time: '2019-01-13T00:00:00.000Z',
    trip_id: 1,
  },
  {
    id: 8,
    type: 'dining',
    name: 'Mozal',
    start_time: '2019-01-13T00:00:00.000Z',
    end_time: '2019-01-13T00:00:00.000Z',
    trip_id: 1,
  },
  {
    id: 9,
    type: 'other',
    title: 'chilling at rooftop',
    start_time: '2019-01-13T00:00:00.000Z',
    end_time: '2019-01-13T00:00:00.000Z',
    trip_id: 1,
  },
];

export const activitiesReducer = (state = sampleActivityList, action) => {
  switch (action.type) {
    case 'FETCH_ACTIVITIES':
      return action.payload;
    default:
      return state;
  }
};

export const isAddActivityModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_ACTIVITY_MODAL':
      return !state;
    default:
      return state;
  }
};

export const newActivityReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_NEW_ACTIVITY':
      return action.payload;
    default:
      return state;
  }
};

export const leaveNewCommentReducer = (state = '', action) => {
  switch (action.type) {
    case 'LEAVE_NEW_COMMENT':
      return action.payload;
    default:
      return state;
  }
};

export const isActivityDetailModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTIVITY_DETAIL_MODAL':
      return !state;
    default:
      return state;
  }
};

export const isLeaveNewCommentModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LEAVE_COMMENT_MODAL':
      return !state;
    default:
      return state;
  }
};

export const isAddToCalendarModalOpenReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_TO_CALENDAR_MODAL':
      return !state;
    default:
      return state;
  }
};

export const currentActivityReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CURRENT_ACTIVITY':
      return action.item;
    default:
      return state;
  }
};

export const activityIdAddToCalendarReducer = (state = '', action) => {
  switch (action.type) {
    case 'ACTIVITY_ID_ADD_TO_CALENDAR':
      return action.id;
    default:
      return state;
  }
};
