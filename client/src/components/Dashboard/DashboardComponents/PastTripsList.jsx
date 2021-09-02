import React, { useState, useEffect } from 'react';
import './Past.css';
import Data from '../../../../../SampleData/Dashboard.js';
import getTrips from '../../../state/actions/getTrips.js';
import PastTrip from './PastTrip.jsx';

const PastTripList = () => {
  const [past, updateState] = useState([]);

  useEffect(() => {
    getTrips(8)
      .then((results) => {
        updateState(results.data.past);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return past.map((trip, index) => <PastTrip trip={trip} key={index} />);
};

export default PastTripList;
