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
    getTrips(8)
      .then((results) => {
        updateState(results.data.upcoming);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return upcoming.map((trip, index) => {
    const query = `camping+${index}`;
    return <UpcomingTrip trip={trip} key={index} query={query} />;
  });
};

export default UpcomingTripsList;
