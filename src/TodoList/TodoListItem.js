import React from 'react';
import PropTypes from 'prop-types';

function TodoListItem({todo}) {
  const {title} = todo;
  return (
    <div className="todolist-item">
      {title}
    </div>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};


export default TodoListItem;