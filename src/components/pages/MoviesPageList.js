import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './HomePageList.module.css';

const MoviesPageList = ({ films, query, location }) => (
  <>
    <ul className={styles.container}>
      {films.map(film => (
        <li className={styles.list} key={film.id}>
          <Link
            to={{
              pathname: `/movies/${film.id}`,
              state: {
                from: location.pathname,
                search: query,
              },
            }}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default withRouter(MoviesPageList);
