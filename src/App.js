import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';

function App() {
  const [task, setTask] = useState([]);
  const [todos, setTodos] = useState([
    { id: 1, todo: 'aaaaa1', status: 1 },
    { id: 2, todo: 'タスク２', status: 1 },
    { id: 3, todo: 'タスク3', status: 2 },
    { id: 4, todo: 'タスク4', status: 3 }
  ]);
  const [status, setStatus] = useState([
    { id: 1, status: 'TODO'},
    { id: 2, status: 'DOING' },
    { id: 3, status: 'DONE' },
  ])
  const [text, setText] = useState('');
  let newId = todos.slice(-1)[0].id + 1;
  const newTask = (text) => {
    setText(text);
  }
  const addTask = () => {
    if (text === '') {
      alert('Oh')
    } else {
      setTodos([...todos, { id: newId, todo: text, status: 1 }]);
    }
  }
  return (
    <div className="App">
      <>
        <TodoForm addTask={addTask} newTask={newTask}/>
        <TodoFilter />
        <TodoList todos={todos} setTodos={setTodos} status={status} />
      </>
    </div>
  );
}

export default App;
