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
  const state = useSelector((states) => states.changePage);
  const user = useSelector((states) => states.user);
  const query = new URLSearchParams(useLocation().search);

  console.log(user);
  return (
    <div className="container-fluid">
      {/* {query.get('verified') ? <Redirect to="/login" /> : null} */}
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
