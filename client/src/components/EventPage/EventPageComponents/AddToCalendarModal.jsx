import React, { useState, useEffect } from 'react';
import { Modal, Form, Button, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../../../state/actions/activityActions/activityActions.js';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const AddToCalendarModal = () => {
  const currentActivity = useSelector((state) => state.currentActivity);
  const { title } = currentActivity;
  const dispatch = useDispatch();
  const { addActivityToCalendar, toggleAddToCalendarModal } = bindActionCreators(
    actionCreators,
    dispatch,
  );
  const isAddToCalendarModalOpen = useSelector((state) => state.isAddToCalendarModalOpen);
  const activityIdAddToCalendar = useSelector((state) => state.activityIdAddToCalendar);
  const [startTime, setStarTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [validateTime, setValidateTime] = useState(false);

  const handleAddToCalendar = (e) => {
    // e.preventDefault();
    if (moment(startTime).isBefore(endTime)) {
      addActivityToCalendar(activityIdAddToCalendar, startTime, endTime, title);
      toggleAddToCalendarModal();
    } else {
      setValidateTime(true);
    }
  };

  // const handleCancelButton = (e) => {
  //   toggleAddToCalendarModal();
  // };

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
        <Modal.Title> Add Date and Time </Modal.Title>
      </Modal.Header>
      <Modal.Body className="addedToCalendar">
        <Form>
          <Form.Group>
            <div className="addActivityFormInput">Start At: </div>
            <DatePicker
              className="chooseActivityDate"
              selected={startTime}
              // locale="ws"
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
            {validateTime && <div className="validation">Start Time Must Before End Time!</div>}
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
