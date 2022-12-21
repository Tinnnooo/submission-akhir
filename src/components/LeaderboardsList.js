import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div className="leaderboard-list">
      <div className="leaderboard-list__title">
        <p>Users</p>
        <p>Scores</p>
      </div>
      {leaderboards.map((leaderboard) => (
        <LeaderboardItem key={leaderboard.user.id} {...leaderboard} />
      ))}
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardList;
