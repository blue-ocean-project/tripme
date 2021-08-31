import React from 'react';
import NavBar from './NavBar/NavBar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import EventPage from './EventPage/EventPage.jsx';
import Login from './Login/Login.jsx';
import './App.css';

const App = () => (
  <div className="container-fluid">
    <div>
      <Login />
    </div>
    {/* <div className="Navbar">
      <NavBar />
    </div>
    <div className="Dashboard">
      <Dashboard />
    </div> */}
    {/* <div className="Eventpage">
      <EventPage />
    </div> */}
  </div>
);

export default App;
