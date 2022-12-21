import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadCommentInput({ commentThread }) {
  const [content, setContent] = useState('');

  function commentThreadHandler() {
    if (content.trim()) {
      commentThread(content);
      setContent('');
    }
  }

  function handleCommentChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }

  return (
    <div className="comment-input__container">
      <h4>Leave some comment</h4>
      <form onSubmit={commentThreadHandler} className="comment-form">
        <textarea value={content} onChange={handleCommentChange} className="comment-textarea" placeholder="Leave some text here..." />
        <button type="submit" className="comment-submit">Submit</button>
      </form>
    </div>
  );
}

ThreadCommentInput.propTypes = {
  commentThread: PropTypes.func.isRequired,
};

export default ThreadCommentInput;
