import React, { useState } from 'react';
import Create from './Create';
import TodoItem from './TodoItem';

function TodoList() {
  const [todos, setTodos] = useState([]);

 
  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
  };


  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
  };

  return (
    <div className="todo-list">
      <Create onAdd={addTodo} />
      <div className="todo-items">
        {todos.length === 0 ? (
          <p className="no-todos">No tasks to show</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              task={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
