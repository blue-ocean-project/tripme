import React, { useState, useRef } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import moment from 'moment';
import AddActivityForm from './AddActivityForm.jsx';
import Comments from './Comments.jsx';

const ActivityDetailModal = ({ item, openActivityDetailModal }) => {
  const isActivityDetailModalOpen = useSelector((state) => state.isActivityDetailModalOpen);
  const { start_time } = item;
  const { end_time } = item;
  const { type } = item;
  const { title } = item;
  const { comment } = item;
  const [editMode, setEditMode] = useState(false);
  const handleUpdateDetail = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
    console.log(editMode);
  };

  const start = '2021-09-01T01:28:33.457Z';
  const end = '2021-09-01T02:30:00.457Z';

  const editModeView = () => <AddActivityForm />;
  const displayView = () => (
    <Container>
      <Row className="activityDetailTitle">
        <Col>Type: </Col>
        <Col className="activityDetailInfo" onClick={(e) => handleUpdateDetail(e)}>
          {item.type}{' '}
        </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Titile: </Col>
        <Col className="activityDetailInfo">{item.title} </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Date: </Col>
        <Col className="activityDetailInfo">{moment(item.start_time).calendar()} </Col>
      </Row>
      <Row className="activityDetailTitle">
        <Col>Duration:</Col>
        <Col className="activityDetailInfo">{moment(end).diff(moment(start), 'minutes')} mins</Col>
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
      animation
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
