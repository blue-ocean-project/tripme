import Server from '../../lib/Server';

export default (user_id) => Server.get('/trips', { params: { user_id } });
