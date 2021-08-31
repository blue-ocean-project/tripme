import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar/NavBar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import EventPage from './EventPage/EventPage.jsx';
import actions from '../state/actions/index';
import './App.css';

const App = () => {
  const state = useSelector((states) => states);
  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      <div className="Navbar">
        <NavBar />
      </div>
      {state ? (
        <div className="Dashboard">
          <Dashboard />
        </div>
      ) : (
        <div className="Eventpage">
          <EventPage />
        </div>
      )}
    </div>
  );
};

export default App;
