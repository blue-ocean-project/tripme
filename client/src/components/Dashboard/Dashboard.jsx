import React from 'react';
import UpcomingTripsList from './DashboardComponents/UpcomingTripsList.jsx';
import PastTripsList from './DashboardComponents/PastTripsList.jsx';

import CreateEvent from './DashboardComponents/CreateEvent.jsx';
import './Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <CreateEvent />
    <div className="dashboard-title">
      <span>Dashboard</span>
    </div>
    <div>Upcoming</div>
    <div className="dashboard-upcoming">
      <UpcomingTripsList />
    </div>
    <span>Past</span>
    <div className="dashboard-past">
      <PastTripsList />
    </div>
  </div>
);

export default Dashboard;
