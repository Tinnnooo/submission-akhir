import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { threadCommentItemShape } from './ThreadCommentItem';

function ThreadCommentList({ comments }) {
  return (
    <section>
      <div>
        <h4>{`Comments (${comments.length})`}</h4>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <ThreadCommentItem key={comment.id} {...comment} />
          ))
        ) : (
          <div>- No Comment</div>
        )}
      </div>
    </section>
  );
}

ThreadCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(threadCommentItemShape)).isRequired,
};

export default ThreadCommentList;
