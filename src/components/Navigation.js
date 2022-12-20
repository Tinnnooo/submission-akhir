import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (

    <section className="navigation">
      <div className="navigation-auth">
        <div className="navigation-acc">
          <p className="navigation-name">{name}</p>
          <img className="navigation-avatar" src={avatar} alt={id} title={name} />
          <button className="navigation-button" type="button" onClick={signOut}>Logout</button>
        </div>
      </div>
    </section>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  // eslint-disable-next-line react/require-default-props
  authUser: PropTypes.shape(authUserShape),
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
