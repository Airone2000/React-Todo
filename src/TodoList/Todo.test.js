import React from 'react';
import renderer from 'react-test-renderer';
import TodoListItem from './TodoListItem';

it('renders a TodoListItem', () => {

  const props = {
    todo: {title: 'Une todo', done: true},
    onDeleteTodo: function(){},
    onToggleTodo: function(){}
  };

  const tree = renderer
    .create(<TodoListItem todo={props.todo} onDeleteTodo={props.onDeleteTodo} onToggleTodo={props.onToggleTodo} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});