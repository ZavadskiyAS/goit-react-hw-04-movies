import React, { Component } from 'react';
import { fetchMovie } from '../../services/Api';
import MoviePage from '../pages/MoviePage';

class MovieDetailsPage extends Component {
  state = {
    movie: {},
    genres: [],
  };

  componentDidMount() {
    this.getMovie();
    this.setState({
      from: this.props.location.state.from,
      search: this.props.location.state.search,
    });
  }

  getMovie = async () => {
    try {
      const findId = props => props.match.params.id;
      const id = findId(this.props);
      const movie = await fetchMovie(id);
      const genres = movie.data.genres.map(genre => genre.name + ' ');
      this.setState({ genres: genres, movie: movie.data });
    } catch (error) {
      console.log(error);
    }
  };

  handleClickButton = () => {
    const { history } = this.props;
    if (this.state.search !== undefined) {
      history.push({
        pathname: this.state.from,
        search: `query=${this.state.search}`,
      });
    } else {
      history.push('/');
    }
  };

  render() {
    const { movie, genres } = this.state;
    return (
      <>
        <MoviePage
          genres={genres}
          movie={movie}
          onBack={this.handleClickButton}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
