import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UpcomingTripsList from './DashboardComponents/UpcomingTripsList.jsx';
import PastTripsList from './DashboardComponents/PastTripsList.jsx';

import CreateEvent from './DashboardComponents/CreateEvent.jsx';
import './Dashboard.css';

const Dashboard = () => (
  <>
    <CreateEvent />
    {/* <Container className="dashboard-container"> */}
    {/* <Row className="dashboard-title">
      <span className="dashboard-title">Dashboard</span>
    </Row> */}
    <Row className="dashboard-Title-text">Upcoming</Row>
    <Row className="dashboard-upcoming">
      <UpcomingTripsList />
    </Row>
    <Row className="dashboard-Title-text">Past</Row>
    <Row className="dashboard-past">
      <PastTripsList />
    </Row>
    {/* </Container> */}
  </>
);

export default Dashboard;
