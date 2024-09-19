import React, { useState } from 'react';

function Create({ onAdd }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <div className="create-form">
      <input
        type="text"
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="create-input"
      />
      <button onClick={handleAdd} className="create-button">Add</button>
    </div>
  );
}

export default Create;
