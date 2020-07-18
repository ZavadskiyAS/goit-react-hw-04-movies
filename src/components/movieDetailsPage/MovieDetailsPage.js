import React, { Component, lazy, Suspense } from 'react';
import Spinner from 'react-spinkit';
import { Route, NavLink } from 'react-router-dom';
import { fetchMovieDetails } from '../services/moviesApi';

const Cast = lazy(() => import('./cast/Cast'));

const Reviews = lazy(() =>
  import('./reviews/Reviews'),
);

const getId = props => props.match.params.movieId;
const getGanres = arr => arr.map(genre => <li key={genre.id}>{genre.name}</li>);
const getYear = str => {
  return str.substr(0, 4);
};

class MovieDetailsPage extends Component {
  state = { film: null };

  componentDidMount() {
    const id = getId(this.props);
    console.log(this.props);
    fetchMovieDetails(id).then(result => this.setState({ film: result.data }));
  }

  handleClick = () => {
    const { history, location } = this.props;
    if (location.state) {
      if (location.state.search) {
        history.push({
          pathname: location.state.from,
          search: `query=${location.state.search}`,
        });
      } else {
        history.push('/');
      }
    } else {
      history.push('/');
    }
  };

  render() {
    const { film } = this.state;
    const { location } = this.props;
    return (
      film && (
        <section>
          <div>
            <button type="button" onClick={this.handleClick}>
              Go back
            </button>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
                width="200"
              />
            </div>
            <ul>
              <li>
                <h2>
                  {film.title}
                  <span>({getYear(film.release_date)})</span>
                </h2>
              </li>
              <li>Vote average : {film.vote_average}</li>
              <li>
                <h3>Overview</h3>
                <p>{film.overview}</p>
              </li>
              <li>
                <h3>Genres</h3>
                <ul>{getGanres(film.genres)}</ul>
              </li>
            </ul>
          </div>
          <div>
            <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink
                  to={{
                    pathname: `/movies/${getId(this.props)}/cast`,
                    state: {
                      from: location.state ? location.state.from : '/',
                      search: location.state ? location.state.search : '',
                    },
                  }}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: `/movies/${getId(this.props)}/reviews`,
                    state: {
                      from: location.state ? location.state.from : '/',
                      search: location.state ? location.state.search : '',
                    },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
          <Suspense
            fallback={<Spinner name="ball-pulse-sync" color="purple" />}
          >
            <Route path="/movies/:movieId/cast" component={Cast} />
            <Route path="/movies/:movieId/reviews" component={Reviews} />
          </Suspense>
        </section>
      )
    );
  }
}

export default MovieDetailsPage;