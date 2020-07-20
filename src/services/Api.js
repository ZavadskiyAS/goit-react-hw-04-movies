import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// const key = '0ccd4bf2259c8c1465114b232f00f305';

export const fetchTrending = async () => {
  try {
    const movies = await axios.get(
      `/trending/movie/day?api_key=${process.env.REACT_APP_UNIQUE_KEY}`,
    );

    return movies;
  } catch (error) {
    console.log(error);
  }
};

// "https://api.themoviedb.org/3/movie/582596?api_key=0ccd4bf2259c8c1465114b232f00f305&language=en-US"

export const fetchMovie = async id => {
  try {
    const movie = await axios.get(
      `/movie/${id}?api_key=${process.env.REACT_APP_UNIQUE_KEY}&language=en-US`,
    );

    return movie;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCast = async id => {
  try {
    const casts = await axios.get(
      `/movie/${id}/credits?api_key=${process.env.REACT_APP_UNIQUE_KEY}`,
    );
    return casts;
  } catch (error) {
    console.log(error);
  }
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export const fetchReviews = async id => {
  try {
    const reviews = await axios.get(
      `/movie/${id}/reviews?api_key=${process.env.REACT_APP_UNIQUE_KEY}&language=en-US&page=1`,
    );
    return reviews;
  } catch (error) {
    console.log(error);
  }
};

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

export const fetchQueryMovies = async query => {
  try {
    const queryMovies = await axios.get(
      `search/movie?api_key=${process.env.REACT_APP_UNIQUE_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    );
    return queryMovies;
  } catch (error) {
    console.log(error);
  }
};
