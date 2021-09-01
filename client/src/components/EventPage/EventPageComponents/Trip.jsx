import React, { useState } from 'react';
import { Container, Col, Row, Card, Button, Form, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './Trip.css';
// import Modal from 'react-modal';

const destination = 'HAWAII';
const days = '5';
const participants = ['Justin', 'Mom', 'Uncle-J'];
const checkList = ['passport', 'cellphone'];

const participantDisplay = function (participantsList) {
  return participantsList.map((each, i) => (
    <div className="participant-box" key={i}>
      <FontAwesomeIcon icon={faUser} color="purple" size="2x" />
      <span>{each}</span>
    </div>
  ));
};

const Trip = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inviteContacts, setInviteContacts] = useState('');

  const openModal = function () {
    setModalIsOpen(true);
  };
  const closeModal = function () {
    setModalIsOpen(false);
  };

  const handleSubmit = function (event) {
    e.preventDefault;
  };

  return (
    <>
      <Container>
        <Row className="eventpage-trip-top">
          <Button onClick={openModal} className="eventpage-trip-invite-btn">
            Invite trip mates
          </Button>
        </Row>
        <Row className="eventpage-trip-bottom">
          <Col sm={4} className="trip-bot-col-first">
            <div>Destination: {destination}</div>
            <div>Trip Date</div>
            <Row className="e-trip-calendar">
              <Col sm={3}>
                <FontAwesomeIcon icon={faCalendarAlt} color="purple" size="2x" />
              </Col>
              <Col sm={9}>
                {days} days {days - 1} nights
              </Col>
            </Row>
          </Col>
          <Col sm={4} className="trip-bot-col-second">
            Participants:
            <Row className="participants-container">{participantDisplay(participants)}</Row>
          </Col>
          <Col sm={4} className="trip-bot-col-third">
            <div>Checklist</div>
          </Col>
        </Row>
      </Container>

      <Modal
        className="event-trip-modal"
        show={modalIsOpen}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={closeModal}
      >
        <h2>Invite people</h2>
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="">
            <Row className="event-trip-modal-row-1 align-items-end">
              <Col>
                <Form.Label>Type your trip mate email or phone numbers.</Form.Label>
                <p>Commas can be used to separate multiple message recipients.</p>
                <Form.Control
                  value={inviteContacts}
                  type="text"
                  placeholder="e.g. trip@gmail.com, 2138084444"
                  onChange={(e) => {
                    setInviteContacts(e.target.value);
                  }}
                />
              </Col>
              <Col xs={3}>
                <Button type="submit">ADD</Button>
              </Col>
            </Row>
          </Form.Group>
        </form>
        <p>let them join trip.me and you all can plan your trip together</p>
        <div className="trip-modal-close-btn">
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
};

export default Trip;

// <Form.Label>Type trip mate's name</Form.Label>
// <Form.Control
//   value={inviteFullName}
//   type="text"
//   placeholder="e.g. Tom Holland"
//   onChange={(e) => {
//     setinviteFullName(e.target.value);
//   }}
// />
// <Form.Control.Feedback type="invalid">
//   Please provide a valid name
// </Form.Control.Feedback>
