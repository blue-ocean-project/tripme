import React, { useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import moment from 'moment';
import AddActivityForm from './AddActivityForm.jsx';

const ActivityDetailModal = ({ item, handleClickToToggleActivityDetailModal }) => {
  const isActivityDetailModalOpen = useSelector((state) => state.isActivityDetailModalOpen);
  const { start_time } = item;
  const { end_time } = item;
  const { type } = item;
  const { title } = item;
  const { comment } = item;
  const [editMode, setEditMode] = useState(false);

  const start = '2021-09-01T01:28:33.457Z';
  const end = '2021-09-01T02:30:00.457Z';

  const editModeView = () => <AddActivityForm />;
  const displayView = () => (
    <div>
      <div>
        Type: <span>{item.type} </span>
      </div>
      <div>
        Titile: <span>{item.title} </span>
      </div>
      <div>
        Time:<span>{moment(item.start_time).calendar()} </span>
      </div>
      <div>
        Duration:<span>{moment(end).diff(moment(start), 'minutes')} mins</span>
      </div>
      <div>
        Comments:
        <Comments />
      </div>
    </div>
  );

  return (
    <Modal
      contentClassName="activityDetailModal"
      centered
      animation
      scrollable
      show={isActivityDetailModalOpen}
      onHide={(e) => {
        handleClickToToggleActivityDetailModal(e);
      }}
    >
      <Modal.Header>
        <Modal.Title> Activity detail</Modal.Title>
      </Modal.Header>
      <div>{displayView()}</div>
      <Button
        className="activityModalCloseButton"
        onClick={(e) => {
          handleClickToToggleActivityDetailModal(e);
        }}
      >
        close
      </Button>
      <Modal.Body />
    </Modal>
  );
};

export default ActivityDetailModal;
