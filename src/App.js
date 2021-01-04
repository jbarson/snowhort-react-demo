import React from 'react'
import './App.css';
import TodoList from './components/TodoList';
import NewItem from './components/NewItem';

class App extends React.Component {
  state = {
    listItems: [
      {
        id: 0,
        name: 'Learn React',
        done: false
      },
      {
        id: 1,
        name: 'Remember stuff',
        done: false
      },
      {
        id: 2,
        name: 'Fix washing machine',
        done: false
      }
    ]
  }
  updateList = (todo) => {
    this.setState({listItems: [...this.state.listItems, todo ]})
  }
  render() { 
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoList listItems={this.state.listItems }/>
        <NewItem updateList={this.updateList }/>
      </div>
    );
  }
  
}

export default App;
