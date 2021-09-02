import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Upcoming.css';
import Data from '../../../../../SampleData/Dashboard.js';
import getTrips from '../../../state/actions/getTrips.js';
import UpcomingTrip from './UpcomingTrip.jsx';

const UpcomingTripsList = () => {
  const localState = useSelector((states) => states.getTrip);

  const [upcoming, updateState] = useState([]);

  useEffect(() => {
    getTrips(6)
      .then((results) => {
        updateState(results.data.upcoming);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return upcoming.map((trip, index) => <UpcomingTrip trip={trip} key={index} />);
};

export default UpcomingTripsList;
