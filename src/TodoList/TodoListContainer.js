import React from 'react';
import TodoInput from './TodoInput';
import {default as TodoListUl} from './TodoList';

class TodoList extends React.Component
{
  state = {
    todo: [
      {
        id: 1,
        title: 'Faire la cuisine',
        done: false
      },
      {
        id: 2,
        title: 'Repasser le linge',
        done: true
      }
    ]
  };

  addTodoToState = (todo) => {
    this.setState({
      todo: [{
        id: this.state.todo.length + 1,
        title: todo
      }, ...this.state.todo]
    });
    console.log('ADDED');
  };

  deleteTodoFromState = (todoToDelete) => {
    const todo = [...this.state.todo];
    const indexOfTodo = todo.indexOf(todoToDelete);
    if(indexOfTodo > -1) {
      todo.splice(indexOfTodo, 1);
      this.setState({todo});
      console.log('DELETED');
    }
  }

  toggleTodoStatus = (todoToToggle) => {
    const todo = [...this.state.todo];
    const indexOfTodo = todo.indexOf(todoToToggle);
    if(indexOfTodo > -1) {
      todo[indexOfTodo]['done'] = !todo[indexOfTodo]['done'];
      this.setState({todo});
      console.log('TOGGLED');
    }
  }

  render() {
    return (
      <div className="todolist-container">
        <TodoInput onAddTodo={this.addTodoToState} />
        <TodoListUl 
          todoCollection={this.state.todo}
          onDeleteTodo={this.deleteTodoFromState}
          onToggleTodo={this.toggleTodoStatus}
        />
      </div>
    );
  }
}

export default TodoList;