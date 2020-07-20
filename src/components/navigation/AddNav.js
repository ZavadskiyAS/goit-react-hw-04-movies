import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Nav.module.css';

const activeStyle = {
  color: 'palevioletred',
  fontWeight: 'bold',
};

const AddNav = ({ id, location }) => (
  <ul className={styles.container}>
    <li className={styles.list}>
      <NavLink
        to={{
          pathname: `/movies/${id}/cast`,
          state: { from: location.pathname },
        }}
        exact
        activeStyle={activeStyle}>
        Cast
      </NavLink>
    </li>
    <li className={styles.list}>
      <NavLink
        to={{
          pathname: `/movies/${id}/reviews`,
          state: { from: location.pathname },
        }}
        activeStyle={activeStyle}>
        Reviews
      </NavLink>
    </li>
  </ul>
);

export default withRouter(AddNav);
