import React from 'react';

const Comments = () => {
  const comments = [
    {
      id: 1,
      body: 'This is a comment!',
      userFirst: 'Julian',
    },
    {
      id: 2,
      body: 'Sushi is so good! ',
      userFirst: 'Josh',
    },
  ];

  const commentsView = comments.map((comment) => (
    <div className="Eachcomment" key={comment.id}>
      <span className="commentUserName">{comment.userFirst} : </span>
      <span className="commentBody">{comment.body}</span>
    </div>
  ));

  return commentsView;
};

export default Comments;
