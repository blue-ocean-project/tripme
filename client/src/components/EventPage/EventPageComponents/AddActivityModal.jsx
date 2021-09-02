import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import AddActivityForm from './AddActivityForm.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../state/actions/activityActions/activityActions.js';

const AddActivityModal = () => {
  const isAddActivityModalOpen = useSelector((state) => state.isAddActivityModalOpen);
  const dispatch = useDispatch();
  const { toggleActivityModal } = bindActionCreators(actionCreators, dispatch);

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
      {/* <Button
        className="addActivityModalCloseButton"
        onClick={(e) => {
          handleAddActivityButtonClick(e);
        }}
      >
        close
      </Button> */}
      <Modal.Body />
    </Modal>
  );
};

export default AddActivityModal;
