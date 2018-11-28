import React from 'react';
import TodoInput from './TodoInput';
import {default as TodoListUl} from './TodoList';

class TodoList extends React.Component
{
  state = {
    todo: [
      {
        id: 1,
        title: 'Faire la cuisine'
      },
      {
        id: 2,
        title: 'Repasser le linge'
      }
    ]
  };

  render() {
    return (
      <div className="todolist-container">
        <TodoInput />
        <TodoListUl todoCollection={this.state.todo} />
      </div>
    );
  }
}

export default TodoList;