import React from 'react';
import TodoInput from './TodoInput.dumb';

class TodoList extends React.Component
{
  render() {
    return (
      <div className="todolist-container">
        <TodoInput />
        TODOLIST CONTAINER
      </div>
    );
  }
}

export default TodoList;