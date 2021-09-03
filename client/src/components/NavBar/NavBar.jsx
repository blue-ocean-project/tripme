import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../state/actions/index';
import './NavBar.css';
import logo from './TripMe.png';

const NavBar = () => {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { logout } = bindActionCreators(actions, dispatch);
  return (
    <>
      <Navbar>
        <Navbar.Brand className="navbar-brand">
          <img className="navbar-logo" src={logo} alt="brand logo" />
        </Navbar.Brand>
        <Nav className="navbar-buttons">
          <Nav.Link onClick={() => console.log(currentUser)}>Dashboard</Nav.Link>
          {currentUser === null && (
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          )}
          {currentUser && (
            <>
              <Nav.Link
                as={Link}
                to="/login"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Nav.Link>
              <Navbar.Text className="navbar-signed-in-as ">
                Signed in as:{' '}
                <a href="#login">
                  {currentUser.first_name} {currentUser.last_name}
                </a>
              </Navbar.Text>
            </>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
