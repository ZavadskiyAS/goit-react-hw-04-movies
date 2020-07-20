import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const activeStyle = {
  color: 'palevioletred',
  fontWeight: 'bold',
};

const Nav = () => (
  <ul className={styles.container}>
    <li className={styles.list}>
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
    </li>
    <li className={styles.list}>
      <NavLink to="/movies" activeStyle={activeStyle}>
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Nav;
