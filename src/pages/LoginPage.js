import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page">
      <header className="login-page__header">
        <h1>Dicoding Threads</h1>
      </header>
      <article className="login-page__main">
        <h2>Login</h2>
        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have account?
          {' '}
          <Link className="link" to="/register">Register</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
