/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Card, ListGroup, OverlayTrigger, Tooltip, Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import SmsIcon from '@material-ui/icons/Sms';
import sightseeing from './img/sightseeing.jpg';
import concert from './img/concert.jpeg';
import shopping from './img/shopping.png';
import amusement from './img/amusement.png';
import museum from './img/museum.jpeg';
import movie from './img/movie.jpeg';
import workout from './img/workout.png';
import dining from './img/dining.jpeg';
import other from './img/other.png';
import './Activity.css';
import AddActivityForm from './AddActivityForm.jsx';
import ActivityDetailModal from './ActivityDetailModal.jsx';
import LeaveCommentModal from './LeaveCommentModal.jsx';

const IndividualActivity = ({ item }) => {
  const isAddActivityModalOpen = useSelector((state) => state.isAddActivityModalOpen);
  // const isActivityDetailModalOpen = useSelector((state) => state.isActivityDetailModalOpen);
  const dispatch = useDispatch();
  const openAddActivityModal = () => {
    dispatch({ type: 'TOGGLE_ACTIVITY_MODAL' });
  };

  const openActivityDetailModal = () => {
    dispatch({ type: 'TOGGLE_ACTIVITY_DETAIL_MODAL' });
  };

  const openLeaveCommentModal = () => {
    dispatch({ type: 'TOGGLE_LEAVE_COMMENT_MODAL' });
  };

  const handleClickToToggleAddActivityModal = (e) => {
    e.preventDefault();
    openAddActivityModal();
  };

  const handleClickToToggleActivityDetailModal = (e) => {
    e.preventDefault();
    openActivityDetailModal();
  };

  const handleClickToTogglehandleLeaveCommentModal = (e) => {
    e.preventDefault();
    openLeaveCommentModal();
  };

  const image = (itemType) => {
    if (item.type === 'sightseeing') {
      return <Card.Img className="cardHeaderImg" src={sightseeing} alt="sightseeing image" />;
    }
    if (item.type === 'concert') {
      return <Card.Img className="cardHeaderImg" src={concert} alt="concert image" />;
    }
    if (item.type === 'shopping') {
      return <Card.Img src={shopping} className="cardHeaderImg" alt="shopping image" />;
    }
    if (item.type === 'amusement') {
      return <Card.Img className="cardHeaderImg" src={amusement} alt="amusement image" />;
    }
    if (item.type === 'shopping') {
      return <Card.Img src={shopping} className="cardHeaderImg" alt="shopping image" />;
    }
    if (item.type === 'dining') {
      return <Card.Img className="cardHeaderImg" src={dining} alt="dining image" />;
    }
    if (item.type === 'museum') {
      return <Card.Img className="cardHeaderImg" src={museum} alt="museum image" />;
    }
    if (item.type === 'workout') {
      return <Card.Img className="cardHeaderImg" src={workout} alt="workout image" />;
    }
    if (item.type === 'movie') {
      return <Card.Img className="cardHeaderImg" src={movie} alt="movie image" />;
    }
    return <Card.Img className="cardHeaderImg" src={other} alt="other image" />;
  };

  return (
    <div role="presentation">
      <OverlayTrigger
        overlay={
          <Tooltip
            // id="tooltip-activity"
            // className="activityTooltip"
            placement="top"
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
            onKeyPress={handleClickToToggleActivityDetailModal}
            className="individualActivityCardImgDiv"
            onClick={(e) => {
              handleClickToToggleActivityDetailModal(e);
            }}
          >
            {image(item)}
          </div>
          <Card.Body>
            <ListGroup
              className="activityListGroup"
              variant="flush"
              onClick={(e) => {
                handleClickToToggleActivityDetailModal(e);
              }}
            >
              <ListGroup.Item className="activityListItem">
                <span className="activityListItemType">Activity </span>
                <span className="activityListItemText">{`${item.type}`}</span>
              </ListGroup.Item>
              <ListGroup.Item className="activityListItem">
                <span className="activityListItemType">Duration </span>
                <span className="activityListItemText">{item.start_time}</span>
                <span className="activityListItemText">{item.end_time}</span>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <div className="activityFooter">
            <button
              type="button"
              className="smsIcon"
              onClick={(e) => {
                handleClickToTogglehandleLeaveCommentModal(e);
              }}
            >
              <SmsIcon fontSize="small" color="primary" />
              <span className="commentActivity">Comment</span>
            </button>
            <button
              type="button"
              className="activityClickToSeeMore"
              onClick={(e) => {
                handleClickToToggleActivityDetailModal(e);
              }}
            >
              Click to see more
            </button>
          </div>
        </Card>
      </OverlayTrigger>
      <div>
        <Modal
          contentClassName="addActivityModal"
          centered
          animation
          show={isAddActivityModalOpen}
          onHide={(e) => {
            handleClickToToggleActivityDetailModal(e);
          }}
        >
          <Modal.Header>
            <Modal.Title> Add New Activity</Modal.Title>
          </Modal.Header>
          <div>
            <AddActivityForm />
          </div>
          <Button
            className="addActivityModalCloseButton"
            onClick={(e) => {
              handleClickToToggleAddActivityModal(e);
            }}
          >
            close
          </Button>
          <Modal.Body />
        </Modal>
      </div>
      <ActivityDetailModal
        handleClickToToggleActivityDetailModal={handleClickToToggleActivityDetailModal}
      />
      <LeaveCommentModal
        handleClickToTogglehandleLeaveCommentModal={handleClickToTogglehandleLeaveCommentModal}
      />
    </div>
  );
};

export default IndividualActivity;
