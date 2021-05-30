import React from 'react'
import TodoList from './TodoList';

export default function TodoItem({ id, todo }) {
  let statusName = ''
  if (todo.status === 1) {
    statusName = 'TODO';
  } else if (todo.status === 2) {
    statusName = 'DOING'
  } else {
    statusName = 'DONE'
  }
  return (
    <div>
      
      <li
        key={id}
        onClick={() => console.log(todo)}
        className={todo.status === 3 ? 'todo is-done' : 'todo'}><span className={todo.status === 1 ? 'tag is-warning' : todo.status === 2 ? 'tag  is-info' : todo.status === 3 ? 'tag is-success' : 'tag'}>
        {statusName}</span>{todo.todo} <div className="button">Next</div></li>
    </div>
  )
}
 