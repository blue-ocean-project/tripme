import React from 'react';
import './Activity.css';
import { CardColumns, Container, Row, Col } from 'react-bootstrap';
import IndividualActivity from './IndividualActivity.jsx';

const sampleActivityList = [
  {
    id: 1,
    type: 'concert',
    name: 'Coldplay Tour Concert',
    duration: 120,
    trip_id: 1,
  },
  {
    id: 2,
    type: 'sightseeing',
    name: 'Central Musume',
    duration: 180,
    trip_id: 1,
  },
  {
    id: 3,
    type: 'shopping',
    name: 'local shopping center',
    duration: 120,
    trip_id: 1,
  },
  {
    id: 4,
    type: 'sightseeing',
    name: 'Central Musume',
    duration: 180,
    trip_id: 1,
  },
  {
    id: 5,
    type: 'shopping',
    name: 'local shopping center',
    duration: 120,
    trip_id: 1,
  },
];

const Activity = () => (
  <>
    <div className="activityComponentHeader">Activity</div>
    <Container fluid className="activityCards">
      <Row>
        <Col>
          <CardColumns>
            {sampleActivityList.map((item) => (
              <IndividualActivity className="overflow-auto" item={item} key={item.id} />
            ))}
          </CardColumns>
        </Col>
      </Row>
    </Container>
  </>
);

export default Activity;
