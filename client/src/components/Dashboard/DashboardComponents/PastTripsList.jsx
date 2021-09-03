import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Past.css';
import Data from '../../../../../SampleData/Dashboard.js';
import getTrips from '../../../state/actions/getTrips.js';
import PastTrip from './PastTrip.jsx';

const PastTripList = () => {
  const [past, updateState] = useState([]);

  var user = useSelector((states) => states.user);

  if (user !== null) {
    var user_id = user.user_id;
  } else {
    var user_id = 1;
  }

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
