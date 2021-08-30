import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Trip.css';

const destination = 'hawaii';
const checkList = ['passport', 'cellphone'];

const Trip = () => (
  <>
    <Container>
      <Row className="eventpage-trip-top">
        <Button className="eventpage-trip-btn">Invite trip mates</Button>
      </Row>
      <Row>
        <Col sm={5} className="justify-content-center flex-column">
          <div>Destination: {destination}</div>
          <div>Trip Date:</div>
          <Card>
            <Card.Title>say my name</Card.Title>
          </Card>
        </Col>
        <Col sm={4} className="justify-content-center flex-column">
          Participants:
        </Col>
        <Col sm={3} className="justify-content-center flex-column">
          <div>Checklist</div>
        </Col>
      </Row>
    </Container>
  </>
);

export default Trip;
