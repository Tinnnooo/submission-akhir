import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ThreadCategoryList from '../components/ThreadCategoryList';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncToggleDownVoteThread,
  asyncToggleNeutralDownVoteThread,
  asyncToggleNeutralUpVoteThread,
  asyncToggleUpVoteThread,
} from '../states/threads/action';

import {
  HomePageContainer,
  HomePageCategory,
  HomePageCategoryContent,
  HomePageSideBar,
  HomePageSidebarToggle,
} from '../components/styled/HomePageContainer';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onLike = (id) => {
    dispatch(asyncToggleUpVoteThread(id));
  };

  const onDislike = (id) => {
    dispatch(asyncToggleDownVoteThread(id));
  };

  const onNeutralLike = (id) => {
    dispatch(asyncToggleNeutralUpVoteThread(id));
  };

  const onNeutralDislike = (id) => {
    dispatch(asyncToggleNeutralDownVoteThread(id));
  };

  const threadCategoryList = threads.filter((thread, index) => (
    threads.findIndex((obj) => obj.category === thread.category) === index
  ));

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <HomePageContainer>
      <HomePageCategory>
        <HomePageCategoryContent>
          <h1>Category</h1>
          <ThreadCategoryList threads={threadCategoryList} />
        </HomePageCategoryContent>
      </HomePageCategory>
      <ThreadsList
        threads={threadList}
        like={onLike}
        dislike={onDislike}
        neutralLike={onNeutralLike}
        neutralDislike={onNeutralDislike}
      />
      <HomePageSideBar>
        <HomePageSidebarToggle>
          <Link to="/create-thread" className="toggle-create">Add Thread</Link>
          <Link to="/leaderboards" className="toggle-leaderboards">Leaderboards</Link>
        </HomePageSidebarToggle>
      </HomePageSideBar>
    </HomePageContainer>
  );
}

export default HomePage;
