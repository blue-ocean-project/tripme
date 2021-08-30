/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import sightseeing from './sightseeing.jpg';
import concert from './concert.jpeg';
import shopping from './shopping.png';
import './Activity.css';

const IndividualActivity = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card className="individualActivityCard">
        {item.type === 'sightseeing' ? (
          <Card.Img className="cardHeaderImg" src={sightseeing} alt="sightseeing image" />
        ) : null}
        {item.type === 'concert' ? (
          <Card.Img className="cardHeaderImg" src={concert} alt="concert image" />
        ) : null}
        {item.type === 'shopping' ? (
          <Card.Img src={shopping} className="cardHeaderImg" alt="shopping image" />
        ) : null}
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="activityListItem">
              Activity: <span>{`${item.type}`}</span>
            </ListGroup.Item>
            <ListGroup.Item className="activityListItem">
              Duration: {item.duration} mins
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default IndividualActivity;
