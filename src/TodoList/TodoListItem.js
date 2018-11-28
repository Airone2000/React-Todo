import React from 'react';
import PropTypes from 'prop-types';

function TodoListItem({todo, onDeleteTodo}) {
  const {title} = todo;
  return (
    <div className="todolist-item">
      <div className="todo-title">
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