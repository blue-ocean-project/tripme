/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, ListGroup, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import SmsIcon from '@material-ui/icons/Sms';
import sightseeing from './img/sightseeing.jpg';
import concert from './img/concert.jpeg';
import shopping from './img/shopping.png';
import './Activity.css';
import other from './img/other.png';
import AddActivityForm from './AddActivityForm.jsx';

const IndividualActivity = ({ item }) => {
  const isAddActivityModalOpen = useSelector((state) => state.isAddActivityModalOpen);
  const dispatch = useDispatch();
  const openAddActivityModal = () => {
    dispatch({ type: 'TOGGLE_ACTIVITY_MODAL' });
  };
  const handleClickToToggleModal = (e) => {
    e.preventDefault();
    openAddActivityModal();
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
        <Card className="individualActivityCard">
          <div
            role="button"
            tabIndex={0}
            onKeyPress={handleClickToToggleModal}
            className="individualActivityCardImgDiv"
            onClick={(e) => {
              handleClickToToggleModal(e);
            }}
          >
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
          </div>
          <Card.Body>
            <ListGroup
              variant="flush"
              onClick={(e) => {
                openAddActivityModal(e);
              }}
            >
              <ListGroup.Item className="activityListItem">
                <span className="activityListItemType">Activity </span>
                <span className="activityListItemText">{`${item.type}`}</span>
              </ListGroup.Item>
              <ListGroup.Item className="activityListItem">
                <span className="activityListItemType">Duration </span>
                <span className="activityListItemText">{item.duration} mins</span>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <div className="activityFooter">
            <button type="button" className="smsIcon">
              <SmsIcon fontSize="small" color="primary" />
              Comment
            </button>
            <button
              type="button"
              className="activityClickToSeeMore"
              onClick={(e) => {
                openAddActivityModal(e);
              }}
            >
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
