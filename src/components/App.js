import React, { lazy, Suspense } from 'react';
import Spinner from 'react-spinkit';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation/Navigation';

const HomePage = lazy(() =>
  import('./homePage/HomePage'),
);

const MovieDetailsPage = lazy(() =>
  import(
    './movieDetailsPage/MovieDetailsPage'),
);

const MoviesPage = lazy(() =>
  import('./moviesPage/MoviesPage'),
);
const NotFound = lazy(() =>
  import('./notFound/NotFound'),
);

const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Spinner name="ball-pulse-sync" color="purple" />}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route path="/movies" component={MoviesPage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;