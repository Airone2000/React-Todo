import React from 'react';
import {Link} from 'react-router-dom';

const MainMenu = () => (
  <ul className="main-menu">
    <li>
      <Link to="/">TodoList</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
);

export default MainMenu;