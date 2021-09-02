import React from 'react';
import { useSelector } from 'react-redux';

const Comments = () => {
  const comments = useSelector((state) => state.currentActivity.comments);

  const commentsView = comments.map((comment) => (
    <div className="Eachcomment" key={comment.id}>
      <span className="commentUserName">{comment.userFirst} : </span>
      <span className="commentBody">{comment.body}</span>
    </div>
  ));

  return commentsView;
};

export default Comments;
