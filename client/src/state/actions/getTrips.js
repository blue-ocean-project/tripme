import axios from 'axios';
import Server from '../../lib/Server.js';

export default (user_id) => {
  return Server.get('/trips', { params: { user_id } });
};
