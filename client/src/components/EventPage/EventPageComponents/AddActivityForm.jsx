import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';

const AddActivityForm = () => {
  const [type, setType] = useState({});
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [duration, setDuration] = useState('');
  // const trip_id = useSelector((state) => { state.trip_id });
  const tripId = 0;
  const option = [
    { value: 'shopping', label: 'shopping' },
    { value: 'sightseeing', label: 'sightseeing' },
    { value: 'concert', label: 'concert' },
    { value: 'movie', label: 'movie' },
    { value: 'museum', label: 'museum' },
    { value: 'dining', label: 'dining' },
    { value: 'workout', label: 'workout' },
    { value: 'amusement', label: 'amusement' },
    { value: 'other', label: 'other' },
  ];

  const dispatch = useDispatch();
  const isAddActivityModalOpen = useSelector((state) => state.isAddActivityModalOpen);
  const createNewActivity = useSelector((state) => state.createNewActivity);
  const handleSubmit = () => {
    dispatch({
      type: 'CREATE_NEW_ACTIVITY',
      payload: { type: type.value, name, date, duration, trip_id: tripId },
    });
    dispatch({ type: 'TOGGLE_ACTIVITY_MODAL' });
  };

  return (
    <Form className="addActivityForm" onSubmit={handleSubmit}>
      <div className="addActivityFormInput">Select Activity Type:</div>
      <Select
        value={option.value}
        onChange={setType}
        className="chooseActicityType"
        defaultValue={option[8]}
        label="Single select"
        options={option}
      />
      <Form.Group controlId="enterActivityName">
        <div className="addActivityFormInput">Activity Name:</div>
        {/* <Form.Label className="mb-3 addActivityFormInput">Activity Name</Form.Label> */}
        <Form.Control
          type="text"
          placeholder="Enter Activity Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group>
        <div className="addActivityFormInput">Choose Date: </div>
        {/* <Form.Label className="addActivityFormInput">Choose Date</Form.Label> */}
        <DatePicker
          className="chooseActivityDate"
          selected={date}
          showTimeSelect
          dateFormat="Pp"
          onChange={(d) => setDate(d)}
        />
      </Form.Group>
      <Form.Group controlId="enterActivityDuration">
        <div className="addActivityFormInput">Activity Duration:</div>
        <Form.Control
          type="number"
          min="10"
          max="720"
          step="10"
          placeholder="Enter Activity Duration"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
      </Form.Group>
      <Button className="addActivityModalSubmitButton" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default AddActivityForm;
