import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadsList({ threads, vote }) {
  return (
    <div>
      {
                threads.map((thread) => (
                  <ThreadItem key={thread.key} {...thread} vote={vote} />
                ))
            }
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  vote: PropTypes.func.isRequired,
};

export default ThreadsList;
