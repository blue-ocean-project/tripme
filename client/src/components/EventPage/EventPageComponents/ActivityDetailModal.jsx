import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Comments from './Comments.jsx';
import AddActivityForm from './AddActivityForm.jsx';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { updateActivity } from '../../../state/actions/activityActions/activityActions.js';

const ActivityDetailModal = ({ toggleActivityDetailModal }) => {
  const isActivityDetailModalOpen = useSelector((state) => state.isActivityDetailModalOpen);
  const item = useSelector((state) => state.currentActivity);
  const activityId = useSelector((state) => state.currentActivity.id);
  const [editMode, setEditMode] = useState(false);
  const [newType, setNewType] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newStartTime, setNewStartTime] = useState('');
  const [newEndTime, setNewEndTime] = useState('');
  const currentActivity = useSelector((state) => state.currentActivity);
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
  const toggleUpdateDetail = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const handleSubmitChanges = () => {
    updateActivity(activityId, newType, newTitle, newDescription);
    console.log(newTitle, newTitle, newDescription);
    toggleActivityDetailModal();
  };

  const handleCLickToCloseDetailModal = (e) => {
    e.preventDefault();
    toggleActivityDetailModal();
  };

  const editModeView = () => (
    <Container>
      <Row className="activityDetailTitle">
        <Col>Type: </Col>
        <Col className="activityDetailInfo">
          <Select
            value={option.value}
            onChange={setNewType}
            className="activityDetailInfoInput"
            defaultValue={option[8]}
            label="Single select"
            options={option}
          />
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Titile: </Col>
        <Col className="activityDetailInfoInput">
          <input
            type="text"
            defaultValue={item.title}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Description: </Col>
        <Col className="activityDetailInfoInput">
          <textarea
            type="textarea"
            defaultValue={item.description}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Button className="updateActivityDetailSubmitButton" onClick={handleSubmitChanges}>
          Submit
        </Button>
        <Button className="updateActivityDetailCancelButton" onClick={(e) => toggleUpdateDetail(e)}>
          Cancel
        </Button>
      </Row>
    </Container>
  );

  const displayView = () => (
    <Container>
      <Row className="activityDetailTitle">
        <Col>Type: </Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => toggleUpdateDetail(e)}>
          {currentActivity.type}
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Titile: </Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => toggleUpdateDetail(e)}>
          {currentActivity.title}
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Description:</Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => toggleUpdateDetail(e)} />
        {currentActivity.description}
      </Row>
      <Row className="activityDetailTitle">
        Comments:
        <Comments />
      </Row>
      <Row>
        <Button
          variant="outline-primary"
          className="activityModalCloseButton"
          onClick={(e) => {
            toggleActivityDetailModal(e);
          }}
        >
          Close
        </Button>
      </Row>
    </Container>
  );

  return (
    <Modal
      contentClassName="activityDetailModal"
      centered
      scrollable
      show={isActivityDetailModalOpen}
      onHide={toggleActivityDetailModal}
    >
      <Modal.Header closeButton className="modalCloseButton">
        <Modal.Title> Activity detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <div>{displayView()}</div> */}
        {editMode ? <div>{editModeView()}</div> : <div>{displayView()}</div>}
      </Modal.Body>
    </Modal>
  );
};

export default ActivityDetailModal;
