import React, { useState, useRef } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Comments from './Comments.jsx';
import AddActivityForm from './AddActivityForm.jsx';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ActivityDetailModal = ({ item, openActivityDetailModal }) => {
  const isActivityDetailModalOpen = useSelector((state) => state.isActivityDetailModalOpen);
  const type = item.type;
  const title = item.title;
  const Description = item.description;
  return (
    <Modal show={isActivityDetailModalOpen}>
      <div>{type}</div>
      <div>{title}</div>
      <div></div>
    </Modal>
  );

  // const [editMode, setEditMode] = useState(false);
  // const [newType, setNewType] = useState('');
  // const [newTitle, setNewTitle] = useState('');
  // const [newStartTime, setNewStartTime] = useState('');
  // const [newEndTime, setNewEndTime] = useState('');

  // const option = [
  //   { value: 'shopping', label: 'shopping' },
  //   { value: 'sightseeing', label: 'sightseeing' },
  //   { value: 'concert', label: 'concert' },
  //   { value: 'movie', label: 'movie' },
  //   { value: 'museum', label: 'museum' },
  //   { value: 'dining', label: 'dining' },
  //   { value: 'workout', label: 'workout' },
  //   { value: 'amusement', label: 'amusement' },
  //   { value: 'self care', label: 'self care' },
  //   { value: 'other', label: 'other' },
  // ];
  // const toggleUpdateDetail = (e) => {
  //   e.preventDefault();
  //   setEditMode(!editMode);

  // };

  // const handleSubmitChanges = (e) => {
  //   e.preventDefault();
  //   setEditMode(!editMode);
  // };

  // const handleUpdateChange = (e) => {
  //   e.preventDefault();

  // }

  // const displayView = () => (
  //   <Container>
  //     <Row className="activityDetailTitle">
  //       <Col>Type: </Col>
  //       <Col className="activityDetailInfo" onDoubleClick={(e) => toggleUpdateDetail(e)}>
  //         {type.toString}
  //       </Col>
  //     </Row>
  //     <Row className="activityDetailTitle">
  //       <Col>Titile: </Col>
  //       <Col className="activityDetailInfo" onDoubleClick={(e) => toggleUpdateDetail(e)}>
  //         {item.title}
  //       </Col>
  //     </Row>
  {
    /* <Row className="activityDetailTitle">
        <Col>Date: </Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => toggleUpdateDetail(e)}>
          {moment(item.start_time).calendar()}{' '}
        </Col>
      </Row> */
  }
  {
    /* <Row className="activityDetailTitle">
        <Col>Duration:</Col>
        <Col className="activityDetailInfo" onDoubleClick={(e) => toggleUpdateDetail(e)}>
          {moment(end).diff(moment(start), 'minutes')} mins
        </Col>
      </Row> */
  }
  //   <Row className="activityDetailTitle">
  //     <Col>Description:</Col>
  //     <Col className="activityDetailInfo" onDoubleClick={(e) => toggleUpdateDetail(e)} />
  //   </Row>
  //   <Row className="activityDetailTitle">
  //     Comments:
  //     <Comments />
  //   </Row>
  // </Container>
  // );

  // return (
  //   <Modal
  // contentClassName="activityDetailModal"
  //    centered
  //    scrollable
  //   show={isActivityDetailModalOpen}
  //   onHide={openActivityDetailModal}
  // >
  {
    /* <Modal.Header closeButton className="modalCloseButton">
        <Modal.Title> Activity detail</Modal.Title>
      </Modal.Header>
      <Modal.Body> */
  }
  // <div></div>
  {
    /* {editMode ? <div>{editModeView()}</div> : <div>{displayView()}</div>} */
  }
  {
    /* <Button
          variant="outline-primary"
          className="activityModalCloseButton"
          onClick={openActivityDetailModal}
        >
          Close
        </Button> */
  }
  {
    /* </Modal.Body>
    </Modal> */
  }
  // );
};

export default ActivityDetailModal;
