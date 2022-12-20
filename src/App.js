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
            <Route path="/" element={<HomePage />} />
            <Route path="/threads/:id" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
