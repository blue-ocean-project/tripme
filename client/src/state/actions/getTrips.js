import axios from 'axios';
import URL from '../../../../config.js';

export default (user_id) => {
  const url = URL;
  return axios.get(`${url}/trips`, { params: { user_id } });
};
