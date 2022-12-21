import { React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './components/Loading';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import RegisterPage from './pages/RegisterPage';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { asyncPreloadProcess } from './states/isPreload/action';
import CreateThread from './pages/CreateThread';
import PageNotFound from './pages/404PageNotFound';
import DetailPage from './pages/DetailPage';
import LeaderboardsPage from './pages/LeaderboardPage';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header>
          <Navigation authUser={authUser} signOut={onSignOut} />
        </header>
        <main>
          <Routes>
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/threads/:id" element={<DetailPage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
            <Route path="/create-thread" element={<CreateThread />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
