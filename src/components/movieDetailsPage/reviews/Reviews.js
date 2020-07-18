import React, { Component } from 'react';
import { fetchReviews } from '../../services/moviesApi';

const getId = props => props.match.params.movieId;

class Reviews extends Component {
  state = { reviews: [] };

  componentDidMount() {
    const id = getId(this.props);
    fetchReviews(id).then(result =>
      this.setState({ reviews: result.data.results }),
    );
  }

  render() {
    const { reviews } = this.state;
    return reviews.length === 0 ? (
      <h3>We don&acute;t have any reviews for this movie</h3>
    ) : (
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>
              Author: <span>{review.author}</span>
            </h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Reviews;