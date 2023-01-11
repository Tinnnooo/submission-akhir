import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LeaderboardList from '../components/LeaderboardsList';
import { asyncPopulateLeaderboards } from '../states/shared/action';

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <section>
      <div className="leaderboard-container">
        <div className="back-home">
          <Link to="/" className="link-home">Back</Link>
        </div>
        <h4 className="container-title">
          Active User Leaderboards
        </h4>
        <LeaderboardList leaderboards={leaderboardsList} />
      </div>
    </section>
  );
}

export default LeaderboardsPage;
