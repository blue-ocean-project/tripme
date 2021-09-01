import React, { useState, useRef } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Comments from './Comments.jsx';
import AddActivityForm from './AddActivityForm.jsx';
import Comments from './Comments.jsx';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ActivityDetailModal = ({ item, openActivityDetailModal }) => {
  const isActivityDetailModalOpen = useSelector((state) => state.isActivityDetailModalOpen);
  const { start_time } = item;
  const { end_time } = item;
  const { type } = item;
  const { title } = item;
  const { comment } = item;
  const [editMode, setEditMode] = useState(false);
  const [newType, setNewType] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newStartTime, setNewStartTime] = useState('');
  const [newEndTime, setNewEndTime] = useState('');

  const option = [
    { value: 'shopping', label: 'shopping' },
    { value: 'sightseeing', label: 'sightseeing' },
    { value: 'concert', label: 'concert' },
    { value: 'movie', label: 'movie' },
    { value: 'museum', label: 'museum' },
    { value: 'dining', label: 'dining' },
    { value: 'workout', label: 'workout' },
    { value: 'amusement', label: 'amusement' },
    { value: 'self care', label: 'self care' },
    { value: 'other', label: 'other' },
  ];
  const handleUpdateDetail = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
    console.log(editMode);
  };

  const handleUpdateChange = (e) => {
    e.preventDefault();
    console.log(`${newType}`);
  };

  const start = '2021-09-01T01:28:33.457Z';
  const end = '2021-09-01T02:30:00.457Z';

  const editModeView = () => (
    <Container>
      <Row className="activityDetailTitle">
        <Col>Type: </Col>
        <Col className="activityDetailInfo">
          <Select
            value={option.value}
            onChange={setNewType}
            className="chooseActicityType"
            defaultValue={option[8]}
            label="Single select"
            options={option}
          />
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Titile: </Col>
        <Col className="activityDetailInfo">
          <input type="text" defaultValue={item.title} onChange={setNewTitle} />
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Start At: </Col>
        <Col className="activityDetailInfo">
          <DatePicker
            className="chooseActivityDate"
            selected={newStartTime}
            showTimeSelect
            dateFormat="Pp"
            onChange={(d) => setNewStartTime(d)}
          />
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>End At:</Col>
        <Col className="activityDetailInfo">
          <DatePicker
            className="chooseActivityDate"
            selected={newEndTime}
            showTimeSelect
            dateFormat="Pp"
            onChange={(d) => setNewEndTime(d)}
          />
        </Col>
      </Row>
      <Row>
        <Button className="updateActivityDetailSubmitButton">Submit</Button>
        <Button className="updateActivityDetailCancelButton">Cancel</Button>
      </Row>
    </Container>
  );

  const displayView = () => (
    <Container>
      <Row className="activityDetailTitle">
        <Col>Type: </Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => handleUpdateDetail(e)}>
          {item.type}{' '}
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Titile: </Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => handleUpdateDetail(e)}>
          {item.title}{' '}
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Date: </Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => handleUpdateDetail(e)}>
          {moment(item.start_time).calendar()}{' '}
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Duration:</Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => handleUpdateDetail(e)}>
          {moment(end).diff(moment(start), 'minutes')} mins
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        Comments:
        <Comments />
      </Row>
    </Container>
  );

  return (
    <Modal
      contentClassName="activityDetailModal"
      centered
      scrollable
      show={isActivityDetailModalOpen}
      onHide={openActivityDetailModal}
    >
      <Modal.Header closeButton className="modalCloseButton">
        <Modal.Title> Activity detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {editMode ? <div>{editModeView()}</div> : <div>{displayView()}</div>}
        {/* <Button
          variant="outline-primary"
          className="activityModalCloseButton"
          onClick={openActivityDetailModal}
        >
          Close
        </Button> */}
      </Modal.Body>
    </Modal>
  );
};

export default ActivityDetailModal;
