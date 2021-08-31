import React from 'react';
import './Activity.css';
import { CardColumns, Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import IndividualActivity from './IndividualActivity.jsx';

const Activity = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  // const isAddActivityModalOpen = useSelector((state) => state.isAddActivityModalOpen);
  const handleAddActivityButtonClick = (e) => {
    e.preventDefault();
    dispatch({ type: 'TOGGLE_ACTIVITY_MODAL' });
  };

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
                <IndividualActivity className="overflow-auto" item={item} key={item.id} />
              ))}
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Activity;
