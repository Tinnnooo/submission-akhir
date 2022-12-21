import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryItem({ category }) {
  return (
    <section className="thread-item">
      <p>{`#${category}`}</p>
    </section>
  );
}

const threadItemShape = {
  category: PropTypes.string.isRequired,
};

ThreadCategoryItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };

export default ThreadCategoryItem;
