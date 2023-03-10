import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));

    navigate('/');
  };

  return (
    <section className="register-page">
      <header className="register-page__header">
        <h1>WOO Talk - Register</h1>
      </header>
      <div className="register-page__container">
        <article className="register-page__input">
          <h2>Create Your Account</h2>
          <RegisterInput register={onRegister} />
          <p>
            Already have an account?
            {' '}
            <Link className="link" to="/">Login</Link>
          </p>
        </article>
      </div>
    </section>
  );
}

export default RegisterPage;
