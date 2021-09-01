import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../state/actions/index';
import './NavBar.css';
import logo from './TripMe.png';

const NavBar = () => {
  const state = useSelector((states) => states.changePage);
  const dispatch = useDispatch();

  const { changePage } = bindActionCreators(actions, dispatch);
  return (
    <>
      <Navbar>
        <Navbar.Brand className="navbar-brand">
          <img className="navbar-logo" src={logo} alt="brand logo" />
        </Navbar.Brand>
        <Nav className="navbar-buttons">
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Navbar.Text className="navbar-signed-in-as">
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
