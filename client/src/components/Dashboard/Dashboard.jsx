import React from 'react';
import Search from './DashboardComponents/Search.jsx';
import UpcomingTripsList from './DashboardComponents/UpcomingTripsList.jsx';
import PastTripsList from './DashboardComponents/PastTripsList.jsx';
import './Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="dashboard-search">
      <Search />
    </div>
    <div className="dashboard-title">
      <span>Dashboard</span>
    </div>
    <div className="dashboard-upcoming">
      <div>Upcoming</div>
      <UpcomingTripsList />
    </div>
    <div className="dashboard-past">
      <span>Past</span>
      <PastTripsList />
    </div>
  </div>
);

export default Dashboard;
