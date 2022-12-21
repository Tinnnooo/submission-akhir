/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { postedAt } from '../utils';
import ThreadCommentInput from './ThreadCommentInput';
import ThreadCommentItem, { threadCommentItemShape } from './ThreadCommentItem';

function ThreadDetail({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
  like,
  dislike,
  neutralLike,
  neutralDislike,
  addCommentThread,
}) {
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      like(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
      like(id);
    } else if (isThreadLiked) {
      neutralLike(id);
    }
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      dislike(id);
    } else if (isThreadLiked) {
      neutralLike(id);
      dislike(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
    }
  };

  return (
    <section className="thread-detail__container">
      <div className="thread-detail__user">
        <img src={owner.avatar} alt={owner.name} />
        <div className="thread-detail__user-info">
          <h3>{owner.name}</h3>
          <p>{`Created ${postedAt(createdAt)}`}</p>
        </div>
        <p className="category-detail">{`# ${category}`}</p>
      </div>
      <div className="thread-detail__thread">
        <h2>{title}</h2>
        <p>{parse(body)}</p>
      </div>
      <div className="thread-detail__action">
        <p className="action__list">
          <button type="button" onClick={onLikeClick} className="action__like-button-detail">
            {isThreadLiked ? (
              <AiOutlineLike style={{ color: 'blue' }} />
            ) : (
              <AiOutlineLike />
            )}
          </button>
          {isThreadLiked ? (
            <span style={{ color: 'blue' }}>{upVotesBy.length}</span>
          ) : (
            <span>{upVotesBy.length}</span>
          )}
        </p>

        <p className="action__list">
          <button type="button" onClick={onDislikeClick} className="action__dislike-button-detail">
            {isThreadDisliked ? (
              <AiOutlineDislike style={{ color: 'red' }} />
            ) : (
              <AiOutlineDislike />
            )}
          </button>
          {isThreadDisliked ? (
            <span style={{ color: 'red' }}>{downVotesBy.length}</span>
          ) : (
            <span>{downVotesBy.length}</span>
          )}
        </p>
      </div>
      <ThreadCommentInput commentThread={addCommentThread} />
      <div className="comment-container">
        <h2 className="comment-length">{`Comments (${comments.length})`}</h2>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <ThreadCommentItem key={comment.id} {...comment} />
          ))
        ) : (
          <div>- No Comments</div>
        )}
      </div>

    </section>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(threadCommentItemShape)).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralLike: PropTypes.func,
  neutralDislike: PropTypes.func,
  addCommentThread: PropTypes.func,
};

ThreadDetail.defaultProps = {
  like: null,
  dislike: null,
  neutralLike: null,
  neutralDislike: null,
  addCommentThread: null,
};

export { userShape };

export default ThreadDetail;
