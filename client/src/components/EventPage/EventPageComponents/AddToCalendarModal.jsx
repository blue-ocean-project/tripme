import React, { useState } from 'react';
import { Modal, Form, Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../../../state/actions/activityActions/activityActions.js';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const AddToCalendarModal = ({ setReren }) => {
  const dispatch = useDispatch();
  const { addActivityToCalendar, toggleAddToCalendarModal } = bindActionCreators(
    actionCreators,
    dispatch,
  );
  const isAddToCalendarModalOpen = useSelector((state) => state.isAddToCalendarModalOpen);
  const activityIdAddToCalendar = useSelector((state) => state.activityIdAddToCalendar);
  const [startTime, setStarTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleAddToCalendar = (e) => {
    // e.preventDefault();
    // if (moment(starTime).isBefore(endTime)) {
    const title = 'fgd';
    addActivityToCalendar(activityIdAddToCalendar, startTime, endTime, title, setReren);
    toggleAddToCalendarModal();
  };

  const handleCancelButton = (e) => {
    e.preventDefault();
    toggleAddToCalendarModal();
  };

  return (
    <Modal
      show={isAddToCalendarModalOpen}
      centered
      animation
      contentClassName="addToCalendarModal"
      onHide={toggleAddToCalendarModal}
    >
      {' '}
      <Modal.Header closeButton className="modalCloseButton">
        <Modal.Title> </Modal.Title>
      </Modal.Header>
      <Modal.Body className="addedToCalendar">
        <Form>
          <Form.Group>
            <div className="addActivityFormInput">Start At: </div>
            <DatePicker
              className="chooseActivityDate"
              selected={startTime}
              showTimeSelect
              dateFormat="Pp"
              onChange={(d) => setStarTime(d)}
            />
          </Form.Group>
          <Form.Group>
            <div className="addActivityFormInput">End At: </div>
            <DatePicker
              className="chooseActivityDate"
              selected={endTime}
              showTimeSelect
              dateFormat="Pp"
              onChange={(d) => setEndTime(d)}
            />
          </Form.Group>
        </Form>
        <Container>
          <Row>
            <Button className="addToCalendarButtons" onClick={(e) => handleAddToCalendar(e)}>
              Add To calendar
            </Button>
            <Button className="addToCalendarButtons" onClick={(e) => toggleAddToCalendarModal(e)}>
              Cancel
            </Button>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AddToCalendarModal;
