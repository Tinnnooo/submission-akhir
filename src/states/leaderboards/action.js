const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARD',
};

function receiveLeaderBoardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

export { ActionType, receiveLeaderBoardsActionCreator };
