import React from 'react'

export default function TodoItem({ id, todo, status}) {
  return (
    <div>
      <li key={id} className="todo">{todo.todo}</li>
    </div>
  )
}
 