import React, {Component} from 'react';
import { fetchMovies } from '../services/moviesApi';
import MoviesList from '../moviesList/MoviesList';

class HomePage extends Component {
    state = { movies:[] };
    componentDidMount() {
        fetchMovies().then(data => this.setState({movies: data.result}));
    }
    render() {
        const { movies } = this.state;
        return (
            <div>
                <h2>Trending today</h2>
                <MoviesList movies={movies} />
            </div>
        );
    }
}

export default HomePage;
