import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import Comments from './Comments.jsx';
import AddActivityForm from './AddActivityForm.jsx';
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

  const findOption = [
    'shopping',
    'sightseeing',
    'concert',
    'movie',
    'museum',
    'dining',
    'workout',
    'amusement',
    'self care',
    'other',
  ];
  const indexOfType = findOption.indexOf(item.type);
  const toggleUpdateDetail = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  };

  const handleSubmitChanges = () => {
    updateActivity(activityId, newType.value, newTitle, newDescription);
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
        <Col>
          <Select
            value={option.value}
            onChange={setNewType}
            className="activityDetailInfoInput"
            defaultValue={option[indexOfType]}
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
        <Button
          className="updateActivityDetailCancelButton"
          onClick={handleCLickToCloseDetailModal}
        >
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
          {item.type}
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Titile: </Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => toggleUpdateDetail(e)}>
          {item.title}
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Description:</Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => toggleUpdateDetail(e)}>
          {item.description}
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Comments:</Col>
        <Container className="modalCommentSection">
          <Comments />
        </Container>
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
