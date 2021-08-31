import React from 'react';
import './NavBar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from './TripMe.png';

const NavBar = () => (
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

export default NavBar;
