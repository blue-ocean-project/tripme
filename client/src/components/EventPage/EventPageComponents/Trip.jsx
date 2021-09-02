import React, { useState } from 'react';
import { Container, Col, Row, Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './Trip.css';
import Modal from 'react-modal';

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
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteFullName, setinviteFullName] = useState('');

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
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2>Invite people</h2>
        <form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="">
            <Row className="event-trip-modal-row-1 align-items-end">
              <Col>
                <Form.Label>Type your trip mate email or phone numbers</Form.Label>
                <Form.Control
                  required
                  value={inviteEmail}
                  type="mail"
                  placeholder="e.g. trip@gmail.com or 2138084444"
                  onChange={(e) => {
                    setInviteEmail(e.target.value);
                  }}
                />
                <Form.Label>Type trip mate's name</Form.Label>
                <Form.Control
                  required
                  value={inviteFullName}
                  type="name"
                  placeholder="e.g. Tom Holland"
                  onChange={(e) => {
                    setinviteFullName(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Button type="submit">ADD</Button>
              </Col>
            </Row>
          </Form.Group>
        </form>
        <p>let them join trip.me and you all can plan your trip together</p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
};

export default Trip;
