import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ signOut }) {
  return (
    <div className="navigation">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <button type="button" onClick={signOut}>Logout</button>
    </div>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
