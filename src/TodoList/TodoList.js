import React from 'react';
import PropTypes from 'prop-types';

function TodoList({todoCollection}) {
  return (
    <ul className="todolist">
    {todoCollection.map(todo =>
      <li 
        key={todo.id}
      >
        {todo.title}
      </li>
    )}
    </ul>
  );
}

TodoList.propTypes = {
  todoCollection: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default TodoList;