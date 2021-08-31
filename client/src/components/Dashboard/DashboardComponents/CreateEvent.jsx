import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function CreateEvent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="button" onClick={handleShow}>
        Create Trip
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Start a Trip! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter your destination: City, State" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control type="date" placeholder="Start Date" />
              <Form.Control type="date" placeholder="End Date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Control type="email" placeholder="Enter emails separated by commas" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button class="button">Let's Go!</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateEvent;
