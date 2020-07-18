import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const MoviesList = ({ match, movies, query }) => {
  return (
    <ul>
      {movies.length > 0 &&
        movies.map(film => (
          <li key={film.id}>
            <Link
              to={{
                pathname: `/movies/${film.id}`,
                state: { from: match.url, search: query },
              }}
            >
              {film.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default withRouter(MoviesList);