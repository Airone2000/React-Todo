import React from 'react';
import PropTypes from 'prop-types';

function TodoListItem({todo, onDeleteTodo, onToggleTodo}) {
  const {title} = todo;
  return (
    <div className="todolist-item">
      <input 
        type="checkbox"
        onChange={onToggleTodo}
        checked={todo.done}
      />
      <div className={'todo-title ' + (todo.done && 'done')}>
        {title}
      </div>
      <button 
        className="todo-delete-btn"
        onClick={onDeleteTodo}
      >
        -Delete
      </button>
    </div>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};


export default TodoListItem;