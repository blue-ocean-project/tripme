import React, { useState, useEffect } from 'react';
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
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faMap } from '@fortawesome/free-solid-svg-icons';
import './Trip.css';
import axios from 'axios';
import moment from 'moment';
import Server from '../../../lib/Server.js';

const participantDisplay = function (participantsList) {
  return participantsList.map((each, i) => (
    <div className="participant-box" key={i}>
      <FontAwesomeIcon icon={faUser} color="rgb(75, 120, 245)" size="2x" />
      <span>{each.first_name}</span>
    </div>
  ));
};

const Trip = () => {
  const currentUser = useSelector((state) => state.user);
  const tripId = useSelector((state) => state.tripId || 1);

  const [tripDetail, setTripDetail] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [inviteContacts, setInviteContacts] = useState('');

  const [checkBoxOn, setCheckBoxOn] = useState(false);
  const [isChecked, setIsChecked] = useState([]);

  useEffect(() => {
    console.log('trip id', tripId);
    Server.get(`/trips/${tripId}`)
      .then((res) => {
        setTripDetail(res.data);
      })

      .catch((err) => console.error(err));
  }, [tripId]);

  const openModal = function () {
    setModalIsOpen(true);
  };
  const closeModal = function () {
    setModalIsOpen(false);
  };

  //send invite trip mate request

  const handleSubmit = function () {
    const transformedContacts = inviteContacts.replace(/\s/g, '').split(',');
    console.log(transformedContacts);
    Server.post('/invite', {
      first_name: currentUser ? currentUser.first_name : '',
      last_name: currentUser ? currentUser.last_name : '',
      contacts: transformedContacts,
      trip_id: tripId,
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  // on each checkbox change, send patch to DB
  const handleCheckBox = function (event) {
    setCheckBoxOn(!checkBoxOn);
  };

  // const handleSingleCheck = function (event) {
  //   setIsChecked({ ...isChecked, [event.target.name]: event.target.checked });
  // }
  const daysDisplay = function (data) {
    const a = moment(data.end_date);
    const b = moment(data.start_date);
    const day = a.diff(b, 'days');
    return `${day} days ${day - 1} nights`;
  };

  const checkListDisplay = function (checklist) {
    const ArrayOfCheck = checklist.map((each) => {
      return each.checked;
    });
    const temp = checklist.map((each, index) => {
      const check = each.checked;
      if (check === true) {
        // setIsChecked({ ...isChecked, [each.item]: true })
        return (
          <InputGroup className="`${checkbox-each.id}`" key={each.id}>
            <InputGroup.Checkbox
              checked={ArrayOfCheck[index]}
              name={each.id}
              value={each.item}
              onChange={(e) => handleSingleCheck(e)}
            />
            <ListGroup.Item>{each.item}</ListGroup.Item>
          </InputGroup>
        );
      } else {
        // setIsChecked({ ...isChecked, [each.item]: false })
        return (
          <InputGroup className="`${checkbox-each.id}`" key={each.id}>
            <InputGroup.Checkbox
              checked={ArrayOfCheck[index]}
              name={each.id}
              value={each.item}
              onChange={(e) => handleSingleCheck(e)}
            />
            <ListGroup.Item>{each.item}</ListGroup.Item>
          </InputGroup>
        );
      }
    });
    return temp;
  };

  if (tripDetail !== null) {
    const destination = tripDetail.destination;

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
              <div>
                <FontAwesomeIcon icon={faMap} color="rgb(75, 120, 245)" size="2x" />
                Destination: {destination}
              </div>
              <div>Trip Date:</div>
              <div>
                {moment(tripDetail.start_date).format('MMM Do YYYY')}~{' '}
                {moment(tripDetail.end_date).format('MMM Do YYYY')}
              </div>
              <Row className="e-trip-calendar">
                <Col sm={3}>
                  <FontAwesomeIcon icon={faCalendarAlt} color="rgb(75, 120, 245)" size="2x" />
                </Col>
                <Col sm={9}>{daysDisplay(tripDetail)}</Col>
              </Row>
            </Col>
            <Col sm={4} className="trip-bot-col-second">
              Participants:
              <Row className="participants-container">{participantDisplay(tripDetail.users)}</Row>
            </Col>
            <Col sm={4} className="trip-bot-col-third">
              <div>Checklist:</div>
              {checkListDisplay(tripDetail.checklist)}
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
  } else {
    return <div>loading..</div>;
  }
};

export default Trip;
