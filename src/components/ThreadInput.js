/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function ThreadInput({ addSomeThread }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function addThread() {
    if (title.trim() && body.trim()) {
      addSomeThread({ title, body });
      setTitle('');
      setBody('');
    }
  }

  function handleTitleChange({ target }) {
    if (target.value.length <= 100) {
      setTitle(target.value);
    }
  }

  function handleBodyChange({ target }) {
    if (target.value.length <= 320) {
      setBody(target.value);
    }
  }

  return (
    <div>
      <input type="text" value={title} placeholder="Title" onChange={handleTitleChange} />
      <textarea type="text" placeholder="Add some text." value={body} onChange={handleBodyChange} />
      <p>
        <strong>{body.length}</strong>
        /320
      </p>
      <button type="submit" onClick={addThread}>Post</button>
    </div>
  );
}

export default ThreadInput;
