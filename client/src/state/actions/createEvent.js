import axios from 'axios';
import Server from '../../lib/Server.js';

export default (user_id, name, destination, start_date, end_date) => {
  return Server.post('/trips', {
    user_id: user_id,
    name: name,
    destination: destination,
    start_date: start_date,
    end_date,
  });
};
