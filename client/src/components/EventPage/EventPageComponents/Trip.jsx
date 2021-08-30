import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Trip.css';

const destination = 'hawaii';
const checkList = ['passport', 'cellphone'];

const Trip = () => (
  <>
    <Container d-flex flex-row>
      <Row>
        <Col sm={5} className="d-flex justify-content-center flex-column">
          <div>Destination: {destination}</div>
          <div>Trip Date:</div>
        </Col>
        <Col sm={4} className="d-flex justify-content-center flex-column">
          Participants:
        </Col>
        <Col sm={3} className="d-flex justify-content-center flex-column">
          <div>Checklist</div>
        </Col>
      </Row>
    </Container>
  </>
);

export default Trip;
