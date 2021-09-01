import React, { useState } from 'react';
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const LeaveCommentModal = ({ openLeaveCommentModal }) => {
  const dispatch = useDispatch();
  const isLeaveNewCommentModalOpen = useSelector((state) => state.isLeaveNewCommentModalOpen);
  const [commentBody, setCommentBody] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    openLeaveCommentModal(e);
    dispatch({ type: 'LEAVE_NEW_COMMENT', payload: commentBody });
  };

  return (
    <div>
      <Modal
        contentClassName="addActivityModal"
        centered
        animation
        show={isLeaveNewCommentModalOpen}
        onHide={openLeaveCommentModal}
      >
        <Modal.Header>
          <Modal.Title> Thoughts about this activity </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Container className="leaveCommentButtonsContainer">
                <Row>
                  <Col>
                    <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
                  </Col>
                  <Col>
                    <Button
                      onClick={(e) => {
                        openLeaveCommentModal(e);
                      }}
                    >
                      close
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LeaveCommentModal;
