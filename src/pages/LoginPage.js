import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import {
  LoginPageContainer, LoginPageContent, LoginPageHeader, LoginPageInput,
} from '../components/styled/LoginPageContainer';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <LoginPageContainer>
      <LoginPageHeader>
        <h1>WOO Talk - Login</h1>
      </LoginPageHeader>
      <LoginPageContent>
        <LoginPageInput>
          <h2>Login</h2>
          <LoginInput login={onLogin} />
          <p>
            Don&apos;t have account?
            {' '}
            <Link className="link" to="/register">Register</Link>
          </p>
        </LoginPageInput>
      </LoginPageContent>
    </LoginPageContainer>
  );
}

export default LoginPage;
