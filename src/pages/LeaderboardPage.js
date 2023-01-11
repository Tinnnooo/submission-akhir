import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LeaderboardList from '../components/LeaderboardsList';
import { BackHomeContainer } from '../components/styled/BackHomeContainer';
import { LeadeboardContainer } from '../components/styled/LeaderboardContainer';
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
    <LeadeboardContainer>
      <BackHomeContainer>
        <Link to="/" className="link-home">Back</Link>
      </BackHomeContainer>
      <h4 className="container-title">
        Active User Leaderboards
      </h4>
      <LeaderboardList leaderboards={leaderboardsList} />
    </LeadeboardContainer>
  );
}

export default LeaderboardsPage;
