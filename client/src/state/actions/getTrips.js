import axios from 'axios';
import Server from '../../lib/Server.js';

console.log('base url', Server);

export default (user_id) => {
  return Server.get('/trips', { params: { user_id } });
};
