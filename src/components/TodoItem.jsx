import React, { useState } from 'react';

function TodoItem({ task, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleUpdate = () => {
    onUpdate(task.id, updatedText);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
        className="todo-checkbox"
      />

      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          className="todo-edit-input"
        />
      ) : (
        <span className={`todo-text ${task.done ? 'completed' : ''}`}>
          {task.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={handleUpdate} className="todo-update-button">
          Save
        </button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="todo-edit-button">
          Edit
        </button>
      )}

      <button onClick={() => onDelete(task.id)} className="todo-delete-button">
        &times;
      </button>
    </div>
  );
}

export default TodoItem;
