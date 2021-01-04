import React from 'react'

function NewItem({ updateList }) {
  const addTodo = (event) => { 
    event.preventDefault()
    const todoObject = {
      id: Date.now(),
      name: event.target.todo.value,
      done: false
    }
    updateList(todoObject)
  }
  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" name="todo" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default NewItem
