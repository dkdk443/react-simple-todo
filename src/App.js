import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';

function App() {
  
  return (
    <div className="App">
      <>
        <TodoForm />
        <TodoFilter />
        <TodoList />
      </>
    </div>
  );
}

export default App;
