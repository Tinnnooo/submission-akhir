/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

function ThreadInput({ threadInput }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const navigate = useNavigate();

  function threadInputHandler() {
    if (title.trim() && body.trim() && category.trim()) {
      threadInput(title, body, category);
      navigate('/');
    }
  }

  return (
    <form className="input-thread" onSubmit={threadInputHandler}>
      <div className="input-label">
        <label htmlFor="Title" className="label-title">
          Title
        </label>
        <input
          type="text"
          className="title"
          id="title"
          value={title}
          onChange={onTitleChange}
          placeholder="Enter title..."
          required
        />
      </div>

      <div className="input-label">
        <label htmlFor="thread" className="thread-label">
          Thread
        </label>
        <textarea
          className="thread"
          placeholder="Some text..."
          id="thread"
          style={{ height: 200 }}
          value={body}
          onChange={onBodyChange}
          required
        />
      </div>

      <div className="input-label">
        <label htmlFor="category" className="category-label">
          Category
        </label>
        <input
          type="text"
          className="category"
          id="category"
          value={category}
          onChange={onCategoryChange}
          placeholder="Type your category.."
          required
        />
      </div>
      <button
        className="create-input"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

ThreadInput.propTypes = {
  threadInput: PropTypes.func.isRequired,
};

export default ThreadInput;
