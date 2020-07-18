import React, { Component } from 'react';

import queryString from 'query-string';
import { fetchSearch } from '../services/moviesApi';
import MoviesList from '../moviesList/MoviesList';

const getQueryFromLocation = location =>
  queryString.parse(location.search).query;

class MoviesPage extends Component {
  state = { query: '', movies: [] };

  componentDidMount() {
    const { location } = this.props;

    const query = getQueryFromLocation(location);
    if (query) {
      fetchSearch(query).then(result =>
        this.setState({ movies: result.data.results }),
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    const prevQuery = getQueryFromLocation(prevProps.location);
    const nextQuery = getQueryFromLocation(location);
    if (nextQuery !== prevQuery) {
      if (nextQuery !== '' && nextQuery !== undefined) {
        fetchSearch(nextQuery).then(result =>
          this.setState({ movies: result.data.results }),
        );
      }
    }
  }

  handleChange = e =>
    this.setState({
      query: e.target.value,
    });

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query) {
      this.props.history.push({
        ...this.props.location,
        search: `query=${this.state.query}`,
      });
    }
  };

  render() {
    const { location } = this.props;
    const currentQuery = getQueryFromLocation(location);
    const { query, movies } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="search"
            placeholder="Search..."
            autoComplete="off"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        {currentQuery !== '' ? (
          <MoviesList movies={movies} query={currentQuery} />
        ) : (
          <h2>Which movie do you want to find?</h2>
        )}
      </div>
    );
  }
}

export default MoviesPage;