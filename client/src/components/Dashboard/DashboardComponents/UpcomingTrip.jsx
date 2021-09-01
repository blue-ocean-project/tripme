import React, { useState } from 'react';
import './Upcoming.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import yellowstone from '../../../../public/img/Yellowstone.png';

const UpcomingTrip = (props) => {
  return (
    <Card className="test" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={yellowstone} />
      <Card.Body>
        <Card.Title>{props.trip.destination}</Card.Title>
        <Card.Text>
          {/* <h6>Trip Members:</h6>
          {props.trip.members.map((member, index) => {
            if (index !== props.trip.members.length - 1) {
              return <span key={index}>{member.first_name + ', '}</span>;
            } else {
              return <span key={index}>{member.first_name}</span>;
            }
          })} */}
          <div>
            {moment(props.trip.start_date).format('MMM Do YYYY') +
              ' - ' +
              moment(props.trip.end_date).format('MMM Do YYYY')}
          </div>
        </Card.Text>
        <Button variant="primary">See plan</Button>
      </Card.Body>
    </Card>
  );
};

export default UpcomingTrip;
