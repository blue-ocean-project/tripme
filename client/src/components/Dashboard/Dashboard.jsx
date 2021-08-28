import React from 'react';
import Search from './DashboardComponents/Search.jsx';
import Upcoming from './DashboardComponents/Upcoming.jsx';
import Past from './DashboardComponents/Past.jsx';
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
      <Upcoming />
    </div>
    <div className="dashboard-past">
      <Past />
    </div>
  </div>
);

export default Dashboard;
