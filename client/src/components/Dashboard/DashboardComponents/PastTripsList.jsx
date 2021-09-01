import React, { useState } from 'react';
import './Past.css';
import Data from '../../../../../SampleData/Dashboard.js';
import PastTrip from './PastTrip.jsx';

const PastTripList = () => {
  const [past, updateState] = useState(Data.past);

  return past.map((trip, index) => <PastTrip trip={trip} key={index} />);
};

export default PastTripList;
