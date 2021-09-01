import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
import actions from '../../state/actions/index';
import './NavBar.css';
import logo from './TripMe.png';

const NavBar = () => {
  const state = useSelector((states) => states.changePage);
  const dispatch = useDispatch();

  const { changePage } = bindActionCreators(actions, dispatch);
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand className="navbar-brand" href="#home">
            <img className="navbar-logo" src={logo} alt="brand logo" />
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Dashboard</Nav.Link>
            <Nav.Link href="#features">Logout</Nav.Link>
            <Navbar.Text className="navbar-signed-in-as">
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
