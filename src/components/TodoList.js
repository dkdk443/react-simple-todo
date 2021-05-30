import React, { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, todo: 'aaaaa', status: 1 },
    { id: 2, todo: 'タスク２', status: 1 },
    { id: 3, todo: 'タスク3', status: 2 },
    { id: 4, todo: 'タスク4', status: 3 }
  ]);

  const [status, setStatus] = useState(1);
  
  return (
    <div>
       <section>
          <ul className="todolist">
          {
            todos.map(todo => {
              return (
                <TodoItem key={ todo.id } todo={ todo }/>
              )
            })
            }
          </ul>
        </section>
    </div>
  )
}

export default TodoList;