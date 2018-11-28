import React from 'react';
import ReactDOM from 'react-dom';
import {default as TodoContainer} from './TodoList/TodoList.container';

ReactDOM.render(
  <TodoContainer />,
  document.querySelector('#root')
);
