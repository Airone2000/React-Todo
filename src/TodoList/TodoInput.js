import React from 'react';

function TodoInput() {
  return (
    <form className="todo-input">
      <div className="inline-controls">
        <input type="text" placeholder="Type-in your todo ..." />
        <button type="submit">+Add</button>
      </div>
    </form>
  );
}

export default TodoInput;