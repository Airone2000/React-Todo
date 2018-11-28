import React from 'react';

function TodoInput({onAddTodo}) {

  let ref = React.createRef();

  return (
    <form 
      className="todo-input"
      onSubmit={event => {
        event.preventDefault();
        onAddTodo(ref.current.value);
        ref.current.value = '';
      }}
    >
      <div className="inline-controls">
        <input type="text" ref={ref} placeholder="Type-in your todo ..." />
        <button type="submit">+Add</button>
      </div>
    </form>
  );
}

export default TodoInput;