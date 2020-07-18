import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/movies">Movies</NavLink>
    </li>
  </ul>
);

export default Navigation;