/* eslint-disable object-shorthand */
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import NavBar from './NavBar/NavBar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import EventPage from './EventPage/EventPage.jsx';
import Login from './Login/Login.jsx';
import './App.css';
import Server from '../lib/Server';

const App = () => {
  const currentUser = useSelector((state) => state.user);
  const state = useSelector((states) => states.changePage);
  const query = new URLSearchParams(useLocation().search);
  const tripId = query.get('trip');
  const key = query.get('key');
  const history = useHistory();

  if (tripId && key && currentUser) {
    Server.post(`/invite/${tripId}`, {
      params: { key: key },
      user_id: currentUser.user_id,
    })
      .then((result) => {
        window.localStorage.removeItem('tripId');
        window.localStorage.removeItem('key');
      })
      .catch((err) => console.log(err));
  } else if (tripId && key && !currentUser) {
    window.localStorage.setItem('tripId', tripId);
    window.localStorage.setItem('key', key);
    history.push('/login');
  }

  return (
    <div className="container-fluid">
      <Switch>
        <Route exact path="/">
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
        </Route>
        <Route path="/login">
          <div className="Login">
            <Login />
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
