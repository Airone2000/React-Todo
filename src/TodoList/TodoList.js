import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

function TodoList({todoCollection, onDeleteTodo}) {
  return (
    <ul className="todolist">
    {todoCollection.map(todo =>
      <li 
        key={todo.id}
      >
        <TodoListItem 
          todo={todo}
          onDeleteTodo={() => onDeleteTodo(todo)} 
        />
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