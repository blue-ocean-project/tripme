import './Login.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="login-welcome">Welcome to Trip.Me!</div>
      <form className="login-field">
        <label>
          <input className="login-email" type="text" placeholder="Email" />
          <div />
          <input className="login-password" type="password" placeholder="Password" />
        </label>
        <div />
        <Button className="login-button" variant="outline-info">
          Login
        </Button>
        <div />
        <Button className="login-button" variant="outline-danger" onClick={handleShow}>
          Signup
        </Button>
      </form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="login-step">Step 1: How do you want to sign up?</div>
          <Form.Group>
            <Form.Label />
            <Form.Control as="textarea" type="button" name="Email" placeholder="Email" />
            {/* <Form.Control.Feedback type="invalid">Please write a question.</Form.Control.Feedback> */}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
