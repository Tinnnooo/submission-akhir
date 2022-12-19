import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncAddThread, asyncToggleVoteThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads);
  }, [dispatch]);

  const onAddThread = ({ title, body }) => {
    dispatch(asyncAddThread({ title, body }));
  };

  const onVote = (id) => {
    dispatch(asyncToggleVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.user),
    authUser: authUser.id,
  }));

  return (
    <section>
      <ThreadInput addSomeThread={onAddThread} />
      <ThreadsList threads={threadList} vote={onVote} />
    </section>
  );
}

export default HomePage;
