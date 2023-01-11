import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import {
  RegisterPageContainer,
  RegisterPageContent,
  RegisterPageHeader,
  RegisterPageInput,
} from '../components/styled/RegisterPageContainer';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));

    navigate('/');
  };

  return (
    <RegisterPageContainer>
      <RegisterPageHeader>
        <h1>WOO Talk - Register</h1>
      </RegisterPageHeader>
      <RegisterPageContent>
        <RegisterPageInput>
          <h2>Create Your Account</h2>
          <RegisterInput register={onRegister} />
          <p>
            Already have an account?
            {' '}
            <Link className="link" to="/">Login</Link>
          </p>
        </RegisterPageInput>
      </RegisterPageContent>
    </RegisterPageContainer>
  );
}

export default RegisterPage;
