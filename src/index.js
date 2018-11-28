import React from 'react';
import ReactDOM from 'react-dom';
import {default as TodoContainer} from './TodoList/TodoListContainer';
import './index.css';

ReactDOM.render(
  <TodoContainer />,
  document.querySelector('#root')
);
