import React, { useState } from 'react';
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Form,
  Modal,
  InputGroup,
  FormControl,
  ListGroup,
  Checkbox,
} from 'react-bootstrap';
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
  const [checkBoxOn, setCheckBoxOn] = useState(false);

  const openModal = function () {
    setModalIsOpen(true);
  };
  const closeModal = function () {
    setModalIsOpen(false);
  };

  const handleSubmit = function (event) {
    event.preventDefault;
    console.log('GGGGG');
    setModalIsOpen(false);
  };

  const handleCheckBox = function (event) {
    setCheckBoxOn(!checkBoxOn);
    console.log(event.target.value);
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
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <ListGroup.Item>Hello world</ListGroup.Item>
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <ListGroup.Item>cancel movie</ListGroup.Item>
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Checkbox aria-label="Checkbox for following text input2" />
              <ListGroup.Item>개새끼야</ListGroup.Item>
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Checkbox
                checked={checkBoxOn}
                value="213"
                aria-label="Checkbox for following text input "
                onChange={(e) => handleCheckBox(e)}
              />
              <ListGroup.Item>소새끼야</ListGroup.Item>
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <ListGroup.Item>말새끼야</ListGroup.Item>
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <ListGroup.Item>닭새끼야</ListGroup.Item>
            </InputGroup>
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
