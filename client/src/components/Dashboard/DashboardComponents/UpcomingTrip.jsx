import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeToEventPage } from '../../../state/actions/index.js';
import './Upcoming.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import yellowstone from '../../../../public/img/Yellowstone.png';

const UpcomingTrip = (props) => {
  var dispatch = useDispatch();
  const localState = useSelector((states) => states.getTrip);
  console.log(localState);

  return (
    <Card className="tripCard" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={'https://source.unsplash.com/1600x900/?${query}'} />
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
        <Button
          onClick={() => {
            dispatch(changeToEventPage(false));
          }}
          variant="primary"
        >
          See plan
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UpcomingTrip;
