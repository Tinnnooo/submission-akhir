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
        <h1>WOO Talk - Login</h1>
      </header>
      <div className="login-page__container">
        <article className="login-page__input">
          <h2>Login</h2>
          <LoginInput login={onLogin} />
          <p>
            Don&apos;t have account?
            {' '}
            <Link className="link" to="/register">Register</Link>
          </p>
        </article>
      </div>
    </section>
  );
}

export default LoginPage;
