import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddActivityForm from './AddActivityForm.jsx';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as actionCreators from '../../../state/actions/activityActions/activityActions.js';

const AddActivityModal = ({ toggleActivityModal }) => {
  const isAddActivityModalOpen = useSelector((state) => state.isAddActivityModalOpen);

  const handleAddActivityButtonClick = (e) => {
    e.preventDefault();
    toggleActivityModal();
  };

  return (
    <Modal
      contentClassName="addActivityModal"
      centered
      show={isAddActivityModalOpen}
      onHide={(e) => {
        handleAddActivityButtonClick(e);
      }}
    >
      <Modal.Header>
        <Modal.Title> Add New Activity</Modal.Title>
      </Modal.Header>
      <div>
        <AddActivityForm />
      </div>
      <Modal.Body />
    </Modal>
  );
};

export default AddActivityModal;
