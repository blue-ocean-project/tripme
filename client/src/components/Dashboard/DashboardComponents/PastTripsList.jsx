import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Past.css';
import Data from '../../../../../SampleData/Dashboard.js';
import getTrips from '../../../state/actions/getTrips.js';
import PastTrip from './PastTrip.jsx';

const PastTripList = () => {
  const [past, updateState] = useState([]);

  const user_id = useSelector((states) => states.user);

  // const TEMP_USER_ID = 8;

  useEffect(() => {
    getTrips(user_id)
      .then((results) => {
        updateState(results.data.past);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return past.map((trip, index) => {
    const query = `camping+${100 * (index + 1)}`;
    return <PastTrip trip={trip} key={index} query={query} />;
  });
};

export default PastTripList;
