import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncAddThread } from '../states/threads/action';
import ThreadInput from '../components/ThreadInput';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { CreateThreadContainer } from '../components/styled/CreateThreadContainer';
import { BackHomeContainer } from '../components/styled/BackHomeContainer';



function CreateThread() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onThreadInput = (title, body, category) => {
    dispatch(asyncAddThread({ title, body, category }));
  };

  return (
    <CreateThreadContainer>
      <BackHomeContainer>
        <Link to="/" className="link-home">Back</Link>
      </BackHomeContainer>
      <h3 className="page-title">
        Create New Thread
      </h3>
      <ThreadInput threadInput={onThreadInput} />
    </CreateThreadContainer>
  );
}

export default CreateThread;
