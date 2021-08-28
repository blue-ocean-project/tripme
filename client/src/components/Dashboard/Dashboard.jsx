import React from 'react';
import './Dashboard.css';

const Dashboard = () => (
  <div className="dashboard-container">
    <div className="dashboard-search" />
    <div className="dashboard-title">
      <span>Dashboard</span>
    </div>
    <div className="dashboard-upcoming" />
    <div className="dashboard-past" />
  </div>
);

export default Dashboard;
