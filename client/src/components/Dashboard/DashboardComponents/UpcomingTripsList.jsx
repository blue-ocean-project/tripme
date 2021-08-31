import React, { useState, useEffect } from 'react';
import './Upcoming.css';
import Data from '../../../../../SampleData/Dashboard.js';
import UpcomingTrip from './UpcomingTrip.jsx';

const UpcomingTripsList = () => {
  const [upcoming, updateState] = useState(Data.upcoming);

  return upcoming.map((trip, index) => <UpcomingTrip trip={trip} key={index} />);
};

export default UpcomingTripsList;
