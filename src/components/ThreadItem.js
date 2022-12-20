/* eslint-disable no-dupe-else-if */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { TfiComment } from 'react-icons/tfi';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import parse from 'html-react-parser';
import { postedAt } from '../utils/index';

function ThreadItem({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
  authUser,
  like,
  dislike,
  neutralLike,
  neutralDislike,
}) {
  const navigate = useNavigate();
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadLiked) {
      neutralDislike(id);
      like(id);
    } else if (isThreadLiked) {
      like(id);
    } else if (isThreadLiked) {
      neutralLike(id);
    }
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadLiked) {
      dislike(id);
    } else if (isThreadLiked) {
      neutralLike(id);
      dislike(id);
    } else if (isThreadDisliked) {
      neutralLike(id);
    }
  };

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/talks/${id}`);
    }
  };

  return (
    <div role="button" tabIndex={0} onKeyDown={onThreadPress} onClick={onThreadClick} className="thread-item">
      <div className="thread-item__detail">
        <header className="thread-item__header">
          <img src={user.avatar} alt={user.name} />
          <div className="thread-item__header-user">
            <p className="header-user__name">{user.name}</p>
            <p className="header-user__time">{postedAt(createdAt)}</p>
          </div>
        </header>
        <article className="thread-item__info">
          <p className="info__title">{title}</p>
          <p className="info__category">{`#${category}`}</p>
        </article>
        <article className="thread-item__content">
          <div className="content-body">{parse(body)}</div>
        </article>
        <div className="thread-item__action">
          <p className="action__list">
            <button type="button" onClick={onLikeClick} className="action__like-button">
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
            <button type="button" onClick={onDislikeClick} className="action__dislike-button">
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
          <p className="action__list">
            <button href="/detail-thread" type="button" className="action__comment-button">
              <TfiComment />
            </button>
            {totalComments}
          </p>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralLike: PropTypes.func,
  neutralDislike: PropTypes.func,
};

ThreadItem.defaultProps = {
  like: null,
  dislike: null,
  neutralDislike: null,
  neutralLike: null,
};

export { threadItemShape };

export default ThreadItem;
