import React from 'react'

export default function TodoItem({ id, todo }) {
  return (
    <div>
      <li key={id}  onClick={() => console.log(todo)} className={todo.status === 3 ? 'todo is-done' : 'todo'}>{todo.todo}</li>
    </div>
  )
}
 