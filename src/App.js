import React from 'react';
import MainMenu from './MainMenu';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {default as TodoContainer} from './TodoList/TodoListContainer';
import About from './TodoList/About';
import './index.css';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <MainMenu />
        <Route path="/" exact={true} component={TodoContainer} />
        <Route path="/about" component={About} />
      </React.Fragment>
    </Router>
  );
}