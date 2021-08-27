import React from 'react';
import './EventPage.css';

const EventPage = () => (
  <div className="eventPage-container">
    <div className="col-8 eventPage-details">
      <div className="row eventPage-trip" />
      <div className="row eventPage-weather" />
      <div className="row eventPage-event-calendar">
        <div className="col-6 eventPage-events" />
        <div className="col-6 eventPage-calendar" />
      </div>
    </div>
    <div className="col-4 eventPage-activity-selector">
      <div className="row eventPage-activity" />
    </div>
  </div>
);

export default EventPage;
