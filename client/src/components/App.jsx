import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import NavBar from './NavBar/NavBar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import EventPage from './EventPage/EventPage.jsx';
import Login from './Login/Login.jsx';
// import actions from '../state/actions/index';
import './App.css';

const App = () => {
  const state = useSelector((states) => states);
  const query = new URLSearchParams(useLocation().search);
  // console.log(state.queryParams);
  const trip_id = query.get('trip');
  const key = query.get('key');
  // query.get('verified');

  return (
    <>
      {query.get('verified') ? (
        <Redirect to="/login" />
      ) : (
        <div className="container-fluid">
          <Switch>
            <Route exact path="/">
              <div className="Navbar">
                <NavBar />
              </div>
              {state.changePage ? (
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
      )}
    </>
  );
};

export default App;
