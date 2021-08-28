import React from 'react';
import Calendar from './EventPageComponents/Calendar.jsx';
import Activity from './EventPageComponents/Activity.jsx';
import Trip from './EventPageComponents/Trip.jsx';
import './EventPage.css';

const EventPage = () => (
  <div className="eventPage-container">
    <div className="col-8 eventPage-details">
      <div className="row eventPage-trip">
        <Trip />
      </div>
      <div className="row eventPage-calendar">
        <Calendar />
      </div>
    </div>
    <div className="col-4 eventPage-activity-selector">
      <div className="row eventPage-activity">
        <Activity />
      </div>
    </div>
  </div>
);

export default EventPage;
