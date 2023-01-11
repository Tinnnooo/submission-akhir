/**
 * test scenario for threadDetailReducer
 *
 * - threadsReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 *  - should return null when given by CLEAR_THREAD_DETAIL action
 * - should return the thread with comment thread when given by
 *    ADD_COMMENT action
 *  - should return the thread with toggle upVotesBy thread when given by
 *    TOGGLE_UP_VOTE_THREAD_DETAIL action
 *  - should return the thread with toggle downVotesBy thread when given by
 *    TOGGLE_DOWN_VOTE_THREAD_DETAIL action
 *  - should return the thread with upVotesBy thread when given by
 *    TOGGLE_NEUTRAL_UP_VOTE_THREAD_DETAIL action
 *  - should return the thread with downVotesBy thread when given by
 *    TOGGLE_NEUTRAL_DOWN_VOTE_THREAD_DETAIL action
*/

import threadDetailReducer from './reducer';

describe('threadDetailReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {};
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'threads-1',
          title: 'Title 1',
          body: 'Body 1',
          category: 'Category 1',
          user: 'user-1',
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return null when given by CLEAR_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'threads-1',
      title: 'Title 1',
      body: 'Body 1',
      category: 'Category 1',
      user: 'user-1',
      upVotesBy: [],
      downVotesBy: [],
      created: '2022-01-22T10:06:55.588Z',
    };

    const action = {
      type: 'CLEAR_THREAD_DETAIL',
      payload: null,
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload);
  });

  it('should return the thread when given by ADD_COMMENT', () => {
    // arrange
    const initialState = [
      {
        id: 'threads-1',
        title: 'Title 1',
        body: 'Body 1',
        category: 'Category 1',
        user: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        created: '2022-01-22T10:06:55.588Z',
        comments: [],
      },
    ];

    const action = {
      type: 'ADD_COMMENT',
      payload: {
        comment: 'Comment',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      action.payload,
    ]);
  });

  it('should return the thread with the toggled upVotesBy thread when given by TOGGLE_UP_VOTE_THREAD_DETAIL', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Title 1',
      body: 'Body 1',
      category: 'Category 1',
      upVotesBy: [],
      downVotesBy: [],
      user: 'user-1',
      created: '2022-01-22T10:06:55.588Z',
    };

    const action = {
      type: 'TOGGLE_UP_VOTE_THREAD_DETAIL',
      payload: {
        id: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(
      {
        ...initialState,
        upVotesBy: [action.payload.userId],
      },
    );
  });

  it('should return the thread with toggle downVotesBy when given by TOGGLE_DOWN_VOTE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Title 1',
      body: 'Body 1',
      category: 'Category 1',
      upVotesBy: [],
      downVotesBy: [],
      user: 'user-1',
      created: '2022-01-22T10:06:55.588Z',
    };

    const action = {
      type: 'TOGGLE_DOWN_VOTE_THREAD_DETAIL',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(
      {
        ...initialState,
        downVotesBy: [action.payload.userId],
      },
    );
  });
});
