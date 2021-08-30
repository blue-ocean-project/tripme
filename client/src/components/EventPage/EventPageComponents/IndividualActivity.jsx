/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, ListGroup, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import sightseeing from './img/sightseeing.jpg';
import concert from './img/concert.jpeg';
import shopping from './img/shopping.png';
import './Activity.css';
import other from './img/other.png';
import AddActivityForm from './AddActivityForm.jsx';
import SmsIcon from '@material-ui/icons/Sms';

const IndividualActivity = ({ item }) => {
  const isAddActivityModalOpen = useSelector((state) => state.isAddActivityModalOpen);
  const dispatch = useDispatch();
  const openAddActivityModal = (e) => {
    e.preventDefault();
    dispatch({ type: 'TOGGLE_ACTIVITY_MODAL' });
  };

  return (
    <div role="presentation">
      <OverlayTrigger
        overlay={
          <Tooltip
            // id="tooltip-activity"
            // className="activityTooltip"
            placement="auto"
            delay={{ show: 250, hide: 400 }}
          >
            click to see more
          </Tooltip>
        }
      >
        <Card className="individualActivityCard" onClick={openAddActivityModal}>
          {item.type === 'sightseeing' ? (
            <Card.Img className="cardHeaderImg" src={sightseeing} alt="sightseeing image" />
          ) : null}
          {item.type === 'concert' ? (
            <Card.Img className="cardHeaderImg" src={concert} alt="concert image" />
          ) : null}
          {item.type === 'shopping' ? (
            <Card.Img src={shopping} className="cardHeaderImg" alt="shopping image" />
          ) : null}
          {item.type === 'other' ? (
            <Card.Img className="cardHeaderImg" src={other} alt="other image" />
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
          <div className="activityFooter">
            <button type="button" className="smsIcon">
              <SmsIcon fontSize="small" color="primary" />
              Comment
            </button>
            <button type="button" className="activityClickToSeeMore" onClick={openAddActivityModal}>
              Click to see more
            </button>
          </div>
        </Card>
      </OverlayTrigger>
      <div>
        <Modal
          centered
          animation
          show={isAddActivityModalOpen}
          onHide={(e) => {
            openAddActivityModal(e);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Add Activity
              <div>
                <AddActivityForm />
              </div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body />
          <Modal.Footer />
        </Modal>
      </div>
    </div>
  );
};

export default IndividualActivity;
