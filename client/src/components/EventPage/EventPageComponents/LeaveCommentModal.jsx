import React, { useState } from 'react';
import { Modal, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Comments from './Comments.jsx';
import * as actionCreators from '../../../state/actions/activityActions/activityActions.js';
import { bindActionCreators } from 'redux';

const LeaveCommentModal = ({ toggleLeaveCommentModal }) => {
  const userId = useSelector((state) => (state.user ? state.user.user_id : 1));
  const dispatch = useDispatch();
  const isLeaveNewCommentModalOpen = useSelector((state) => state.isLeaveNewCommentModalOpen);
  const activityId = useSelector((state) => state.currentActivity).id;
  const [commentBody, setCommentBody] = useState('');
  const { leaveNewComment } = bindActionCreators(actionCreators, dispatch);
  const handleSubmit = (e) => {
    // e.preventDefault();
    toggleLeaveCommentModal(e);
    leaveNewComment(activityId, userId, commentBody);
  };

  return (
    <div>
      <Modal
        contentClassName="addActivityModal"
        centered
        animation
        show={isLeaveNewCommentModalOpen}
        onHide={toggleLeaveCommentModal}
      >
        <Modal.Header>
          <Modal.Title> Thoughts about this activity </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form className="leaveCommentForm" onSubmit={handleSubmit}>
              <Row>Leave Your Comment Here:</Row>
              <Form.Control
                type="text"
                placeholder="Leave a Comment"
                onChange={(e) => {
                  setCommentBody(e.target.value);
                }}
              />

              <Row className="CommentsSectionOfCommentModal">Comments:</Row>
              <Row>
                <Comments />
              </Row>

              <Container className="leaveCommentButtonsContainer">
                <Row>
                  <Col>
                    <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
                  </Col>
                  <Col>
                    <Button onClick={toggleLeaveCommentModal}>close</Button>
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
