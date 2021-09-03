import React, { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import createEvents from '../../../state/actions/createEvent';
import getTrips from '../../../state/actions/getTrips';
import { getTrip } from '../../../state/actions/index';

function CreateEvent() {
  // const user_id = useSelector((states) => states.tripId));

  const TEMP_USER_ID = 8;

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const [name, setName] = useState('');
  const [startDate, setStart] = useState('');
  const [endDate, setEnd] = useState('');
  const [destination, setDestination] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="createTripButton" onClick={handleShow}>
        Create Trip
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Start a Trip! </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                placeholder='Enter trip name e.g. "Anniversary Trip"'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                value={destination}
                settype="text"
                placeholder="Enter your destination: City, State"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setStart(e.target.value);
                }}
                value={startDate}
                type="date"
                placeholder="Start Date"
              />
              <Form.Label>End Date</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEnd(e.target.value);
                }}
                value={endDate}
                type="date"
                placeholder="End Date"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            onClick={() => {
              createEvents(TEMP_USER_ID, name, destination, startDate, endDate)
                .then(() => {
                  getTrips(TEMP_USER_ID).then((results) => {
                    dispatch(getTrip(results.data));
                  });
                })
                .catch((error) => console.log(error));
            }}
            className="button"
          >
            Let's Go!
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateEvent;
