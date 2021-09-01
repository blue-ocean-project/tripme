import React from 'react';
import { Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const addToCalendarModal = ({ openAddToCalendarModal }) => {
  const isAddToCalendarModalOpen = useSelector((state) => state.isAddToCalendarModalOpen);

  return (
    <Modal
      show={isAddToCalendarModalOpen}
      centered
      animation
      contentClassName="addToCalendarModal"
      onHide={openAddToCalendarModal}
    >
      {' '}
      <Modal.Header closeButton className="modalCloseButton">
        <Modal.Title> </Modal.Title>
      </Modal.Header>
      <Modal.Body className="addedToCalendar">
        <div>Added to Calendar!</div>
      </Modal.Body>
    </Modal>
  );
};

export default addToCalendarModal;
