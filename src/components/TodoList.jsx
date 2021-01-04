import React from 'react'
import TodoItem from './TodoItem';

function TodoList({listItems}) {
  return (
    <div>
      {listItems.map(item => <TodoItem item={item} />)}
    </div>
  )
}

export default TodoList
