import React, { Component } from 'react';
import { fetchTrending } from '../../services/Api';
import HomePageList from '../pages/HomePageList';

class HomePage extends Component {
  state = {
    movies: [],
    message: null,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const movies = await fetchTrending();
      this.setState({ movies: movies.data.results });
    } catch (error) {
      this.setState({ message: error });
    }
  };
  render() {
    const { movies } = this.state;
    return (
      <>
        <HomePageList films={movies} />
      </>
    );
  }
}

export default HomePage;
