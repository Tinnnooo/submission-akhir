/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { postedAt } from '../utils';

const options = {
  replace: (domNode) => {
    if (domNode.attribs && domNode.attribs.class === 'remove') {
      return <> </>;
    }
  },
};

function ThreadCommentItem({ content, createdAt, owner }) {
  return (
    <section>
      <div className="thread-comment__item-container">
        <div className="thread-comment__item-user">
          <img src={owner.avatar} alt={`${owner.name}`} />
          <div>
            <h5>{owner.name}</h5>
            <p>{postedAt(createdAt)}</p>
          </div>
        </div>
        <div className="thread-comment__item-comment">
          <article>
            <p>{parse(content, options)}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

const ownerCommentItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadCommentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerCommentItemShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadCommentItem.propTypes = {
  ...threadCommentItemShape,
};

export { threadCommentItemShape };

export default ThreadCommentItem;
