import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar/NavBar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import EventPage from './EventPage/EventPage.jsx';
import Login from './Login/Login.jsx';
import Server from '../lib/Server';
import actions from '../state/actions/index';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const { storequeryParams } = bindActionCreators(actions, dispatch);
  const state = useSelector((states) => states);
  const query = new URLSearchParams(useLocation().search);
  const { user } = state;
  const tripId = query.get('trip');
  const key = query.get('key');
  let redirectToLogin = false;

  // useEffect(() => {
  //   storequeryParams({
  //     tripId,
  //     key,
  //   });
  // }, []);

  // console.log('app render');
  // if (tripId && key && user) {
  //   Server.post(`/invite/${tripId}`, {
  //     params: { key },
  //     user_id: user.user_id,
  //   })
  //     .then(() => {
  //       // clear query params after adding user to trip.
  //       // storequeryParams({});
  //       // Possibly retrieve new trips of currently logged in user.
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // } else if (tripId && key && !user) {
  //   redirectToLogin = true;
  // }

  return (
    <>
      {/* {redirectToLogin ? (
        <Redirect to={{ pathname: '/login', state: { trip: tripId, key } }} />
      ) : ( */}
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
              <Login trip={tripId} key={key} />
            </div>
          </Route>
        </Switch>
      </div>
      {/* )} */}
    </>
  );
};

export default App;
