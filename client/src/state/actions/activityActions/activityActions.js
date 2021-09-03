import Server from '../../../lib/Server.js';

export const toggleAddActivityModal = () => ({ type: 'TOGGLE_ADD_ACTIVITY_MODAL' });

export const toggleActivityDetailModal = () => ({ type: 'TOGGLE_ACTIVITY_DETAIL_MODAL' });

export const toggleAddToCalendarModal = () => ({ type: 'TOGGLE_ADD_TO_CALENDAR_MODAL' });

export const toggleLeaveCommentModal = () => ({
  type: 'TOGGLE_LEAVE_COMMENT_MODAL',
});

export const fetchActivities = (tripId) => async (dispatch) => {
  try {
    const result = await Server.get(`/activities/trips/${tripId}`);
    dispatch({ type: 'FETCH_ACTIVITIES', payload: result.data });
  } catch (e) {
    console.log(e);
  }
};

export const createNewActivity = (tripId, type, title, description) => async () => {
  try {
    const postNewActivity = await Server.post(`activities/trips/${tripId}`, {
      type,
      title,
      description,
    });
  } catch (e) {
    console.log(e);
  }
};

export const CreateNewComment = () => (payload) => ({
  type: 'LEAVE_NEW_COMMENT',
  payload,
});

export const setCurrentActivity = (item) => ({
  type: 'SET_CURRENT_ACTIVITY',
  item,
});

export const addToCalendarId = (id) => ({
  type: 'ACTIVITY_ID_ADD_TO_CALENDAR',
  id,
});

export const addActivityToCalendar =
  (activityIdAddToCalendar, startTime, endTime, title) => async () => {
    try {
      await Server.patch(`activities/${activityIdAddToCalendar}`, {
        start_time: startTime,
        end_time: endTime,
        title: title,
      });
      console.log(activityIdAddToCalendar, startTime, endTime, title);
    } catch (e) {
      console.log(e);
    }
  };

export const updateActivity = (activityId, type, title, description) => {
  console.log(activityId, type, title, description);
  Server.patch(`activities/${activityId}`, {
    type,
    title,
    description,
  }).catch((e) => console.log(e));
};

export const leaveNewComment = (activityId, userId, commentBody) => async () => {
  try {
    await Server.post(`/comments/activities/${activityId}`, {
      body: commentBody,
      user_id: userId,
    });
    console.log(activityId, userId, commentBody);
  } catch (e) {
    console.log(e);
  }
};
