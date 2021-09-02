import React, { useState } from 'react';
import './Upcoming.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import { changeToEventPage } from '../../../state/actions/index';
import yellowstone from '../../../../public/img/Yellowstone.png';

const UpcomingTrip = (props) => {
  return (
    <Card className="tripCard" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={'https://source.unsplash.com/1600x900/?camping'} />
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
          <>
            {moment(props.trip.start_date).format('MMM Do YYYY') +
              ' - ' +
              moment(props.trip.end_date).format('MMM Do YYYY')}
          </>
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
