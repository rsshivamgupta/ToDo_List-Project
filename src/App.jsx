
import React from 'react';
import TodoList from './components/TodoList';
import './assets/App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
