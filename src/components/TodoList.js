import React, { useState } from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  let todos = props.todos;
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