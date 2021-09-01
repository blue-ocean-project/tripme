import React, { useState } from 'react';
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const LeaveCommentModal = ({ key, handleClickToTogglehandleLeaveCommentModal }) => {
  const dispatch = useDispatch();
  const isLeaveNewCommentModalOpen = useSelector((state) => state.isLeaveNewCommentModalOpen);
  const [commentBody, setCommentBody] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickToTogglehandleLeaveCommentModal(e);
    dispatch({ type: 'LEAVE_NEW_COMMENT', payload: commentBody });
    console.log(commentBody);
  };

  return (
    <div>
      <Modal
        contentClassName="addActivityModal"
        centered
        animation
        show={isLeaveNewCommentModalOpen}
        onHide={(e) => {
          handleClickToTogglehandleLeaveCommentModal(e);
        }}
      >
        <Modal.Header>
          <Modal.Title> Thoughts about this activity </Modal.Title>
        </Modal.Header>
        <div>
          <Form className="leaveCommentForm" onSubmit={handleSubmit}>
            <div>Comment:</div>
            <Form.Control
              type="text"
              placeholder="Leave a Comment"
              onChange={(e) => {
                setCommentBody(e.target.value);
              }}
            />
            <Container>
              <Row>
                <Col>
                  <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
                </Col>
                <Col>
                  <Button
                    onClick={(e) => {
                      handleClickToTogglehandleLeaveCommentModal(e);
                    }}
                  >
                    close
                  </Button>
                </Col>
              </Row>
            </Container>
          </Form>
        </div>
        <Modal.Body />
      </Modal>
    </div>
  );
};

export default LeaveCommentModal;
