import Server from '../../lib/Server';

export default (user_id) => {
  return Server.get('/trips', { params: { user_id } });
};
