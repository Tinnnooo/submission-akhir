import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [action.payload.thread, ...threads];
    case ActionType.TOGGLE_VOTE_THREAD:
      return threads.map((thread) => {
        if (thread.id === action.payload.threadId) {
          return {
            ...thread,
            votes: thread.votes.includes(action.payload.userId)
              ? thread.votes.filter((id) => id !== action.payload.userId)
              : thread.votes.concat([action.payload.userId]),
          };
        }
        return thread;
      });
    default:
      return threads;
  }
}
