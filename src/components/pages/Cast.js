import React, { Component } from 'react';
import { fetchCast } from '../../services/Api';
import styles from './Cast.module.css';

const imageUrl = 'https://image.tmdb.org/t/p/w500';

class Cast extends Component {
  state = {
    casts: [],
    message: null,
  };

  componentDidMount() {
    this.getCast();
  }

  getCast = async () => {
    try {
      const findId = props => props.match.params.id;
      const id = findId(this.props);
      const casts = await fetchCast(id);
      this.setState({ casts: casts.data.cast });
    } catch (message) {
      this.setState({ message });
    }
  };

  render() {
    const { casts } = this.state;
    return (
      <>
        <ul className={styles.container}>
          {casts.map(cast => (
            <li className={styles.list} key={cast.id}>
              <img
                alt="cast"
                style={{ width: 100, height: 'auto' }}
                src={imageUrl + `${cast.profile_path}`}
              />
              <p>{cast.name}</p>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
