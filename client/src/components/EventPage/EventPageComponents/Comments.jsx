import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import moment from 'moment';

const Comments = () => {
  const comments = useSelector((state) => state.currentActivity.comments);
  const commentsView = comments.map((comment) => (
    <Container className="Eachcomment" key={comment.id}>
      <span className="commentUserName">{comment.User.first_name} : </span>
      <span className="commentBody">{comment.body}</span>
      <span className="commentCreatedAt">{moment(comment.created_at).endOf('day').fromNow()} </span>
    </Container>
  ));
  if (comments.length === 0) {
    return <Container>No comment yet</Container>;
  }
  return commentsView;
};

export default Comments;
