import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Loader from './components/pages/Loader';


const HomePage = lazy(() =>
  import('./components/homePage/HomePage'),
);

const MovieDetailsPage = lazy(() =>
  import(
    './components/movieDetailsPage/MovieDetailsPage'),
);

const MoviesPage = lazy(() =>
  import(
    './components/moviesPage/MoviesPage'),
);

const NotFound = lazy(() =>
  import('./components/pages/NotFound'),
);

const container = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '0 16px',
};

const App = () => {
  return (
    <div style={container}>
      <Nav />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact render={props => <HomePage {...props} />} />
          <Route
            path="/movies/:id"
            render={props => <MovieDetailsPage {...props} />}
          />
          <Route path="/movies" render={props => <MoviesPage {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
