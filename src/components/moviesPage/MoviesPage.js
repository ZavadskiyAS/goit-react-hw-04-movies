import React, { Component, lazy, Suspense } from 'react';
import queryString from 'query-string';
import { fetchQueryMovies } from '../../services/Api';
import Loader from '../pages/Loader';
import styles from './MoviesPage.module.css';

const MoviesPageList = lazy(() =>
  import('../pages/MoviesPageList' /* webpackChunkName: 'Movies-Page-List' */),
);

class MoviesPage extends Component {
  state = {
    query: '',
    message: null,
    queryMovies: [],
  };

  componentDidMount() {
    if (this.props.location.search) {
      const parsed = queryString.parse(this.props.location.search);
      const query = parsed.query;
      fetchQueryMovies(query).then(result =>
        this.setState({ queryMovies: result.data.results, query }),
      );
    }
  }

  getQueryMovies = async () => {
    try {
      // const parsed = queryString.parse(this.props.history.location.search);
      // const query = parsed.query;
      const queryMovies = await fetchQueryMovies(
        this.state.query,
      ).then(result => this.setState({ queryMovies: result.data.results }));
    } catch (error) {
      this.setState({ message: error });
    }
  };
  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements[0].value;
    if (query) {
      this.props.history.push({
        ...this.props.location,
        search: `query=${query}`,
      });
    }
    this.getQueryMovies(this.state.query);
  };

  render() {
    const { query, queryMovies } = this.state;
    return (
      <>
        <div className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <input
              className={styles.SearchFormInput}
              type="search"
              placeholder="Search movies..."
              autoComplete="off"
              value={query}
              onChange={this.handleChange}
            />
            <button className={styles.SearchFormButton} type="submit"></button>
          </form>
        </div>
        <Suspense fallback={<Loader />}>
          {query && <MoviesPageList query={query} films={queryMovies} />}
        </Suspense>
      </>
    );
  }
}

export default MoviesPage;
