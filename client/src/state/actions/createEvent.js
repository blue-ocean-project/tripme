import Server from '../../lib/Server';

export default (name, destination, start_date, end_date) => {
  return Server.post('/trips', {
    name: name,
    destination: destination,
    start_date,
    end_date,
  });
};
