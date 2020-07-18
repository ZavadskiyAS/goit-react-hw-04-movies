import React, { Component } from 'react';
import { fetchCastInformation } from '../../services/moviesApi';

const getId = props => props.match.params.movieId;

class Cast extends Component {
  state = { actors: [] };

  componentDidMount() {
    const id = getId(this.props);
    fetchCastInformation(id).then(result =>
      this.setState({ actors: result.data.cast }),
    );
  }

  render() {
    const { actors } = this.state;
    return (
      actors.length > 0 && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <ul>
                <li>
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      alt={actor.name}
                      width="200"
                    />
                  ) : (
                    <img
                      src="https://ih1.redbubble.net/image.188518724.7199/flat,128x128,075,t-pad,128x128,f8f8f8.u2.jpg"
                      alt={actor.name}
                      width="200"
                    />
                  )}
                </li>
                <li>
                  <h4>{actor.name}</h4>
                </li>
                <li>
                  <h3>Character</h3>
                  <p>{actor.character}</p>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )
    );
  }
}

export default Cast;