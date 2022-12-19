import { PropTypes } from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, createdAt, votes, user, authUser, vote,
}) {
  const navigate = useNavigate();

  const isVoted = votes.includes(authUser);

  const onVoteClick = (event) => {
    event.stopPropagation();
    vote(id);
  };

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === '') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div role="button" tabIndex={0} className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div>
        <header>
          <div>
            <p>{user.name}</p>
            <p>{postedAt(createdAt)}</p>
          </div>
        </header>
        <article>
          <p>{title}</p>
          <p>{body}</p>
        </article>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  votes: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  vote: PropTypes.func,
};

ThreadItem.defaultProps = {
  vote: null,
};

export { threadItemShape };

export default ThreadItem;
