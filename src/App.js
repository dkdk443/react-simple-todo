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
  const [status, setStatus] = useState('ALL');

  const [text, setText] = useState('');
  // let newId = todos.slice(-1)[0].id + 1;
  let newId = Math.random();
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
  const handleStatus = (status) => {
    setStatus(status);
    console.log(status);
  }

  const filterTodos = todos.filter(todo => {
    if (status === 1) {
      return todo.status === 1;
    } else if (status === 2) {
       return todo.status === 2;
    } else if (status === 3) {
      return todo.status === 3
    } else {
      return todo;
    }
  })

  return (
    <div className="App">
      <>
        <TodoForm addTask={addTask} newTask={newTask}/>
        <TodoFilter handleStatus={handleStatus} />
        <TodoList todos={filterTodos} setTodos={setTodos} status={status} />
      </>
    </div>
  );
}

export default App;
