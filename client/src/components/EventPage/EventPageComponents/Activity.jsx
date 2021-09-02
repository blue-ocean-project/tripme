import React, { useEffect, useState, useRef } from 'react';
import './Activity.css';
import { CardColumns, Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import IndividualActivity from './IndividualActivity.jsx';
import * as actionCreators from '../../../state/actions/activityActions/activityActions.js';
import AddActivityModal from './AddActivityModal.jsx';
import ActivityDetailModal from './ActivityDetailModal.jsx';
import AddToCalendarModal from './AddToCalendarModal.jsx';
import LeaveCommentModal from './LeaveCommentModal.jsx';

const Activity = () => {
  const dispatch = useDispatch();

  const activities = useSelector((state) => state.activities).sort((a, b) => b.id - a.id);
  const {
    toggleAddActivityModal,
    toggleActivityDetailModal,
    toggleAddToCalendarModal,
    toggleLeaveCommentModal,
    fetchActivities,
    setCurrentActivity,
  } = bindActionCreators(actionCreators, dispatch);

  const handleAddActivityButtonClick = (e) => {
    e.preventDefault();
    toggleAddActivityModal();
  };

  useEffect(() => fetchActivities(1), []);

  return (
    <>
      <div className="activityComponentHeader">Activity</div>
      <Button
        variant="outline-primary"
        className="addActivityButton"
        onClick={(e) => handleAddActivityButtonClick(e)}
      >
        Add Activity
      </Button>
      <Container fluid className="activityCards">
        <Row>
          <Col>
            <CardColumns className="mappingActivity">
              {activities.map((item) => (
                <IndividualActivity
                  className="overflow-auto"
                  item={item}
                  key={item.id}
                  setCurrentActivity={setCurrentActivity}
                />
              ))}
            </CardColumns>
          </Col>
        </Row>
      </Container>
      <AddActivityModal toggleAddActivityModal={toggleAddActivityModal} />
      <ActivityDetailModal toggleActivityDetailModal={toggleActivityDetailModal} />
      <AddToCalendarModal toggleAddToCalendarModal={toggleAddToCalendarModal} />
      <LeaveCommentModal toggleLeaveCommentModal={toggleLeaveCommentModal} />
    </>
  );
};

export default Activity;
