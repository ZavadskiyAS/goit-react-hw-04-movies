import React, { Component } from 'react';
import { fetchReviews } from '../../services/Api';
import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    this.getReview();
  }

  getReview = async () => {
    try {
      const findId = props => props.match.params.id;
      const id = findId(this.props);
      const reviews = await fetchReviews(id);
      this.setState({ reviews: reviews.data.results });
    } catch (message) {
      this.setState({ message });
    }
  };

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul className={styles.container}>
          {reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Reviews;
