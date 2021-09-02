import Server from '../../../lib/Server.js';

export const toggleAddActivityModal = () => ({ type: 'TOGGLE_ADD_ACTIVITY_MODAL' });

export const fetchActivities = (tripId) => async (dispatch) => {
  try {
    const result = await Server.get(`/activities/trips/${tripId}`);
    dispatch({ type: 'FETCH_ACTIVITIES', payload: result.data });
  } catch (e) {
    console.log(e);
  }
};

export const createNewActivity = (tripId, type, title, description) => async () => {
  console.log(tripId);
  console.log(type);
  console.log(title);
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
