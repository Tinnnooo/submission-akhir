import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score }) {
  return (
    <div className="leaderboard-item">
      <div className="item-user">
        <img src={user.avatar} alt={user.name} />
        <div className="item-user__info">
          <h5>{user.name}</h5>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="item-score">
        <p className="score">{score}</p>
      </div>
    </div>
  );
}

const userLeaderboardItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userLeaderboardItemShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;
