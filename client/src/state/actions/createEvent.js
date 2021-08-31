import axios from 'axios';
import URL from '../../../../config.js';

export default (name, destination, start_date, end_date) => {
  const url = URL;
  return axios.post(`${url}\trips`, {
    name: name,
    destination: destination,
    start_date: start_date,
    end_date: end_date,
  });
};
