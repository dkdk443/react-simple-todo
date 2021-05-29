import React from 'react'
import TodoItem from './TodoItem'

function TodoList() {
  return (
    <div>
       <section>
          <ul className="todolist">
            <TodoItem />
            <TodoItem />
            <TodoItem />
          </ul>
        </section>
    </div>
  )
}

export default TodoList;