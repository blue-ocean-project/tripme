import React from "react";

const EventPage = () => (
  <div className="eventPage-container">
    <div className="col-8 details">
      <div className="row trip"></div>
      <div className="row weather"></div>
      <div className="row event-calendar">
        <div className="col-6 events"></div>
        <div className="col-6 calendar"></div>
      </div>
    </div>
    <div className="col-4 activity-selector">
      <div className="row activity"></div>
    </div>
  </div>
);

export default EventPage;
