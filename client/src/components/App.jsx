import React from 'react';
import NavBar from './NavBar/NavBar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import EventPage from './EventPage/EventPage.jsx';
import './App.css';

const App = () => (
  <div className="container-fluid">
    {/* <div className="Navbar">
      <NavBar />
    </div>
    <div className="Dashboard">
      <Dashboard />
    </div> */}
    <div className="Eventpage">
      <EventPage />
    </div>
  </div>
);

export default App;
