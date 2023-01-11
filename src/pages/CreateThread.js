import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function CreateThread() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onThreadInput = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <div className="create-thread__page">
      <div className="back-home">
        <Link to="/" className="link-home">Back</Link>
      </div>
      <h3 className="page-title">
        Create New Thread
      </h3>
      <ThreadInput threadInput={onThreadInput} />
    </div>
  );
}

export default CreateThread;
