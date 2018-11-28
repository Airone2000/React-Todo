import React from 'react';
import ReactDOM from 'react-dom';
import {default as TodoContainer} from './TodoList/TodoList.container';
import './index.css';

ReactDOM.render(
  <TodoContainer />,
  document.querySelector('#root')
);
