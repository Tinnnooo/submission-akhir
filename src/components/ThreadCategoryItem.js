import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryItem({ category }) {
  return (
    <section>
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
