import React, { lazy, Suspense } from 'react';
import AddNav from '../navigation/AddNav';
import { Route, Switch, withRouter } from 'react-router-dom';
import Loader from './Loader';
import styles from './MoviePage.module.css';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: 'Cast-Page' */));

const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: 'Reviews-Page' */),
);

const imageUrl = 'https://image.tmdb.org/t/p/w500';

const MoviePage = ({ movie, genres, match, onBack }) => (
  <>
    <button className={styles.button} onClick={onBack}>
      Go to back
    </button>
    <div className={styles.container}>
      <div className={styles.image}>
        <img alt="film" src={imageUrl + `${movie.poster_path}`} />
      </div>
      <div className={styles.info}>
        <h1>{movie.title}</h1>
        <p>User score: {movie.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{genres.join(' ')}</p>
      </div>
    </div>
    <div>
      <h2 className={styles.title}>Additional information</h2>
      <AddNav id={movie.id} />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            path={`${match.path}/cast`}
            render={props => <Cast {...props} id={movie.id} />}
          />
          <Route
            path={`${match.path}/reviews`}
            render={props => <Reviews {...props} id={movie.id} />}
          />
        </Switch>
      </Suspense>
    </div>
  </>
);

export default withRouter(MoviePage);
