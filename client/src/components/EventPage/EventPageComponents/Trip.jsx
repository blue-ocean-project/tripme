import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import './Trip.css';

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
  return (
    <>
      <Container>
        <Row className="eventpage-trip-top">
          <Button className="eventpage-trip-invite-btn">Invite trip mates</Button>
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
    </>
  );
};

export default Trip;
