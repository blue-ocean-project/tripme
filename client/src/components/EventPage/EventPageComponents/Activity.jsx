import React from 'react';
import './Activity.css';
import { CardColumns, Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import IndividualActivity from './IndividualActivity.jsx';

const Activity = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  return (
    <>
      <div className="activityComponentHeader">Activity</div>
      <Button variant="outline-primary" className="addActivityButton">
        Add Activity
      </Button>
      <Container fluid className="activityCards">
        <Row>
          <Col>
            <CardColumns className="mappingActivities">
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
