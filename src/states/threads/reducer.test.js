/**
 * test scenario for threadsReducer
 *
 * - threadsReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with new thread when given by ADD_THREAD action
 *  - should return the threads with toggle upVotesBy thread when given by
 *    TOGGLE_UP_VOTE_THREAD action
 *  - should return the threads with toggle downVotesBy thread when given by
 *    TOGGLE_DOWN_VOTE_THREAD action
 *  - should return the threads with upVotesBy thread when given by
 *    TOGGLE_NEUTRAL_UP_VOTE_THREAD action
 *  - should return the threads with downVotesBy thread when given by
 *    TOGGLE_NEUTRAL_DOWN_VOTE_THREAD action
*/

import threadsReducer from './reducer';

describe('threadsReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'threads-1',
            title: 'Title 1',
            body: 'Body 1',
            category: 'Category 1',
            user: 'user-1',
            upVotesBy: [],
            downVotesBy: [],
            created: '2022-01-22T10:06:55.588Z',
          },
          {
            id: 'threads-2',
            title: 'Title 2',
            body: 'Body 2',
            category: 'Category 2',
            user: 'user-2',
            upVotesBy: [],
            downVotesBy: [],
            created: '2022-01-22T10:06:55.588Z',
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the thread with new thread when given by ADD_THREAD action', () => {
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
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'threads-2',
          title: 'Title 2',
          body: 'Body 2',
          category: 'Category 2',
          user: 'user-2',
          upVotesBy: [],
          downVotesBy: [],
          created: '2022-01-22T10:06:55.588Z',
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the toggled upVotesBy thread when given by TOGGLE_UP_VOTE_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title 1',
        body: 'Body 1',
        category: 'Category 1',
        upVotesBy: [],
        downVotesBy: [],
        user: 'user-1',
        created: '2022-01-22T10:06:55.588Z',
      },
    ];

    const action = {
      type: 'TOGGLE_UP_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with toggle downVotesBy when given by TOGGLE_DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title 1',
        body: 'Body 1',
        category: 'Category 1',
        upVotesBy: [],
        downVotesBy: [],
        user: 'user-1',
        created: '2022-01-22T10:06:55.588Z',
      },
    ];

    const action = {
      type: 'TOGGLE_DOWN_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with upVotesBy thread when given by TOGGLE_NEUTRAL_UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title 1',
        body: 'Body 1',
        category: 'Category 1',
        upVotesBy: ['user-1'],
        downVotesBy: [],
        user: 'user-1',
        created: '2022-01-22T10:06:55.588Z',
      },
    ];

    const action = {
      type: 'TOGGLE_NEUTRAL_UP_VOTE_THREAD',
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return threads with downVotesBy thread when given by TOGGLE_NEUTRAL_DOWN_VOTE_THREAD', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title 1',
        body: 'Body 1',
        category: 'Category 1',
        upVotesBy: [],
        downVotesBy: ['user-1'],
        user: 'user-1',
        created: '2022-01-22T10:06:55.588Z',
      },
    ];

    const action = {
      type: 'TOGGLE_NEUTRAL_DOWN_VOTE_THREAD',
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
