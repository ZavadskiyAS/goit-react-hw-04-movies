import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePageList.module.css';

const HomePageList = ({ films }) => (
  <>
    <h1 className={styles.title}>Trending today</h1>
    <ul className={styles.container}>
      {films.map(film => (
        <li className={styles.list} key={film.id}>
          <Link
            to={{
              pathname: `/movies/${film.id}`,
              state: { from: '/' },
            }}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default HomePageList;
