import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ActivityDetailModal = ({ handleClickToToggleActivityDetailModal, key }) => {
  const isActivityDetailModalOpen = useSelector((state) => state.isActivityDetailModalOpen);
  const activityIdClicked = useSelector((state) => state.activities).filter(
    (eachActivity) => eachActivity.id !== key,
  );

  return (
    <Modal
      contentClassName="activityDetailModal"
      centered
      animation
      show={isActivityDetailModalOpen}
      onHide={(e) => {
        handleClickToToggleActivityDetailModal(e);
      }}
    >
      <Modal.Header>
        <Modal.Title> Activity detail</Modal.Title>
      </Modal.Header>
      <div>{activityIdClicked.id} hello</div>
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
